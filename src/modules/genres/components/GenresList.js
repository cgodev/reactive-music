import { useEffect, useState } from 'react';
import '../Genres.css';

const GenresList = ({genresSeeds = ['search a genre'], genreCallback}) => {
    const [genresList, setGenresList] = useState([]);

    useEffect(() => {
        setGenresList(genresSeeds);
    }, [genresSeeds])

    const selectGenre = (genreToAdd) => {
        if(!genreCallback) return;
        genreCallback(genreToAdd)
        setGenresList (genresList.filter(genre => genre !== genreToAdd));
    }
    return <div className="genres-list">
        {
            genresList.map( genre => {
                return <span key={genre} onClick={()=> {selectGenre(genre)}} className="badge bg-dark genre-badge">
                    {genre}
                </span>
            })
        }
    </div>
}

export default GenresList;