import { useEffect, useRef } from "react";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.min";
import "../Genres.css";

const GenresSearchBar = ({ genresBack, setGenresSeeds }) => {
    const inputSearchGenre = useRef(null);
    const labelSearchGenre = useRef(null);

    useEffect(() => {
        new bootstrap.Tooltip(labelSearchGenre.current);
    }, []);

    const handleSearchBar = () => {  
        const input = inputSearchGenre.current;
        const inputContainer = inputSearchGenre.current.parentNode;

        input.value = "";
        input.classList.toggle("searchGenre");
        inputContainer.classList.toggle("show");

        if(!input.classList.contains("searchGenre")){
            setGenresSeeds(genresBack);
        }
    }

    const handleInput = (e) => {
        const searchGenre = e.target.value;
        const filterGenres = genresBack.filter(({ name }) => name.includes(searchGenre));
        setGenresSeeds(filterGenres);
    }

    return (
        <div className="d-flex justify-content-between align-items-center mb-3">
            <p className="m-0 p-0">Select the genres that will be availables to play in your room: </p>
            <div className="d-flex justify-content-between align-items-center" id="searchbar">
                <input
                    type="text"
                    ref={inputSearchGenre}
                    placeholder="Search genre"
                    onChange={handleInput}
                    className="text-white bg-transparent border-0 rounded-0"
                    id="inputSearchGenre"
                />
                <label
                    htmlFor="inputSearchGenre"
                    ref={labelSearchGenre}
                    role="button"
                    onClick={handleSearchBar}
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-title="Search genre"
                    className="bg-transparent text-white border-0 m-0 p-0"
                >
                    <i className="bi bi-search"></i>
                </label>
            </div>
        </div>
    );
}

export default GenresSearchBar;