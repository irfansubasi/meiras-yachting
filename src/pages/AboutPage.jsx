import Nav from "../components/Nav";
import Header from "../components/Header";
import Footer from "../components/Footer";
import verticalLogo from "../assets/footer-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import "../styles/AboutPage.css";

export default function About() {
    return(
        <>
            <Nav />
            <Header page="about"/>
            <main>
                <section className="about-section" style={{height:"115vh"}}>
                    <div className="container about-us">
                        <div className="about-container">
                            <div className="about-box">
                                <img className="about-logo img-fluid" src={verticalLogo} alt="meiras" />
                                <div className="m-auto explain d-flex flex-column align-items-center">
                                    <h3>Hakkımızda</h3>
                                    <p className="lead">Meiras Yatçılık olarak, Türkiye’nin en gözde yat kiralama destinasyonlarından biri olan Marmaris, Bodrum ve Göcek&apos;te sizlere unutulmaz bir deniz deneyimi sunmaktayız. Deniz tutkunlarına, lüks ve konforu bir araya getiren özel yat kiralama hizmetlerimizle, Ege ve Akdeniz&apos;in eşsiz güzelliklerini keşfetme fırsatı sunuyoruz.</p>
                                </div>
                            </div>
                            <div className="about-socials">
                                <h4 className="border-bottom border-2">Bize Ulaşmak İçin</h4>
                                <div className="social-box row">
                                    <div className="col-lg-4 col-sm-12">
                                        <a href="https://www.instagram.com/meirasyachting/" target="_blank" rel="noreferrer">
                                            <FontAwesomeIcon size="2x" icon={faInstagram} />
                                            <span>meirasyachting</span>
                                        </a>
                                    </div>
                                    <div className="col-lg-4 col-sm-12">
                                        <a href="https://wa.me/+905444136378/" target="_blank" rel="noreferrer">
                                            <FontAwesomeIcon size="2x" icon={faWhatsapp} />
                                            <span>+90 (544) 413 63 78</span>
                                        </a>
                                    </div>
                                    <div className="col-lg-4 col-sm-12">
                                        <a href="mailto:meirasyachting@gmail.com" target="_blank" rel="noreferrer">
                                            <FontAwesomeIcon size="2x" icon={faEnvelope} />
                                            <span>meirasyachting@gmail.com</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}