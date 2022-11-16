import axios from "axios";
import { config } from "../../../config/index";
import Cookies from "js-cookie";

const fetchRoom = async (roomId) => {
    try {
        const { data, status } = await axios({
            url: `${config.apiUrl}/rooms/${roomId}`,
            method: "GET",
            withCredentials: true
        });

        if(!status && status !== 200){
            return {};
        }
        
        setTokens(data);
        return data;

    } catch (error) {
        console.log(error);
        return {};
    }
}

const setTokens = ({ room }) => {
    Cookies.set("token", room.token);
    Cookies.set("refresh_token", room.refresh_token);
}

export const RoomService = {
    fetchRoom
};