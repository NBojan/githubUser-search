import { useGlobalContext } from "../context";
import { GoRepo, GoGist } from 'react-icons/go';
import { FiUsers, FiUserPlus } from 'react-icons/fi';

const Info = () => {
    const {gitUser} = useGlobalContext();
    const {followers, following, public_repos, public_gists} = gitUser;

    const infoCards = [
        {
            label: "Repos",
            icon: <GoRepo className="icon"/>,
            color: "pink",
            value: public_repos
        },
        {
            label: "Followers",
            icon: <FiUsers className="icon"/>,
            color: "green",
            value: followers
        },
        {
            label: "Following",
            icon: <FiUserPlus className="icon"/>,
            color: "purple",
            value: following
        },
        {
            label: "Gists",
            icon: <GoGist className="icon"/>,
            color: "yellow",
            value: public_gists
        }
    ]

    return (  
        <section className="infoCont d-flex space-between mb-32">
            {infoCards.map((item,index) => {
                const {label, icon, color, value} = item;
                return (
                    <div className="infoCard d-flex align-center" key={index}>
                        <div className={`iconDiv mr-24 ${color}`}>{icon}</div>
                        <div>
                            <h3 className="titleC">{value}</h3>
                            <p>{label}</p>
                        </div>
                    </div>
                )
            })}
           
        </section>
    );
}
 
export default Info;