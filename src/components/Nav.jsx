import navLogo from '../assets/nav-logo.png';
import '../styles/Nav.css';
import { NavLink } from 'react-router-dom';

export default function Nav() {
    return(
        <nav className="navbar navbar-expand-lg fixed-top bg-white p-2 px-5 shadow">
            <a className="navbar-brand" href="#">
                <img src={navLogo} alt="Meiras Yachting" className="d-inline-block align-text-top navbar-logo" />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarContent">
                <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/">Anasayfa</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/about">Hakkımızda</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/rent">Kiralama</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/services">Hizmetlerimiz</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/brokerage">Brokerage</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/contact">İletişim</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}