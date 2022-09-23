import { useState, useEffect } from "react";
import { genresService } from "../services/genreServices";
import GenresList from "./GenresList";
const GenresSearch = ({selectionCallback}) => {

    const [genresSeeds, setGenresSeeds] = useState([]);
    const [genresArray, setGenresArray] = useState([]);

    useEffect(() => {
        fetchSeeds();
    }, [])

    useEffect(() => {
        selectionCallback(genresArray);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [genresArray])

    const fetchSeeds = async () => {
        const seeds = await genresService.fetchGenresSeeds();
        setGenresSeeds(seeds);
    }

    const addGenre = (genreToAdd) => {
        setGenresArray([...genresArray, genreToAdd]);
    }

    const removeGenre = (genreToRemove) => {
        setGenresArray(genresArray.filter(genre => genre !== genreToRemove));
        setGenresSeeds([...genresSeeds, genreToRemove]);
    }

    const renderSelectedGenres = () => {
        if(genresArray.length>0){
            return <div className="mb-3">
                <p>Selected genres:</p>
                <GenresList genresSeeds={genresArray} genreCallback={removeGenre} />
            </div>
        }
    }

    return <>
        {/* <div className="mb-3">
            <label htmlFor="genreSearchInput" className="form-label">Search a genre</label>
            <input type="text" className="form-control" id="genreSearchInput" placeholder="Eg: Rock" />
        </div> */}
        <p>Select the genres that will be availables to play in your room: </p>
        <div className="mb-3">
            <GenresList genresSeeds={genresSeeds} genreCallback={addGenre}/>
        </div>
        {renderSelectedGenres()}
        
    </>
}

export default GenresSearch;