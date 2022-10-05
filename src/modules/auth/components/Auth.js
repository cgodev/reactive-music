// Hooks
import useSpotifyAuth from "../hooks/useSpotifyAuth";

const Auth = () => {
    const { signIn } = useSpotifyAuth();

    return (
        <button className="btn btn-dark btn-outline-light d-flex" onClick={signIn}>
            Spotify Login
        </button>
    );
}

export default Auth;