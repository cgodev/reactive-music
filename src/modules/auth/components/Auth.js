// Config
import { config } from "../../../config/index";

const Auth = () => {
    const handleClick = () => {
        window.location.href = `${config.apiUrl}/auth`;
    }

    return (
        <button className="btn btn-dark btn-outline-light d-flex" onClick={handleClick}>
            Spotify Login
        </button>
    );
}

export default Auth;