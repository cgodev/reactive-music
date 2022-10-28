import Cookies from "js-cookie";
import ApiConnector from "../../helpers/ApiConnector";
import { ManageToken } from "../../helpers/ManageToken";

const FetchSongsByCriteria = async (criteria = "") => {
    const token = Cookies.get("token");

    try {
        const results = await ApiConnector.get(`/search?q=${criteria}&type=track`, {
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        });
    
        const { items } = results.data.tracks;
        // console.log(items);
        return items;

    } catch (error) {
        const { status } = error.response;
        if(status == 401){
            await ManageToken.refreshToken();
            return await FetchSongsByCriteria(criteria);
        }
    }
}

export const MusicService = {
    FetchSongsByCriteria
};