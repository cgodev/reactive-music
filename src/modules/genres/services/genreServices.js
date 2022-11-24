import { config } from '../../../config';
import axios from 'axios';

const fetchGenresSeeds = async () => {
    try {
        const { data } = await axios({
            url: `${config.apiUrl}/genres`,
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        });

        return data.seeds;

    } catch (error) {
        console.log(error);
    }
}

export const genresService = {
    fetchGenresSeeds
};