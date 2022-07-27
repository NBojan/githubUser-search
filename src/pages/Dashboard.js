import {Navbar, Info, Search, UserInfo, Repos} from "../components/index";
import { useGlobalContext } from "../context";
import loadingGif from "../images/preloader.gif";

const Dashboard = () => {
    const {loading} = useGlobalContext();
    
    if(loading){
        return (
            <main>
                <Navbar />
                <div className="containerBoot m-auto">
                    <Search />
                    <div className="loadingDiv">
                        <img src={loadingGif} alt="Loading..."/>
                    </div>
                </div>
            </main>
        )
    }
    return (  
        <main>
            <Navbar />
            <div className="containerBoot m-auto">
                <Search />
                <Info />
                <UserInfo />
                <Repos />    
            </div>            
        </main>
    );
}
 
export default Dashboard;