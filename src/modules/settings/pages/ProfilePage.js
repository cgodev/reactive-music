import Header from "../../shared/Header";
import SettingsPage from "./SettingsPage";

const ProfilePage = () => {
    return <>
        <Header />
        <div className="container">
            <ul className="nav nav-tabs justify-content-center border-0" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Account Info</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Credentials</button>
                </li>
            </ul>
            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                    <p className="text-warning">Here the account info</p>
                </div>
                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                    <SettingsPage/>
                </div>
            </div>

        </div>
    </>
}

export default ProfilePage;