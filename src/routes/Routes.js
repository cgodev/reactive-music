// React
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import RedirectPage from '../modules/auth/pages/RedirectPage';
import CreateRoom from "../modules/room/pages/CreateRoom";
import RoomDetail from "../modules/room/pages/RoomDetail";
import Home from "../pages/Home";
import AuthSpotify from '../pages/AuthSpotify'
import Login from "../modules/auth/pages/Login";
import Register from "../modules/auth/pages/Register";
import NotFound from "../pages/404";
// import { ProtectedRoute } from "./components/PrivateRoute";

//TODO: Playlist y buscador de canciones.
const Routing = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/auth" element={<AuthSpotify/>}/>
                <Route path="/callback" element={<RedirectPage/>}/>
                <Route path="/room-creation" element={<CreateRoom/>}/>
                <Route path="/room/:roomId" element={<RoomDetail/>}/>
                <Route path="/404" element={<NotFound/>}/>
            </Routes>
        </Router>
    );
}

export default Routing;