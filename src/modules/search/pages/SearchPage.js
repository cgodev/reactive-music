import { useState } from 'react';
import Search from '../components/Search';
import SearchResult from '../components/SearchResult';
import { MusicService } from "../services/MusicService";

import "./SearchPage.css";

const SearchPage = () => {
    const [results, setResults] = useState([]);

    const fetchSongs = async (criteria) => {
        setResults(await MusicService.FetchSongsByCriteria(criteria));
    }

    return (
        <section className="section-search">
            <Search handler={fetchSongs}/>
            <SearchResult results={results}/>
        </section>
    );
}

export default SearchPage;