import axios from "axios";
import { config } from "../../../config/index";

async function signIn() {
    try {
        /* 
            When the user login in the application
            find another way to get the token, from react state or something similar.
        */
        const token = localStorage.getItem("token");

        const { data, status } = await axios({
            url: `${config.apiUrl}/credentials`,
            method: "GET",
            headers: {
                "x-token": token
            }
        });

        if (!data || status != 200) {
            return "There was a problem with user credentials, please try again or configure them";
        }

        const { client_secret, client_id } = data.credentials;
        window.location.href = `${config.apiUrl}/auth/${client_secret}/${client_id}`;

    } catch (error) {
        console.log(error);
        return "There was a problem with user credentials, please try again or configure them";
    }
}

const login = async(data) => {
    try {
        const response = await axios.post(`${config.apiUrl}/auth/`, data);
        return response.data;

    } catch (error) {
        console.log(error);
        return error.response.data;
    }
}

export const AuthService = {
    signIn,
    login
};