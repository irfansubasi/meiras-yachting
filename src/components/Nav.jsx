import navLogo from '../assets/nav-logo.png';
import '../styles/Nav.css';

export default function Nav() {
    return(
        <nav className="navbar navbar-expand-lg fixed-top bg-white p-2 px-5 shadow">
            <div className="container-md">
                <a className="navbar-brand" href="#">
                    <img src={navLogo} alt="Meiras Yachting" className="d-inline-block align-text-top navbar-logo" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Anasayfa</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#">Hakkımızda</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#">Yat Kiralama</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#">Hizmetlerimiz</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#">Brokerage</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#">İletişim</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}