// React
import { useState } from "react";

// Service
import { AuthService } from "../services/AuthService";

const Auth = () => {
    const [error, setError] = useState(null);
    const handleClick = async () => {
        /* 
            When the user login in the application
            find another way to get the uid, from react state or something similar.
        */
        const uid = localStorage.getItem("uid");
        const result = await AuthService.signIn(uid);
        setError(result);
    }

    return (
        <div className="col d-flex flex-column align-items-center">
            <button className="btn btn-dark btn-outline-light d-flex" onClick={handleClick}>
                Spotify Login
            </button>
            { error && <h6 className="fw-light mt-3 text-warning">{error}</h6> }
        </div>
    );
}

export default Auth;