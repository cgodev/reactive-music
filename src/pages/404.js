import { Link } from "react-router-dom";

const NotFound = () => {
    return <> 
        <main className="app-wrapper bg-dark">
            <div className="container h-100 d-flex justify-content-center align-items-center">
                <div className="d-flex justify-content-center align-items-center flex-column">
                    <h1 className="text-center text-white not-found">404</h1>
                    <h2 className="text-center text-warning">Oppss!! Looks like we can't find this.</h2>
                    <p className="text-center text-white">Try again or contact system support</p>
                    <Link to={'/'} className="btn btn-dark btn-outline-light ">Try again.</Link>
                </div>
            </div>
        </main>
    </>
}

export default NotFound;