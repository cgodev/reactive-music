import axios from "axios";
import { config } from "../../config/index";

async function refreshToken(user_role, room_id = null, uid = null){
    // Make user_role dynamic
    console.log(user_role, room_id, uid);
    const params = new URLSearchParams({
        room_id,
        uid,
        user_role
    });

    const { data } = await axios({
        url: config.apiUrl + "/auth/refresh-token?" + params,
        method: "GET",
        withCredentials: true
    });

    return data;
}

export const ManageToken = {
    refreshToken
};