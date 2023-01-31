// React
import { useState } from "react";

// Service
import { AuthService } from "../services/AuthService";

const Auth = () => {
    const [error, setError] = useState(null);

    const handleClick = async () => {
        const result = await AuthService.signIn();
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