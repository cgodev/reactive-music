import { useState, useEffect, createContext } from "react";
import { genresService } from "../services/genreServices";
import GenresList from "./GenresList";

import "../Genres.css";
import GenresSearchBar from "./GenresSearchBar";

export const genresContext = createContext();

const GenresSearch = ({selectionCallback}) => {
    const [genresSeeds, setGenresSeeds] = useState([]);
    const [genresBack, setGenresBack] = useState([]);
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
        setGenresBack(seeds);
    }

    const addGenre = (genreToAdd) => {
        setGenresArray([...genresArray, genreToAdd]);
    }

    const removeGenre = (genreToRemove) => {
        setGenresArray(genresArray.filter(genre => genre !== genreToRemove));
    }

    return (
        <>
            <GenresSearchBar genresBack={genresBack} setGenresSeeds={setGenresSeeds}/>
            <div className="mb-3 genres-list">
                <GenresList
                    genresSeeds={genresSeeds}
                    addGenre={addGenre}
                    removeGenre={removeGenre}
                />
            </div>
            {/* {renderSelectedGenres()} */}
        </>
    )
}

export default GenresSearch;