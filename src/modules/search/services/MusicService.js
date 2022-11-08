import axios from "axios";
import Cookies from "js-cookie";
import ApiConnector from "../../helpers/ApiConnector";
import { ManageToken } from "../../helpers/ManageToken";

const FetchSongsByCriteria = async (criteria, roomData) => {
    const token = Cookies.get("token");

    if(!criteria){
        return [];
    }

    try {
        const results = await ApiConnector.get(`/search?q=${criteria}&type=track`, {
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        });
    
        const items = getAndProcessGenres(results.data.tracks.items, roomData);

        // console.log(items);
        return items;

    } catch (error) {
        if(error.response){
            const { status } = error.response;
            if(status == 401){
                await ManageToken.refreshToken("GUEST_ROLE", roomData.roomId, roomData.userId);
                return await FetchSongsByCriteria(criteria);
            }
        }

        console.log(error);
        return [];
    }
}

const getAndProcessGenres = async (items, { genres_seed }) => {
    const genresArr = await getGenresInfo(items);

    items.forEach((item, index) => {
        item.genres = genresArr[index];
        item.add = false;
    });

    items.forEach((item) => {
        item.genres.forEach((genre, i) => {
            const genresSplit = genre.split(" ");
            let isMatch;
            
            if(genres_seed[i]){
                for(const genreSeed of genres_seed) {
                    isMatch = genresSplit.some((genreSplit) => genreSplit == genreSeed.toLowerCase());
                    if(isMatch){
                        item.add = true;
                    }
                }
            }
        });
    });

    const itemsFiltered = items.filter((item) => item.add);
    return itemsFiltered;
}

const getGenresInfo = async (items) => {
    const artistsIds = items.map((item) => {
        const artistId = item.artists.map((artist) => artist.id);
        return artistId;
    });
    
    const genres = await Promise.all(artistsIds.map((artistId) => {            
        return fetchGenres(artistId);
    }));

    return genres;
}

const fetchGenres = async (artistId) => {
    const token = Cookies.get("token");
    
    for(const id of artistId) {
        const { data } = await axios({
            url: `https://api.spotify.com/v1/artists/${id}`,
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        });

        return data.genres;
    }
}

export const MusicService = {
    FetchSongsByCriteria
};