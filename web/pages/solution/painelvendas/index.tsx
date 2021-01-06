import Link from "next/link";

import ContactForm from "../../../components/ContactForm";
import Footer from "../../../components/Footer"
import Header from "../../../components/Header"
import Main from "../../../components/Main";
import WhoTrust from "../../../components/WhoTrust";

import { FaCheck } from 'react-icons/fa';
import Solutions from "../../../components/Solutions";

const PainelVendas = () => {
  return (
    <section id="solution" className="web-page">
      <Header />

      <Main>
        <div className="talk-to-specialist">
          <div className="text-container">
            <h1>Portal de Vendas</h1>

            <p>
              Consulte clientes, pedidos, aprovações, financeiro e dashboards em
              uma única plataforma acessível de qualquer dispositivo.
            </p>

            <Link href="">CONVERSE COM UM ESPECIALISTA</Link>
          </div>

          <img src="/assets/images/portal_vendas.png" alt="Portal de Vendas"/>
        </div>

        <div className="know-the-benefits">
          <h1>Conheça os benefícios para o seu negócio</h1>

          <div className="cards">
            <div className="card">
              <p>
                Ganhe <strong>mais velocidade</strong> nos processos.
              </p>
            </div>

            <div className="card">
              Tenha visibilidade e segurança
            </div>

            <div className="card">
              Reduza o atendimento de suporte e agilize a inclusão de pedidos.
            </div>

            <div className="card">
              Elabora relatórios em tempo real.
            </div>
          </div>
        </div>

        <div className="new-platform">
          <h1>
            Uma nova plataforma ágil que facilita a comunicação com o seu
            representante, vendedor ou cliente
          </h1>

          <strong>Componentes da Plataforma Portal de Vendas</strong>

          <div className="cards">
            <div className="row">
              <div className="card">
                <img src="/assets/images/portal_vendas_icons/home.svg" alt=""/>
                <span>Home</span>
              </div>

              <div className="card">
                <img src="/assets/images/portal_vendas_icons/cliente.svg" alt=""/>
                <span>Clientes</span>
              </div>

              <div className="card">
                <img src="/assets/images/portal_vendas_icons/aprovacoes.svg" alt=""/>
                <span>Aprovações</span>
              </div>
            </div>

            <div className="row">
              <div className="card">
                <img src="/assets/images/portal_vendas_icons/pedidos.svg" alt=""/>
                <span>Pedidos</span>
              </div>

              <div className="card">
                <img src="/assets/images/portal_vendas_icons/financeiro.svg" alt=""/>
                <span>Financeiro</span>
              </div>

              <div className="card">
                <img src="/assets/images/portal_vendas_icons/dash.svg" alt=""/>
                <span>Dashboards</span>
              </div>
            </div>
          </div>
        </div>

        <div className="diferencials">
          <div className="title-container">
            <h2 className="title">
              Principais diferenciais do portal de vendas:
            </h2>
          </div>

          <ul className="list">
            <li>
              <FaCheck color="#520EBC" />
              <span>Controle de orçamento.</span>
            </li>
            <li>
              <FaCheck color="#520EBC" />
              <span>Integração com pedido de vendas.</span>
            </li>
            <li>
              <FaCheck color="#520EBC" />
              <span>Mapeamento dos principais cadastros do Protheus.</span>
            </li>
            <li>
              <FaCheck color="#520EBC" />
              <span>Análise de histórico de pedidos.</span>
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

export default PainelVendas;