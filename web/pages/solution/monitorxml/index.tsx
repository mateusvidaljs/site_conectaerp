import Link from "next/link";

import ContactForm from "../../../components/ContactForm";
import Footer from "../../../components/Footer"
import Header from "../../../components/Header"
import Main from "../../../components/Main";
import WhoTrust from "../../../components/WhoTrust";

import { FaCheck } from 'react-icons/fa';
import Solutions from "../../../components/Solutions";

const MonitorXML = () => {
  return (
    <section id="solution" className="web-page">
      <Header />

      <Main>
        <div className="talk-to-specialist">
          <div className="text-container">
            <h1>Monitor XML</h1>

            <p>
              Tenha mais segurança com uma ferramenta de compliance onde é
              possível verificar no ambiente SEFAZ a situação das notas fiscais
              emitidas contra o CNPJ da sua empresa.
            </p>

            <Link href="">CONVERSE COM UM ESPECIALISTA</Link>
          </div>

          <img src="/assets/images/monitorxml.png" alt="Monitor XML"/>
        </div>

        <div className="know-the-benefits">
          <h1>Conheça os benefícios para o seu negócio</h1>

          <div className="cards">
            <div className="card">
              <p>
                <strong>Automatize a entrada de documentos</strong> com a leitura
                em tempo real dos arquivos XML recebidos via e-mail ou integração SEFAZ.
              </p>
            </div>

            <div className="card">
              Faça o <strong>controle e armazenamento dos XMLs</strong> enviados pelos
              seus fornecedores com Monitor NF-e (template exclusivo da Conecta ERP).
            </div>

            <div className="card">
              <strong>Busca rápida sem Chaves de Acesso</strong> de suas Notas Fiscais
              em XML e DANFE.
            </div>

            <div className="card">
              Acelere a contabilidade enviando todos os XMLs para contabilidade 
              <strong>via e-mail ou por meio do Painel de Acesso às notas.</strong>
            </div>
          </div>
        </div>

        <div className="new-platform">
          <h1>
            Solução totalmente integrada ao Protheus e de fácil instalação
          </h1>

          <div className="image-xml">
            <img src="/assets/images/monitorxmlresume.png" alt=""/>
          </div>
        </div>

        <div className="diferencials">
          <div className="title-container">
            <h2 className="title">
              Principais diferenciais do Monitor XML:
            </h2>
          </div>

          <ul className="list">
            <li>
              <FaCheck color="#520EBC" size={ 60 } />
              <span>
                Uso do certificado digital do ERP Protheus sem necessidade de envio
                do mesmo para ambiente externo.
              </span>
            </li>
            <li>
              <FaCheck color="#520EBC" size={ 140 } />
              <span>
                Possui ferramenta onde é possível verificar qual a situação das 
                notas emitidas contra o seu CNPJ, garantindo que seja possível 
                validar se todas as notas estão corretamente escrituradas no ERP. 
                Cockpit único: Funções intuitivas em uma única tela.
              </span>
            </li>
            <li>
              <FaCheck color="#520EBC" size={ 80 } />
              <span>
                Funções integrados ao padrão Protheus (Pedido de Compra, Automatização
                de Recebimento, Frete de fornecedor e Alçada de Aprovação).
              </span>
            </li>
            <li>
              <FaCheck color="#520EBC" />
              <span>
                Funções intuitivas em uma única tela. 
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

export default MonitorXML;