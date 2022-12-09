import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthService } from "../auth/services/AuthService";

const Header = () => {

    const navigate = useNavigate();

    const logout = (e) => {
        e.preventDefault();
        localStorage.removeItem('token');
        navigate('/');
    }


    const signInSpotify = async () => {
        await AuthService.signIn();
    }

    return (
        <nav className="navbar navbar-dark navbar-expand-md bg-transparent border-bottom border-secondary w-100 mb-4">
            <div className="container">
                <Link to={'/'} className="navbar-brand text-white">Reactive Music</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto">
                        {/* <li className="nav-item">
                            <NavLink end to="/auth" className={({isActive}) => `nav-link text-white ${isActive && "text-decoration-underline"}`}>Login</NavLink>
                        </li> */}
                        <li className="nav-item">
                            <NavLink to="/room-creation" className={({ isActive }) => `nav-link text-white ${isActive && "text-decoration-underline"}`}>Room creation</NavLink>
                        </li>
                    </ul>
                    <div className="dropdown">
                        <button
                            className="btn btn-primary rounded-circle fs-5"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            D
                        </button>
                        <ul className="dropdown-menu">
                            <li>
                                <a className="dropdown-item fs-6" href="#" onClick={signInSpotify}>Activate Spotify</a>
                            </li>
                            <li>
                                <Link className="dropdown-item fs-6" to={'/profile'}>Profile</Link>
                            </li>
                            <li>
                                <a className="dropdown-item fs-6" href="#" onClick={logout}>Logout</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Header;