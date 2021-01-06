import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';

const ContactForm: React.FC = () => {
  return (
    <section id="contact">
      <div className="first-container">
        <h1>
          Estamos prontos para ajudar você e a sua equipe
        </h1>
        <p>
          Conte com o apoio de nossos consultores especialistas em ERP.
        </p>
        <p>
          Preencha o formulário ao lado e, em breve, retornaremos o contato
        </p>
        <p>
          Av. Paulista, 171 - Paraíso, São Paulo - SP Brasil
        </p>
        <p>
          <a href="">+55 11 3995.9039</a>
          <br/>
          <a href="">contato@conectaerp.com.br</a>
        </p>

        <div className="social-media-buttons">
          <a href="">
            <FaFacebookF size={ 30 } color='#000' />
          </a>
          <a href="">
            <FaInstagram size={ 30 } color='#000' />
          </a>
          <a href="">
            <FaLinkedinIn size={ 30 } color='#000' />
          </a>
          <a href="">
            <FaWhatsapp size={ 30 } color='#000' />
          </a>
        </div>
      </div>

      <div className="second-container">
        <form>
          <input type="text" placeholder="Nome" />
          <input type="text" placeholder="E-mail" />
          <input type="text" placeholder="Empresa" />
          <textarea rows={ 3 } placeholder="Mensagem"></textarea>

          <button type="submit">ENVIAR</button>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;