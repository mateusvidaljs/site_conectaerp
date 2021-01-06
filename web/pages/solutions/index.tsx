import Link from "next/link";
import ContactForm from "../../components/ContactForm";
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import Main from "../../components/Main";
import WhoTrust from "../../components/WhoTrust";

const Solutions = () => {
  return (
    <section id="solutions" className="web-page">
      <Header />
      
      <Main>
        <div className="principal-container">
          <div className="main-text">
            <h1>
              Como a sua organização pode evoluir ao lado da nossa consultoria
              ERP Protheus?
            </h1>

            <h6>
              A partir do mapeamento das melhores práticas de gestão empresarial,
              nosso time de consultores realiza melhorias de processos de negócios
              com o uso de diferentes automações, integrações e também com o
              apoio de inteligência artifical.
            </h6>

            <Link href="">RECEBA UM DIAGNÓSTICO GRATUITO</Link>
          </div>
        </div>

        <div className="delivery-solutions">
          <h1>Entregamos as melhores soluções em ERP</h1>

          <p>Você sabe tudo o que a nossa consultoria em ERP Protheus pode oferecer para você?</p>

          <div className="timeline">
            <div className="line"></div>

            <div className="cards">
              <div className="card">
                <h1>01</h1>
                <h3>Datacenter, banco e infraestrutura</h3>
                <p>
                  Hospedagem do ERP Manutenção do banco de dados, redes e segurança.
                </p>
              </div>

              <div className="card">
                <h1>02</h1>
                <h3>Fábrica de Software & customizações e integrações do ERP</h3>
                <p>
                  Desenvolvimento de programas customizados web ou AdvPL.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="free-diagnostic">
          <h1>Somos uma consultoria ERP com soluções completas</h1>

          <p>
            Descubra como o Portal de Vendas, Monitor XML, Painel Online, Automação de Faturamento
            e Service Desk podem ajudar a sua empresa.
          </p>

          <Link href="">RECEBA UM DIAGNÓSTICO GRATUITO</Link>

          <div className="solutions">
            <div className="solution">
              <img src="/assets/images/portal_vendas.png" alt=""/>

              <h2>Portal de Vendas</h2>

              <p>
                Consulte clientes, pedidos, aprovações, financeiro e dashboards
                em uma plataforma acessível de qualquer dispositivo.
              </p>

              <Link href="/solution">Saiba mais</Link>
            </div>

            <div className="solution">
              <img src="/assets/images/portal_vendas.png" alt=""/>

              <h2>Portal de Vendas</h2>

              <p>
                Consulte clientes, pedidos, aprovações, financeiro e dashboards
                em uma plataforma acessível de qualquer dispositivo.
              </p>

              <Link href="/solution">Saiba mais</Link>
            </div>
          </div>

          <div className="talk-to-specialist">
            <h1>
              Nossa consultoria trabalha com soluções ERP que atendem diferentes áreas:
            </h1>

            <img src="" alt=""/>

            <Link href="">CONVERSE COM UM ESPECIALISTA</Link>
          </div>
        </div>
        
        <WhoTrust />
        <ContactForm />
      </Main>
      
      <Footer />
    </section>
  );
}

export default Solutions;