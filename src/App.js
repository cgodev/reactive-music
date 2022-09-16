// React
import { useState } from 'react';

// Components
import SearchPage from '../modules/search/pages/SearchPage';

// Styles
import "./styles/App.css"

//TODO: Playlist y buscador de canciones.
const App = () => {
    return (
        <main className="app">
            <SearchPage/>
        </main>
    );
}

export default App;