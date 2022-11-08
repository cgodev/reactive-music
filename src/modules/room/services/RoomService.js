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
        
        setTokens(roomId, data);
        return data;

    } catch (error) {
        console.log(error);
        return {};
    }
}

const setTokens = (roomId, { room }) => {
    Cookies.set("token", room.token, { path: "" });
    Cookies.set("refresh_token", room.refresh_token, { path: "" });
}

export const RoomService = {
    fetchRoom
};