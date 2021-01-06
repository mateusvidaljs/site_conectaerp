import Link from 'next/link';
import Header from '../../components/Header';
import Main from '../../components/Main';
import Footer from '../../components/Footer';

const AboutUs = () => {
  return (
    <section id="about-us" className="web-page">
      <Header />

      <Main>
        <div className="main-container">
          <h1 className="title">
            Consultoria ERP Protheus que acelera o crescimento das empresas
          </h1>
          <h4 className="subtitle">
            Especialistas em ERP TOTVS
          </h4>
          <p>
            Atuamos na melhor definição de escopo do projeto, acompanhamento e 
            implantação do sistema ERP Protheus.
          </p>

          <Link href="/">RECEBA UM DIAGNÓSTICO GRATUITO</Link>
        </div>

        <div className="meet-founders">
          <h1>Conheça os fundadores da Conecta ERP</h1>

          <div className="founders">
            <div className="founder">
              <img src="/assets/images/leandro.png" alt=""/>
              <h2>Leandro Silva</h2>
              <p className="position">
                CEO da Conecta ERP
              </p>
              <p className="resume">
                Especialista há mais de 10 anos em Tecnologia da Informação atuando
                nas áreas de suporte, consultoria e projetos. Ampla vivência na implantação,
                virada de versão, suporte e gestão de sistemas ERP Microsiga, assim
                como no mapeamento e definição de processos, elaboração de especificações
                técnicas, funcionais e treinamentos. Também possui conhecimentos nas principais
                áreas integradas pelos sistemas ERP.
              </p>

              <a href="">LinkedIn</a>
            </div>

            <div className="founder">
              <img src="/assets/images/vinicius.png" alt=""/>
              <h2>Vinicius Durbano</h2>
              <p className="position">
                Sócio Investidor
              </p>
              <p className="resume">
                Especialista há mais de 15 anos em Tecnologia da Informação e Cibersegurança,
                é CEO da empresa Eco IT e sócio-investidor da Conecta ERP. Como evangelizador
                de Cibersegurança, ajuda profissionais de TI com a conscientização com relação
                aos riscos cibernéticos e é um dos pioneiros em computação em nuvem no Brasil.
              </p>

              <a href="">LinkedIn</a>
            </div>
          </div>
        </div>

        <div className="our-team">
          <img src="/assets/images/team.png" alt="" />

          <div className="text-container">
            <h1>Nosso time:</h1>
            <h3>especialistas em consultoria ERP Protheus</h3>

            <p>
              O time de consultories ERP é formado por mais de 30 profissionais
              multidisciplinares seniors, com ampla experiência no mercado
              e qualificados para a entrega de projetos complexos para diferentes
              segmentos de organizações.
            </p>
          </div>
        </div>
      
        <div className="understand-our-work">
          <h1>
            Entenda a nossa metodologia de trabalho
          </h1>

          <div className="body">
            <div className="text">
              <p>
                Trabalhamos com a aplicação de métodos ágeis com o objetivo de 
                priorizar a resolução de problemas.
              </p>

              <p>
                Entendemos que <strong>responder à mudanças </strong> é mais importante
                do que seguir um plano quando o assunto é manter um software em funcionamento
                para otimizar a produtividade da sua empresa.
              </p>

              <p>
                Ao lado do cliente, definimos um cronograma de trabalho com base
                no tempo e recursos disponíveis. No término de cada ciclo de trabalho,
                o escopo do projeto é revisto e priorizado.
              </p>

              <div>
                <Link href="/">CONVERSE COM UM ESPECIALISTA</Link>
              </div>
            </div>

            <img src="/assets/images/metodologia.svg" alt=""/>
          </div>
        </div>
      
        <div className="be-consultor">
          <h1>Seja um consultor da Conecta ERP</h1>
          <p>
            Você acredita em trabalho estratégico, interativo e flexível para
            alcançar resultados?
            Nosso banco de talentos está aberto para conhecer você.
          </p>
          <Link href="/">ENVIE O SEU CURRÍCULO</Link>
        </div>

        {/* <div className="who-trust">
          <div className="third-content">
            <div className="text-container">
              <h2>Quem confia</h2>
              <p>Conheça as empresas que prosperam ao nosso lado</p>
            </div>

            <div className="main-clients-brandings">
              <ul>
                <li>
                  <img src="/assets/images/Final_Crawford_Logo_287C_6.13.png" alt=""/>
                </li>
                <li>
                  <img src="/assets/images/Johnson_Electric_logo.svg.png" alt=""/>
                </li>
                <li>
                  <img src="/assets/images/Koyo-logo-6A2333F919-seeklogo.com.png" alt=""/>
                </li>
                <li>
                  <img src="/assets/images/logo-superbom.png" alt=""/>
                </li>
                <li>
                  <img src="/assets/images/logoDAISO.png" alt=""/>
                </li>
                <li>
                  <img src="/assets/images/pp_c.png" alt=""/>
                </li>
              </ul>
            </div>

            <Link href="/">CONHEÇA OS CASES</Link>
          </div>
        </div> */}
      </Main>

      <Footer />
    </section>
  );
}

export default AboutUs;