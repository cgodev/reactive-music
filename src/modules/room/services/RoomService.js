import axios from "axios";
import { config } from "../../../config/index";
import Cookies from "js-cookie";
import { generateRoomUrl } from "../../helpers/ManageRoomUrl";

const createRoom = async (name, userId, genres, playlistId) => {
    const token = localStorage.getItem("token");

    const { data } = await axios({
        url: `${config().apiUrl}/rooms/save`,
        method: "POST",
        data: JSON.stringify({
            name: name,
            id_playlist: playlistId,
            spotify_uid: userId,
            token: Cookies.get('token'),
            refresh_token: Cookies.get('refresh_token'),
            genres_seed: genres,
            access_url: generateRoomUrl()
        }),
        headers: {
            "Content-Type": "application/json",
            "x-token": token
        },
        withCredentials: true
    });

    return data;
}

const fetchRoom = async (roomId) => {
    try {
        const { data, status } = await axios({
            url: `${config().apiUrl}/rooms/${roomId}`,
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
    createRoom,
    fetchRoom
};