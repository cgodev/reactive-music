import axios from "axios";
import Swal from "sweetalert2";
import { config } from "../../../config/index";

async function signIn() {
    try {
        const token = localStorage.getItem("token");

        const {data} = await axios({
            url: `${config.apiUrl}/credentials`,
            method: "GET",
            headers: {
                "x-token": token
            }
        });

        console.log(data);

        if (data.ok) {
            console.log(data.credentials);
            const { client_secret, client_id } = data.credentials;
            window.location.href = `${config.apiUrl}/auth/${client_secret}/${client_id}`;
        }else{
            Swal.fire('Something went wrong.', `Error: ${data.msg}`, 'error');
        }
    } catch (error) {
        console.log(error);
        return "General error: contact support.";
    }
}

const login = async (data) => {
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