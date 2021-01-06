import Link from "next/link";

import ContactForm from "../../../components/ContactForm";
import Footer from "../../../components/Footer"
import Header from "../../../components/Header"
import Main from "../../../components/Main";
import WhoTrust from "../../../components/WhoTrust";

import { FaCheck } from 'react-icons/fa';
import Solutions from "../../../components/Solutions";

const AMS = () => {
  return (
    <section id="solution" className="web-page">
      <Header />

      <Main>
        <div className="talk-to-specialist">
          <div className="text-container">
            <h1>Service Desk | AMS</h1>

            <p>
              Ganhe mais produtividade na resolução de problemas centralizando as 
              necessidades com a abertura de chamados, acompanhamento de atendimento 
              e resposta à incidentes da gestão do seu ERP.
            </p>

            <Link href="">CONVERSE COM UM ESPECIALISTA</Link>
          </div>

          <img src="/assets/images/ams.png" alt="Portal de Vendas"/>
        </div>

        <div className="know-the-benefits">
          <h1>Conheça os benefícios para o seu negócio</h1>

          <div className="cards">
            <div className="card">
              <p>
                Previsibilidade de custos com a <strong>eliminação de encargos sociais</strong> para 
                manter uma equipe interna sustentando as aplicações.
              </p>
            </div>

            <div className="card">
             <strong>Mais produtividade</strong> da equipe com a centralização das informações.
            </div>

            <div className="card">
              <strong>Redução</strong> da necessidade de suporte técnico.
            </div>

            <div className="card">
              Melhoria de <strong>processos organizacionais</strong>.
            </div>
          </div>
        </div>

        <div className="new-platform">
          <h1>
            Centralize a resolução de problemas com a abertura de chamados em um único local
          </h1>

          <div className="image-xml">
            <img src="/assets/images/amsimage.png" alt=""/>
          </div>
        </div>

        <div className="diferencials">
          <div className="title-container">
            <h2 className="title">
              Principais diferenciais do Service Desk:
            </h2>
          </div>

          <ul className="list">
            <li>
              <FaCheck color="#520EBC" />
              <span>Atendimento 24/7.</span>
            </li>
            <li>
              <FaCheck color="#520EBC" />
              <span>Consultores especialistas e seniors.</span>
            </li>
            <li>
              <FaCheck color="#520EBC" />
              <span>Escabilidade da tecnologia.</span>
            </li>
            <li>
              <FaCheck color="#520EBC" />
              <span>
                Relatório de status da performance do uso do ERP.
              </span>
            </li>
          </ul>
        </div>

        <Solutions />
      </Main>

      <WhoTrust />
      <ContactForm />
      <Footer />
    </section>
  );
}

export default AMS;