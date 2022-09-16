// Hooks
import useSpotifyAuth from "../hooks/useSpotifyAuth";

const Auth = () => {
    const { signIn } = useSpotifyAuth();

    return (
        <div className="row">
            <div className="col">
                <button className="btn btn-primary" onClick={signIn}>
                    Iniciar sesión
                </button>
            </div>
        </div>
    );
}

export default Auth;