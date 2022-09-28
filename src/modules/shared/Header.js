import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink
                                to="/"
                                className={({isActive}) => isActive ? "nav-link active" : "nav-link"}
                            >Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/search"
                                className={({isActive}) => isActive ? "nav-link active" : "nav-link"}
                            >Search</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/room-creation"
                                className={({isActive}) => isActive ? "nav-link active" : "nav-link"}
                            >Room creation</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;