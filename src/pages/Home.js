import { Link } from "react-router-dom";

const Home = () => {
    return(
        <main className="app-wrapper bg-dark">
            <div className="container h-100 d-flex justify-content-center align-items-center">
                <div className="d-block text-center">
                    <Link to="/auth"  className="btn btn-dark btn-outline-light d-block my-2">I want to host a party.</Link>
                    <Link to="/room/test/test"  className="btn btn-dark btn-outline-light d-block my-2">I want to play music.</Link>
                </div>
            </div>
        </main>
    )
}

export default Home;