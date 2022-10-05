import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Search from '../components/Search';
import SearchResult from '../components/SearchResult';
import { MusicService } from "../services/MusicService";

import "./SearchPage.css";

const SearchPage = () => {
    const [results, setResults] = useState([]);
    const token = localStorage.getItem("token");

    useEffect(() => {
        fetchSongs(token);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const fetchSongs = async () => {
        if(token){
            setResults(await MusicService.FetchSongsByCriteria(token));
        }
    }

    if(!token){
        return <p>Para continuar <Link to="/">debes iniciar sesión</Link></p>
    }

    return (
        <section className="section-search">
            <Search />
            <SearchResult results={results}/>
        </section>
    );
}

export default SearchPage;