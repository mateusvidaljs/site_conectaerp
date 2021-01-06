import Link from "next/link";

import ContactForm from "../../../components/ContactForm";
import Footer from "../../../components/Footer"
import Header from "../../../components/Header"
import Main from "../../../components/Main";
import WhoTrust from "../../../components/WhoTrust";

import { FaCheck } from 'react-icons/fa';
import Solutions from "../../../components/Solutions";

const PainelOnline = () => {
  return (
    <section id="solution" className="web-page">
      <Header />

      <Main>
        <div className="talk-to-specialist">
          <div className="text-container">
            <h1>Painel Online</h1>

            <p>
              Produza gráficos personalizados, adequados ao seu negócio e estratégia 
              e disponibilize-os em um ambiente online e acessível a todos em tempo real.
            </p>

            <Link href="">CONVERSE COM UM ESPECIALISTA</Link>
          </div>

          <img src="/assets/images/painelonline.png" alt="Portal de Vendas"/>
        </div>

        <div className="know-the-benefits">
          <h1>Conheça os benefícios para o seu negócio</h1>

          <div className="cards">
            <div className="card">
              <p>
                <strong>Transparência</strong> na gestão.
              </p>
            </div>

            <div className="card">
              <strong>Maior agilidade</strong> em tomadas de decisões.
            </div>

            <div className="card">
              <strong>Redução</strong> de custos.
            </div>

            <div className="card">
              <strong>Centralização de dados</strong> e informações relevantes.
            </div>
          </div>
        </div>

        <div className="diferencials">
          <div className="title-container">
            <h2 className="title">
              Principais diferenciais do painel online:
            </h2>
          </div>

          <ul className="list">
            <li>
              <FaCheck color="#520EBC" size={ 35 } />
              <span>Modelo sustentável que propicia a redução no uso de papéis.</span>
            </li>
            <li>
              <FaCheck color="#520EBC" />
              <span>Acessível de qualquer plataforma (mobile ou desktop).</span>
            </li>
            <li>
              <FaCheck color="#520EBC" />
              <span>Gráfico atualizados em tempo real.</span>
            </li>
            <li>
              <FaCheck color="#520EBC" size={ 70 } />
              <span>
                Possibilidade de personalização de dados e unificação de indicadores
                segmentados por grupos previamente definidos.
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

export default PainelOnline;