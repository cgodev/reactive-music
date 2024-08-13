import { useState, useContext } from 'react';
import Search from './Search';
import SearchResult from './SearchResult';
import { MusicService } from "../../services/MusicService";
import { RoomDetailContext } from "../../context/RoomDetailContext";

import "./SearchPage.css";
import React from 'react';

const SearchPage = () => {
    const { roomData } = useContext(RoomDetailContext);
    const [results, setResults] = useState([]);

    const fetchSongs = async (criteria) => {
        setResults(await MusicService.FetchSongsByCriteria(criteria, roomData));
    }

    return (
        <section className="section-search">
            <Search handler={fetchSongs}/>
            <SearchResult results={results}/>
        </section>
    );
}

export default SearchPage;