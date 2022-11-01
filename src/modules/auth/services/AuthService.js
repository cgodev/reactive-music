import axios from "axios";
import { config } from "../../../config/index";

async function signIn(uid){
    try {
        const { data, status } = await axios({
            url: `${config.apiUrl}/credentials/${uid}`,
            method: "GET"
        });

        if(!data || status != 200){
            return "There was a problem, please try again";
        }

        const { client_secret, client_id } = data.credentials;
        window.location.href = `${config.apiUrl}/auth/${client_secret}/${client_id}`;
        
    } catch (error) {
        console.log(error);
        return "There was a problem, please try again";
    }
}

export const AuthService = {
    signIn
};