import { useGlobalContext } from "../context";

const Followers = () => {
    const {gitFollowers} = useGlobalContext();

    return (
        <div className="userInfo-div followersCont">
            <div className="followers">
                {gitFollowers.map((follower, index) => {
                const {login, html_url, avatar_url} = follower;
                    return (
                        <div className="d-flex align-center mb-16" key={index}>
                            <img src={avatar_url} alt={login} className="followerImg" />
                            <div>
                                <p className="titleC fw-600">{login}</p>
                                <a href={html_url} target="_blank" rel="noreferrer" className="d-inblock lightC fs-15">{html_url}</a>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
        
    );
}
 
export default Followers;