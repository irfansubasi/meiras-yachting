import { useState } from 'react';
import '../styles/Form.css';
export default function ContactForm() {
  const [formData, setFormData] = useState({
    user_name: '',
    user_phone: '',
    user_email: '',
    user_location: '',
    user_message: '',
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:5000/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          alert('Email sent successfully!');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="contact-form">
      <div className="form-head p-5">
        <h3>BİLGİ AL</h3>
      </div>
      <div className="form-body bg-white p-5 w-100">
        <form onSubmit={handleSubmit} className="p-5">
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="form-floating">
                <input
                  type="text"
                  name="user_name"
                  className="form-control"
                  id="nameandsurname"
                  placeholder="Ad Soyad"
                  required
                  onChange={handleChange}
                />
                <label htmlFor="nameandsurname" className="form-label">
                  Ad Soyad
                </label>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="form-floating">
                <input
                  type="text"
                  name="user_phone"
                  className="form-control"
                  id="phone"
                  placeholder="Cep Telefonu"
                  onChange={handleChange}
                  required
                />
                <label htmlFor="phone">Cep Telefonu</label>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="form-floating">
                <input
                  type="email"
                  className="form-control"
                  id="mail"
                  placeholder="E-mail"
                  name="user_email"
                  onChange={handleChange}
                  required
                />
                <label htmlFor="mail">E-mail</label>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="form-floating">
                <input
                  type="text"
                  name="user_location"
                  className="form-control"
                  id="city"
                  placeholder="Şehir"
                  onChange={handleChange}
                  required
                />
                <label htmlFor="city">Şehir</label>
              </div>
            </div>
            <div className="col-md-12 mb-4">
              <div className="form-floating">
                <textarea
                  className="form-control"
                  name="user_message"
                  id="message"
                  placeholder="Mesaj"
                  onChange={handleChange}
                  required
                ></textarea>
                <label htmlFor="message">Mesaj</label>
              </div>
            </div>
            <div className="col-auto button-div">
              <button type="submit" value="Send" className="btn btn-primary">
                Gönder
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
