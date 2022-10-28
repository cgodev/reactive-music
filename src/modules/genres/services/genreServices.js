import Cookies from 'js-cookie';
import ApiConnector from '../../helpers/ApiConnector';
import { ManageToken } from '../../helpers/ManageToken';

const fetchGenresSeeds = async () => {
    const token = Cookies.get("token");
    
    try {
        const { data } = await ApiConnector.get('/recommendations/available-genre-seeds',{
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        });

        return data.genres;

    } catch (error) {
        const { status } = error.response;
        if(status == 401){
            await ManageToken.refreshToken();
            return await fetchGenresSeeds();
        }    
    }
}

export const genresService = {
    fetchGenresSeeds
};