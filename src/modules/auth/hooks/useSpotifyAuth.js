// Config
import { config } from "../../../config/index";

const useSpotifyAuth = () => {
    const signIn = () => {
        const params = new URLSearchParams({
            client_id: config.clientId,
            response_type: config.responseType,
            redirect_uri: config.redirectUrl,
            show_dialog: config.showDialog
        });
    
        const popup = window.open(`${config.baseUrl}/authorize?${params}`, "Login", "width=400, height=600");
    
        window.onSpotifyAuth = (token, expDate) => {
            localStorage.setItem("token", token);
            localStorage.setItem("expdate", expDate);
            popup.close();
        }
    }

    const getAuthData = () => {
        const params = new URLSearchParams(window.location.hash.substring(1));
        const token = params.get("access_token");
        const expDate = params.get("expires_in");
        window.opener.onSpotifyAuth(token, expDate);
    }

    return {
        signIn,
        getAuthData
    }
}

export default useSpotifyAuth;