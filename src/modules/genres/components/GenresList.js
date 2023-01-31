import { useEffect, useState } from 'react';
import '../Genres.css';

const GenresList = ({genresSeeds = ['search a genre'], addGenre, removeGenre}) => {
    const [genresList, setGenresList] = useState([]);
    
    useEffect(() => {
        if(genresSeeds.length >= 1){
            setGenresList(genresSeeds.map(({name}) => name));
        }
    }, [genresSeeds]);

    const selectGenre = (genreToAdd, e) => {
        if(!addGenre) return;
        handleSelectedGenre(genreToAdd, e);
    }

    const handleSelectedGenre = (genreToAdd, e) => {
        const classList = e.target.classList;
        classList.toggle("bg-success");
        classList.toggle("bg-dark");

        if(classList.contains("bg-success")){
            moveGenreToFirst(genreToAdd);
        } else {
            moveGenreToLast(genreToAdd);
        }
    }

    const moveGenreToFirst = (genreToAdd) => {
        const selectedGenre = genresList.find(genre => genre == genreToAdd);
        const selectedGenreIndex = genresList.indexOf(selectedGenre);
        genresList.splice(selectedGenreIndex, 1);
        genresList.unshift(selectedGenre);
        setGenresList(genresList);
        addGenre(genreToAdd);
    }

    const moveGenreToLast = (genreToRemove) => {
        const selectedGenre = genresList.find(genre => genre == genreToRemove);
        const selectedGenreIndex = genresList.indexOf(selectedGenre);
        genresList.splice(selectedGenreIndex, 1);
        genresList.push(selectedGenre);
        setGenresList(genresList);
        removeGenre(genreToRemove);
    }

    return <div className="genres-list">
        {
            genresList.map((genre) => {
                return <span 
                    key={genre}
                    onClick={(event)=> {selectGenre(genre, event)}}
                    className="badge genre-badge bg-dark"
                >
                    {genre}
                </span>
            })
        }
    </div>
}

export default GenresList;