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
    }, []);

    const fetchSongs = async () => {
        if(token){
            setResults(await MusicService.FetchSongsByCriteria(token));
        }
    }

    if(!token){
        return <div className="container p-4">
            <div className="row">
                <div className="col d-flex">
                    <p>Para continuar <Link to="/">debes iniciar sesión</Link></p>
                </div>
            </div>
        </div>
    }

    return (
        <section className="section-search">
            <div className="search-wrapper">
                <Search/>
                <SearchResult results={results}/>
            </div>
        </section>
    );
}

export default SearchPage;