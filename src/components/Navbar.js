import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
    const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();
    const isUser = isAuthenticated && user;

    return (  
        <nav>
            <div className="containerBoot m-auto d-flex space-between align-center">
                {isUser && (
                    <div className="mr-32 d-flex align-center">
                        <img src={isUser.picture} alt="USER_IMG" className="loginImg"/>
                        <p className="ls-1 titleC">Welcome, <span className="fw-700 uppercase">{isUser.name}</span></p>
                    </div>
                )}

                {isUser ? <button className="btn" onClick={() => logout({returnTo: window.location.origin})}>Logout</button>
                        : <button className="btn" onClick={loginWithRedirect}>Login</button>
                }
                
            </div>
        </nav>
    );
}
 
export default Navbar;