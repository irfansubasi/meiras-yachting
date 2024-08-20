import '../styles/HomePage.css';
import '../styles/Buttons.css';

export default function HomePage() {
    return(
        <main className='mt-2'>
            <section className='discover p-4'>
                <div className="container d-flex justify-content-center align-items-center">
                    <div className="box my-4 bg-white d-flex flex-column justify-content-center align-items-center">
                        <div className="placeholder p-5"></div>
                        <p className='lead text-center py-4'>Unutulmaz Bir Deneyim İçin
                        Yatlarımızı Keşfedin</p>
                        <button className='btn btn-primary'>Keşfet</button>
                    </div>
                </div>
            </section>
            <section className='info-col mt-2'>
                <div className="container text-center text-white">
                    <div className="row p-5">
                        <div className="col p-5">
                            <div className="placeholder col-6"></div>
                            <h5>7/24 Destek</h5>
                            <h5>Her Durumda Yanınızdayız</h5>
                        </div>
                        <div className="col p-5">
                            <div className="placeholder col-6"></div>
                            <h5>Profesyonel Ekip</h5>
                            <h5>Profesyonel Çözümler</h5>
                        </div>
                        <div className="col p-5">
                            <div className="placeholder col-6"></div>
                            <h5>Lokasyon Seçenekleri</h5>
                            <h5>Marmaris, Bodrum,<br/>Göcek, Fethiye</h5>
                        </div>
                    </div>
                </div>
            </section>
            <section className='mini-contact'>
                <div className="container d-flex justify-content-center align-items-center">
                    <div className="box my-4 bg-white d-flex flex-column justify-content-center align-items-center">
                        <div className="placeholder p-5"></div>
                        <p className='lead text-center py-4'>Unutulmaz Bir Deneyim İçin
                        Yatlarımızı Keşfedin</p>
                        <button className='btn btn-primary'>Keşfet</button>
                    </div>
                </div>
            </section>
        </main>
    );
}