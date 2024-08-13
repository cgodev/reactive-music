// React
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import CreateRoom from "../../feature/room/create/CreateRoom";
import RoomDetail from "../../feature/room/detail/RoomDetail";
import Login from "../../feature/account/login/Page";
import ProfilePage from "../../feature/account/dashboard/ProfilePage";
import React from "react";
import Home from "../../feature/home/Page";
import CreateAccount from "../../feature/account/create/Page";
import NotFound from "../../feature/error/404/Page";

const Routing = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<CreateAccount/>}/>
                <Route path="/profile" element={<ProfilePage/>}/>
                <Route path="/room-creation" element={<CreateRoom/>}/>
                <Route path="/room/:roomId" element={<RoomDetail/>}/>
                <Route path="/error/not-found" element={<NotFound/>}/>
            </Routes>
        </Router>
    );
}

export default Routing;