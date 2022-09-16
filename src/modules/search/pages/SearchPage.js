import { useState, useEffect } from 'react';
import Search from '../components/Search';
import SearchResult from '../components/SearchResult';
import { MusicService } from "../services/MusicService";

import "./SearchPage.css";

const SearchPage = () => {
    const [results, setResults] = useState([]);

    useEffect(() => {
        fetchSongs();
    }, []);

    const fetchSongs = async () => {
        setResults(await MusicService.FetchSongsByCriteria());
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