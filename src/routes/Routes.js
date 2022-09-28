// React
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import SearchPage from '../modules/search/pages/SearchPage';
import RedirectPage from '../modules/auth/pages/RedirectPage';
import CreateRoom from "../modules/room/pages/CreateRoom";
import RoomDetail from "../modules/room/pages/RoomDetail";
import Header from "../modules/shared/Header";
import Home from "../pages/Home";

//TODO: Playlist y buscador de canciones.
const Routing = () => {
    return (
        <Router>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/callback" element={<RedirectPage/>}/>
                {/* <Route path="/search" element={<SearchPage/>}/> */}
                <Route path="/room-creation" element={<CreateRoom/>} />
                <Route path="/room/:uid/:playlistId" element={<RoomDetail />} />
            </Routes>
        </Router>
    );
}

export default Routing;