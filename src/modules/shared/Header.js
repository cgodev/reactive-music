import { Link, NavLink } from "react-router-dom";

const Header = () => {
    return (
        <nav className="navbar navbar-dark navbar-expand-md bg-transparent border-bottom border-secondary w-100 mb-4">
            <div className="container">
                <Link to={'/'} className="navbar-brand text-white">Reactive Music</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <NavLink end to="/login" className={({isActive}) => `nav-link text-white ${isActive && "text-decoration-underline"}`}>Login</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/room-creation" className={({isActive}) => `nav-link text-white ${isActive && "text-decoration-underline"}`}>Room creation</NavLink>
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
                                <a className="dropdown-item fs-6" href="#">Profile</a>
                            </li>
                            <li>
                                <a className="dropdown-item fs-6" href="#">Settings</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Header;