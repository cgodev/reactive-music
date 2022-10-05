import axios from "axios";
import pretier from "../../helpers/Pretier";
// import ApiConnector from "../../../helpers/ApiConnector";

const getPlaylistId = () => {
    return localStorage.getItem('playlistId') || '';
}

//url:`https://api.spotify.com/v1/playlists/${getPlaylistId()}/tracks/?uris=${trackId}`,

const getHeaders = () => {
    return {
        "Authorization": `Bearer ${localStorage.getItem('token').toString() || ''}`,
        "Content-Type": "application/json"
    }
}

const addToPlaylist = async (token = "", trackId, playlistId = "5ADNOwZXizJoWuil9Uzpjm") => {
    const { data } = await axios({
        url: "https://api.spotify.com/v1/playlists/"+getPlaylistId()+"/tracks/?uris="+trackId,
        //url:`https://api.spotify.com/v1/playlists/${getPlaylistId()}/tracks/?uris=${trackId}`,
        method: "POST",
        headers: getHeaders()
    });

    // const { items } = results.data.tracks;
    return data;
}

const createPlaylist = async(userId,playlistData) => {
    const response = await axios.post(
        `https://api.spotify.com/v1/users/${userId}/playlists`, 
        playlistData ,
        {
            headers: getHeaders()
        }
    );
    //console.log(`Response ${JSON.stringify(response)}`);

    // const { items } = results.data.tracks;
    return response.data;
}

const fetchPlaylist = async (playlistId) => {
    const response = await axios.get(
        `https://api.spotify.com/v1/playlists/${playlistId}`, {
            headers: getHeaders()
        }
    );
    console.log(`Response ${pretier(response)}`);

    const { name } = response.data;
    const { items } = response.data.tracks;
    return {
        name, tracks: items
    };
}



export  const PlaylistService = {
    addToPlaylist,
    createPlaylist,
    fetchPlaylist
};