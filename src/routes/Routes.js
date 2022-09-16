// React
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import SearchPage from '../modules/search/pages/SearchPage';
import AuthPage from '../modules/auth/pages/AuthPage';
import RedirectPage from '../modules/auth/pages/RedirectPage';

//TODO: Playlist y buscador de canciones.
const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<AuthPage/>}/>
                <Route path="/callback" element={<RedirectPage/>}/>
                <Route path="/search" element={<SearchPage/>}/>
            </Routes>
        </Router>
    );
}

export default App;