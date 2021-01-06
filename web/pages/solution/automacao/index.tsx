import Link from "next/link";

import ContactForm from "../../../components/ContactForm";
import Footer from "../../../components/Footer"
import Header from "../../../components/Header"
import Main from "../../../components/Main";
import WhoTrust from "../../../components/WhoTrust";

import { FaCheck } from 'react-icons/fa';
import Solutions from "../../../components/Solutions";

const Automacao = () => {
  return (
    <section id="solution" className="web-page">
      <Header />

      <Main>
        <div className="talk-to-specialist">
          <div className="text-container">
            <h1>Automação Fat.</h1>

            <p>
              Controle a geração de boletos emitidos por sua empresa e tenha relatórios 
              automáticos e workflows que auxiliam no controle exato das entradas do fluxo de caixa.
            </p>

            <Link href="">CONVERSE COM UM ESPECIALISTA</Link>
          </div>

          <img src="/assets/images/automacaofaturamento.png" alt="Aut. Faturamento"/>
        </div>

        <div className="know-the-benefits">
          <h1>Conheça os benefícios para o seu negócio</h1>

          <div className="cards">
            <div className="card">
              <p>
                Permita o <strong>controle preciso</strong> dos boletos gerados 
                <strong>e construção de Relatórios Gerenciais.</strong>
              </p>
            </div>

            <div className="card">
              Facilite a <strong>implantação e o controle de boletos</strong> no ERP Protheus
            </div>

            <div className="card">
              <strong>Reduza o investimento em horas de implantação e personalização</strong> dos 
              boletos, pois o ERP não possui funcionalidade padrão para esse controle.
            </div>

            <div className="card">
            Tenha a possibilidade de trabalhar com <strong>diversos bancos simultaneamente.</strong>
            </div>
          </div>
        </div>

        <div className="new-platform">
          <h1>
            + de 200 empresas utilizam a Automação de Faturamento e reduziram seus 
            custos com implantação, suporte e tarifas bancárias
          </h1>

          <div className="image-xml">
            <img src="/assets/images/automacaoimage.png" alt=""/>
          </div>
        </div>

        <div className="diferencials">
          <div className="title-container">
            <h2 className="title">
              Principais diferenciais da Automação de Faturamento:
            </h2>
          </div>

          <ul className="list">
            <li>
              <FaCheck color="#520EBC" />
              <span>Controle de Envio dos Boletos por E-mail.</span>
            </li>
            <li>
              <FaCheck color="#520EBC" size={ 45 } />
              <span>Controle de Confirmação do Recebimento dos Boletos enviados por E-maiil.</span>
            </li>
            <li>
              <FaCheck color="#520EBC" />
              <span>Amarração Filiais x Configuração dos Boletos.</span>
            </li>
            <li>
              <FaCheck color="#520EBC" size={ 55 } />
              <span>
                Manutenção dos Boletos caso seja necessário reimpressão, exclusão
                ou até mesmo restauração.
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

export default Automacao;