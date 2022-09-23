import ApiConnector from '../../helpers/ApiConnector';

const fetchGenresSeeds = async () => {
    let token = localStorage.getItem('token');

    const response = await ApiConnector.get('/recommendations/available-genre-seeds',{
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
        }
    });
    
    return response.data.genres;
}


export const genresService = {
    fetchGenresSeeds
};