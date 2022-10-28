// React
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import RedirectPage from '../modules/auth/pages/RedirectPage';
import CreateRoom from "../modules/room/pages/CreateRoom";
import RoomDetail from "../modules/room/pages/RoomDetail";
import Home from "../pages/Home";
import Login from '../pages/Login'

//TODO: Playlist y buscador de canciones.
const Routing = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/callback" element={<RedirectPage/>}/>
                <Route path="/room-creation" element={<CreateRoom/>} />
                <Route path="/room/:roomId" element={<RoomDetail/>} />
            </Routes>
        </Router>
    );
}

export default Routing;