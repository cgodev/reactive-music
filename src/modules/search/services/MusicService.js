import ApiConnector from "../../helpers/ApiConnector";

const FetchSongsByCriteria = async (token = "", criteria = "Daddy yankee") => {
    const results = await ApiConnector.get(`/search?q=${criteria}&type=track`, {
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
        }
    });

    const { items } = results.data.tracks;
    console.log(items);
    return items;
}

export const MusicService = {
    FetchSongsByCriteria
};