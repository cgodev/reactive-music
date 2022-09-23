import axios from "axios";
// import ApiConnector from "../../../helpers/ApiConnector";

const addToPlaylist = async (token = "", trackId, playlistId = "5ADNOwZXizJoWuil9Uzpjm") => {
    const { data } = await axios({
        url: "https://api.spotify.com/v1/playlists/"+playlistId+"/tracks/?uris="+trackId,
        method: "POST",
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
        }
    });

    // const { items } = results.data.tracks;
    return data;
}

const createPlaylist = async(userId,playlistData) => {
    const token = localStorage.getItem('token');
    const response = await axios.post(
        `https://api.spotify.com/v1/users/${userId}/playlists`, 
        playlistData ,
        {
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        }
    );
    console.log(`Response ${JSON.stringify(response)}`);

    // const { items } = results.data.tracks;
    return response;
}



export const PlaylistService = {
    addToPlaylist,
    createPlaylist
};