import { useState } from 'react';
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import Main from "../../components/Main";
import TalkToSpecialist from "../../components/TalkToSpecialist";

const Contact = () => {
  const [ header, setHeader ] = useState('question');

  return (
    <section id="contact-page" className="web-page">
      <Header />

      <Main>
        <div className="title-pages">
          <h1>+30 consultores em ERP Protheus</h1>
          <h3>
            Nossa consultoria disponibiliza profissionais especializados em ERP Protheus
            para atender diferentes áreas da sua empresa:
          </h3>

          <div className="gif-container">
            <img src="/assets/images/001-delivery-time.svg" alt=""/>
            <span>Materiais e logística</span>
          </div>
        </div>

        <div className="contact-form-container">
          <div className="headers">
            <div className='header' data-active={ header === 'question' } onClick={ (ev) => { setHeader('question') } }>
              <span>Ficou alguma dúvida?</span>
            </div>

            <div className="header" data-active={ header === 'work' } onClick={ (ev) => { setHeader('work') } }>
              <span>Deseja ser um consultor ERP Protheus?</span>
            </div>
          </div>

          <div className="contact-form" style={{ display: header === 'question' ? 'flex' : 'none' }}>
            <form className="contact-form-questions">
              <input type="text" placeholder="Nome" />
              <input type="text" placeholder="E-mail" />
              <input type="text" placeholder="Empresa" />
              <select>
                <option value="">Selecione a solução</option>
              </select>
              <textarea placeholder="Mensagem"></textarea>
            </form>

            <button type="button">
              Enviar
            </button>
          </div>

          <div className="contact-form" style={{ display: header === 'work' ? 'flex' : 'none' }}>
            <form className="contact-form-questions">
              <input type="text" placeholder="Nome" />
              <input type="text" placeholder="E-mail" />
              <input type="text" placeholder="Telefone" />
              <input type="text" placeholder="Cole aqui seu link do Linkedin, caso possua" />
            </form>

            <button type="button">
              Enviar
            </button>
          </div>
        </div>

        <TalkToSpecialist />
      </Main>

      <Footer />
    </section>
  );
}

export default Contact;