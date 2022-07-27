import {Followers, UserCard} from "./index";

const UserInfo = () => {
    return (  
        <section className="userInfo d-flex space-between mt-48 mb-32">
            <UserCard />
            <Followers />
        </section>
    );
}
 
export default UserInfo;