import axios from "axios";
// import ApiConnector from "../../../helpers/ApiConnector";

const AddToPlaylist = async (token = "", trackId, playlistId = "5ADNOwZXizJoWuil9Uzpjm") => {
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

export const PlaylistService = {
    AddToPlaylist
};