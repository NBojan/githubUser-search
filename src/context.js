import React, { useContext, useEffect, useState } from "react";
import mockFollowers from "./mockData.js/mockFollowers";
import mockUser from "./mockData.js/mockUser";
import mockRepos from "./mockData.js/mockRepos";
import axios from "axios";

const API = "https://api.github.com"

const GithubContext = React.createContext();

const GitProvider = ({children}) => {
    const [gitUser, setGitUser] = useState(mockUser);
    const [gitFollowers, setGitFollowers] = useState(mockFollowers);
    const [gitRepos, setGitRepos] = useState(mockRepos);
    const [requests, setRequests] = useState(0);
    const [loading, setLoading] = useState(false);
    const [errMsg, setErrMsg] = useState({show: false, msg: ""});
    
    const getData = async (user) => {
        setLoading(true);
        setErrMsg({show: false, msg: ""});
        const AbortControl = new AbortController();
        const response = await axios(`${API}/users/${user}`, {signal: AbortControl.signal}).catch(err => console.log(err));
        if(response){
            setGitUser(response.data);
            const {followers_url, repos_url} = response.data;
            await Promise.allSettled([axios(`${followers_url}?per_page=100`), axios(`${repos_url}?per_page=100`)])
            .then(result => {
                const [followers, repos] = result;
                if(followers.status === "fulfilled"){
                    setGitFollowers(followers.value.data);
                }
                if(repos.status === "fulfilled"){
                    setGitRepos(repos.value.data);
                }
            })
            .catch(err => console.log(err));
        } else {
            setErrMsg({show: true, msg: "We couldn't find anyone with that username. Try something else."})
        }
        getRequests();
        setLoading(false);
        return () => AbortControl.abort();
    }

    const getRequests = () => {
        axios(`${API}/rate_limit`)
        .then(response => {
            let {remaining} = response.data.rate;
            setRequests(remaining);
            if(remaining === 0){
                setErrMsg({show: true, msg: "No more requests. Please try later."});
            }
        })
        .catch(err => {
            setErrMsg({show: true, msg: err.message});
        })
    }

    useEffect(() => {
        getRequests();
    }, [])

    return (
        <GithubContext.Provider value={{gitUser, gitFollowers, gitRepos, requests, errMsg, loading, getData}}>{children}</GithubContext.Provider>
    )
}

const useGlobalContext = () => useContext(GithubContext);

export {GitProvider, useGlobalContext};

//response.data.rate.remaining