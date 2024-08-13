import React from "react";
import Header from "../../../core/components/Header";
import CreateRoom from "../../room/create/CreateRoom";
import './Style.css';
import RoomList from "../../room/list/RoomList";

const ProfilePage = () => {
    return <>
        <Header />
        <div className="container">
            <ul className="nav nav-tabs border-0 mb-3" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Account Info</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Rooms</button>
                </li>
            </ul>
            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                    <p className="text-warning">Here the account info</p>
                </div>
                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                    <RoomList/>
                    <CreateRoom/>
                </div>
            </div>

        </div>
    </>
}

export default ProfilePage;