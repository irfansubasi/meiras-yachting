import Nav from "../components/Nav";
import Form from "../components/Form";
import Footer from "../components/Footer";
import '../styles/ContactPage.css';

export default function ContactPage() {
    return(
        <>
            <Nav />
            <main>
                <section className="main-contact">
                    <div className="container">
                        <div className="form-container">
                            <Form />
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}