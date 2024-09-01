import '../styles/Form.css';
export default function Form() {
    return(
        <div className="contact-form">
            <div className="form-head p-5">
                <h3>BİLGİ AL</h3>
            </div>
            <div className="form-body bg-white p-5 w-100">
                <form action="" className='p-5'>
                    <div className="row">
                        <div className="col-md-6 mb-4">
                            <div className="form-floating">
                                <input type="text" className="form-control" id="nameandsurname" placeholder="Ad Soyad" required/>
                                <label htmlFor="nameandsurname" className="form-label">Ad Soyad</label>
                            </div>
                        </div>
                        <div className="col-md-6 mb-4">
                            <div className="form-floating">
                                <input type="text" className="form-control" id="phone" placeholder="Cep Telefonu" required/>
                                <label htmlFor="phone">Cep Telefonu</label>
                            </div>
                        </div>
                        <div className="col-md-6 mb-4">
                            <div className="form-floating">
                                <input type="email" className="form-control" id="mail" placeholder="E-mail" required/>
                                <label htmlFor="mail">E-mail</label>
                            </div>
                        </div>
                        <div className="col-md-6 mb-4">
                            <div className="form-floating">
                                <input type="text" className="form-control" id="city" placeholder="Şehir" required/>
                                <label htmlFor="city">Şehir</label>
                            </div>
                        </div>
                        <div className="col-md-12 mb-4">
                            <div className="form-floating">
                                <textarea className="form-control" id="message" placeholder="Mesaj" required></textarea>
                                <label htmlFor="message">Mesaj</label>
                            </div>
                        </div>
                        <div className="col-auto button-div">
                            <button type="submit" className="btn btn-primary">Gönder</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}