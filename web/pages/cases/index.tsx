import { useEffect, useState } from 'react';

import Link from 'next/link';
import Header from '../../components/Header';
import Main from '../../components/Main';
import Footer from '../../components/Footer';
import ContactForm from '../../components/ContactForm';
import TalkToSpecialist from '../../components/TalkToSpecialist';
import api from '../api/api';

const Cases = () => {
  const [ cases, setCases ] = useState([]);

  async function loadCases() {
    const { data } = await api.get('cases');

    setCases(data);
  }

  useEffect(() => {
    loadCases();
  }, []);

  return (
    <section id="cases" className="web-page">
      <Header />

      <Main>
        <div className="main-container">
          <h1>Projetos em consultoria ERP Protheus</h1>

          <p>
            Com o apoio do nosso time de mais de 30 consultores, atendemos demandas
            de gestão empresarial de empresas de diferentes segmentos, analisamos
            cenários e aceleramos o crescimento das mesmas com soluções em ERP TOTVS.
          </p>
        </div>

        <div className="know-cases">
          <h1>Conheça os cases</h1>

          <div className="cases">
            {
              cases.map(({ image_path, name, resume }) => {
                return (
                  <div className="case" key={ name }>
                    <img src={ image_path } alt="Logotipo"/>
                    <p>
                      { resume }
                    </p>
                    <Link href={ `/pagecase/${ name.toString().toLowerCase() }` }>Saiba mais</Link>
                  </div>
                );
              })
            }
          </div>
        </div>

        <div className="testimonials">
          <div className="testimonial">
            <img src="/assets/images/dark_logos/zuiko.png" alt=""/>

            <p className="citation">
              "A Conecta ERP possui vivência profissional diversificada e capacitação
              técnica que está sempre em sintonia com as constantes atualizações
              digitais do fisco brasileiro. Ética e compromisso são diferenciais
              que se faz presente na prestação de serviço, por esta razão, faço uso
              e recomendo seus serviços de suporte no sistema TOTVS."
            </p>

            <div className="author">
              <strong>Carlos Herculano</strong>
              <span className="job">Gerente Controladoria Zuiko</span>
            </div>
          </div>
        </div>

        <TalkToSpecialist />

        <ContactForm />
      </Main>

      <Footer />
    </section>
  );
}

export default Cases;