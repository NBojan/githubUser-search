import { Link } from "react-router-dom";

const Error = () => {
    return (  
        <section className="errorPage">
            <div className="containerBoot m-auto centerFlex">
                <div className="errorCard ta-center">
                    <h1 className="titleC">404</h1>
                    <h3 className="capitalize mTB-32">Sorry, the page you tried cannot be found</h3>
                    <Link to="/" className="btn btn-m btn-prim">Back Home</Link>
                </div>
            </div>
        </section>
    );
}
 
export default Error;