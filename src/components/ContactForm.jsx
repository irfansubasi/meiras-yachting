import { useState } from 'react';
import '../styles/Form.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTranslation } from 'react-i18next';
export default function ContactForm() {
  const { t } = useTranslation();

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

    fetch(
      'https://meirasyachting-backend-production.up.railway.app/send-email',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          toast.success(t('form.success'));
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        toast.error(t('form.error'));
      });
  };

  return (
    <div className="contact-form p-5 w-75">
      <div className="form-head d-flex align-items-center justify-content-center">
        <h4>{t('form.heading')}</h4>
      </div>
      <div className="form-body bg-white p-5 w-100">
        <form onSubmit={handleSubmit} className="p-3">
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
                  {t('form.name')}
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
                <label htmlFor="phone">{t('form.phone')}</label>
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
                <label htmlFor="mail">{t('form.email')}</label>
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
                <label htmlFor="city">{t('form.city')}</label>
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
                <label htmlFor="message">{t('form.message')}</label>
              </div>
            </div>
            <div className="col-auto button-div">
              <button type="submit" value="Send" className="btn btn-primary">
                {t('form.button')}
              </button>
            </div>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}
