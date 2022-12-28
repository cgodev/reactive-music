import axios from "axios";
import Cookies from "js-cookie";
import { ManageToken } from "../../helpers/ManageToken";
import { RoomService } from "../../room/services/RoomService";
// import ApiConnector from "../../../helpers/ApiConnector";

//url:`https://api.spotify.com/v1/playlists/${getPlaylistId()}/tracks/?uris=${trackId}`,

const getHeaders = () => {
    return {
        "Authorization": `Bearer ${Cookies.get('token').toString() || ''}`,
        "Content-Type": "application/json"
    }
}

const addToPlaylist = async (trackId, roomData) => {
    const { roomId, userId, id_playlist } = roomData;

    try {
        const { data } = await axios({
            url: "https://api.spotify.com/v1/playlists/"+id_playlist+"/tracks/?uris="+trackId,
            //url:`https://api.spotify.com/v1/playlists/${getPlaylistId()}/tracks/?uris=${trackId}`,
            method: "POST",
            headers: getHeaders()
        });

        return data;

    } catch (error) {
        const { status } = error.response;
        if(status == 401){
            // Get user role from db userData
            await ManageToken.refreshToken("GUEST_ROLE", roomId, userId);
            return await addToPlaylist(trackId, roomData);
        }
    }
}

const createPlaylist = async(playlistData) => {
    const { userId, name, genres } = playlistData;
    let response = {};

    try {
        response = await axios({
            url: `https://api.spotify.com/v1/users/${userId}/playlists`,
            method: "POST",
            data: JSON.stringify({name}),
            headers: getHeaders()
        });

        const data = await RoomService.createRoom(name, userId, genres, response.data.id);
        return data;

    } catch (error) {
        if(error.response.status){
            const { status } = error.response;

            switch(status){
                case 400: 
                    await deletePlaylist(response.data.id);
                    break;
                case 401:
                    // Get user role from db userData
                    await ManageToken.refreshToken("HOST_ROLE", null, null);
                    return await createPlaylist(playlistData);
            }
        }

        return error.response.data;
    }
}

const deletePlaylist = async (playlistId) => {
    const { status } = await axios({
       url: `https://api.spotify.com/v1/playlists/${playlistId}/followers`,
       method: "DELETE",
       headers: getHeaders()
    });

    return status == 200 ? true : false;
}

const fetchPlaylist = async (roomData) => {
    const { _id, uid, id_playlist } = roomData;

    try {
        const response = await axios.get(
            `https://api.spotify.com/v1/playlists/${id_playlist}`, {
                headers: getHeaders()
            }
        );

        const { name } = response.data;
        const { items } = response.data.tracks;
        return {
            name, tracks: items
        };
        
    } catch (error) {
        if(error.response.status){
            const { status } = error.response;

            switch(status){
                case 401:
                    // Get user role from db userData
                    await ManageToken.refreshToken("GUEST_ROLE", _id, uid);
                    return await fetchPlaylist(roomData);
            }
        }

        return {
            name: "",
            tracks: []
        };
    }
}

export const PlaylistService = {
    addToPlaylist,
    createPlaylist,
    fetchPlaylist
};