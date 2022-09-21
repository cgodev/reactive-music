import ApiConnector from "../../../helpers/ApiConnector";

const AddToPlaylist = async (token = "", trackId, playlistId = "5ADNOwZXizJoWuil9Uzpjm") => {
    const results = await ApiConnector.get(`/playlists/${playlistId}/tracks?uris=${trackId}&position=0`, { 
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
        },
    });

    // const { items } = results.data.tracks;
    return results;
}

export const PlaylistService = {
    AddToPlaylist
};