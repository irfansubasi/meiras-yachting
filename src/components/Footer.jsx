import footerLogo from '../assets/footer-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import '../styles/Footer.css';

export default function Footer() {

    let year = new Date().getFullYear();

    return(
        <footer>
            <div className="container d-flex align-items-center justify-content-between">
                <div className="brand-socials d-flex flex-column py-5">
                    <img src={footerLogo} alt="Meiras Yachting" />
                    <div className="socials d-flex flex-column mt-5 align-items-start">
                        <a target='_blank' rel="noopener noreferrer" href="https://www.instagram.com/meirasyachting/"><FontAwesomeIcon icon={faInstagram} size='xl'/><span>meirasyachting</span></a>
                        <a target='_blank' rel="noopener noreferrer" href="https://wa.me/+905444136378"><FontAwesomeIcon icon={faWhatsapp} size='xl'/><span>+90 (544) 413 63 78</span></a>
                        <a target='_blank' rel="noopener noreferrer" href="mailto:meirasyachting@gmail.com"><FontAwesomeIcon icon={faEnvelope} size='xl'/><span>meirasyachting@gmail.com</span></a>
                    </div>
                </div>
                <div className="site-map d-flex">
                    <ul>
                        <li><a href="/">Anasayfa</a></li>
                        <li><a href="/about">Hakkımızda</a></li>
                        <li><a href="/">Yat Kiralama</a></li>
                    </ul>
                    <ul>
                        <li><a href="/services">Hizmetlerimiz</a></li>
                        <li><a href="/">Brokerage</a></li>
                        <li><a href="/contact">İletişim</a></li>
                    </ul>
                </div>
            </div>
            <span className='copyright'>Copyright © {year} - All rights reserved | designed by <a target='_blank' rel="noopener noreferrer" href="https://www.instagram.com/meirasdesign/">Meiras Design</a> | developed by <a target='_blank' rel="noopener noreferrer" href="https://github.com/irfansubasi">irfansubasi</a></span>
        </footer>
    );
}