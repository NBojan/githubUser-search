import loginImg from "../images/login-img.svg";
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
    const { loginWithRedirect } = useAuth0();

    return (  
        <section className="login containerBoot m-auto centerFlex">
            <div className="login-card">
                <img src={loginImg} alt="LoginImage" className="d-block w100p" />
                <div className="mTB-32 ta-center">
                    <h1 className="titleC mb-18">Github User</h1>
                    <button className="btn btn-m btn-prim uppercase" onClick={loginWithRedirect}>Login / Sign Up</button>
                </div>
            </div>
        </section>
    );
}
 
export default Login;