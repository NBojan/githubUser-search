import { useAuth0 } from "@auth0/auth0-react";
import loadingGif from "../images/preloader.gif";
import { Navigate } from "react-router-dom"

const PrivateRoute = ({children}) => {
    const { user, isAuthenticated, isLoading} = useAuth0();
    const isUser = isAuthenticated && user;

    if(isLoading){
        return (
            <div className="centerFlex">
                <img src={loadingGif} alt="Loading..." />
            </div>
        )
    }
    else if(!isUser){
        return <Navigate to="/login" />
    }
    return (  
        <>{children}</>
    );
}
 
export default PrivateRoute;