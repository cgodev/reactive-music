// React
import { useEffect} from 'react';

// Hooks
import useSpotifyAuth from "../hooks/useSpotifyAuth";

const RedirectPage = () => {
    const { getAuthData } = useSpotifyAuth();

    useEffect(() => {
        getAuthData();
    }, []);

    return (
        <div className="container p-4">
            <h2> Redirecting...</h2>
        </div>
    );
}

export default RedirectPage;