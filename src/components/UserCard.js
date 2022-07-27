import { useGlobalContext } from "../context";
import { MdBusiness, MdLocationOn, MdLink } from 'react-icons/md';

const UserCard = () => {
    const {gitUser} = useGlobalContext();
    const {name, html_url, company, blog, twitter_username, location, avatar_url, bio} = gitUser;

    return (  
        <div className="userCard userInfo-div">
            <header className="d-flex space-between align-center mb-16">
                <div className="d-flex align-center">
                    <img src={avatar_url} alt={name} className="avatarImg"/>
                    <div>
                        <p className="titleC fw-600">{name}</p>
                        <p className="lightC fs-15">@{twitter_username || "No Twitter"}</p>
                    </div>
                </div>
                <a href={html_url} target="_blank" rel="noreferrer" className="btn btn-m followBtn">Follow</a>
            </header>

            <p className="mb-16">{bio}</p>

            <ul className="no-style">
                <li className="card-li">
                    <span className="svg-icon"><MdBusiness /></span>
                    <span>{company || "Home"}</span>
                </li>
                <li className="card-li">
                    <span className="svg-icon"><MdLocationOn /></span>
                    <span>{location || "World"}</span>
                </li>
                <li className="card-li">
                    <span className="svg-icon"><MdLink /></span>
                    <span>{blog ? <a href={`https://${blog}`} className="blogLink">{blog}</a> : "No Blog"}</span>
                </li>
            </ul>
        </div>
    );
}
 
export default UserCard;