import { useEffect, useState } from 'react';
import api from './api/api';

import Head from 'next/head';
import Link from 'next/link';

import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import TalkToSpecialist from '../components/TalkToSpecialist';

import { FaChevronLeft, FaChevronRight, FaDotCircle } from 'react-icons/fa';
import Solutions from '../components/Solutions';

const Home = () => {
  const [ imageHover, setImageHover ] = useState('main');
  const [ title, setTitle ] = useState('...');
  const [ subTitle, setSubTitle ] = useState('...');
  const [ cases, setCases ] = useState([]);
  const [ slide, setSlide ] = useState(1);
  const slideCount = 5;

  async function loadHome() {
    const { data } = await api.get('home');
    setTitle(data[0].main_title);
    setSubTitle(data[0].main_resume);

    await getCases();
  }

  async function getCases() { 
    await api.get('cases').then(({ data }) => {
      setCases(data);
    }).catch(err => {
      console.error(err);
    });
  }

  function nextSlide() {
    if (slide < slideCount) {
      setSlide(slide + 1);
    }
    else if (slide === slideCount) {
      setSlide(1);
    }
  }

  function prevSlide() {
    if (slide === 1) {
      setSlide(slideCount);
    }
    else {
      setSlide(slide - 1);
    }
  }

  useEffect(() => {
    loadHome();
  }, []);

  return (
    <>
      <Head>
        <title>Conecta | ERP para a era digital</title>
      </Head>
      
      <section id="home" className="web-page">
        <Header />

        <main>
          <section id="main-container">
            <div className="first-content">
              <div className="text-container">
                <h1>{ title }</h1>

                <h3>
                  { subTitle }
                </h3>

                <div className="button-container">
                  <Link href="/contact">RECEBA UM DIAGNÓSTIO GRATUITO</Link>
                </div>
              </div>

              <img src="/assets/images/main-image.svg" alt="Main Image" onMouseOver={ (ev) => { setImageHover('hover') } } hidden={ imageHover === 'hover' } />
              <img src="/assets/images/main-image-hover.svg" alt="Main Image" onMouseLeave={ (ev) => { setImageHover('main') } } hidden={ imageHover === 'main' } />
            </div>

            <div className="second-content">
              <div className="text-container">
                <p>
                  Somos uma consultoria especializada em ERP que vai além da implementação
                  do software: estudamos cenários, otimizamos fluxos de trabalho, reduzimos o
                  tempo de execução e automatizamos processos das organizações.
                </p>
              </div>
            </div>

            <div className="third-content">
              <div className="text-container">
                <h2>Quem confia</h2>
                <p>Conheça as empresas que prosperam ao nosso lado</p>
              </div>

              <div className="main-clients-brandings">
                <ul>
                  {
                    cases.map(({ case_id, image_path }) => {
                      return (
                        <li key={ case_id }>
                          <img src={ image_path } alt="Case" />
                        </li>
                      );
                    })
                  }
                </ul>
              </div>

              <Link href="/pagecase">CONHEÇA OS CASES</Link>
            </div>
          </section>
        
          <Solutions />
        
          <section id="why-container">
            <div className="first-container">
              <h1>Por que Conecta ERP?</h1>
              <h3>Somos uma consultoria ERP com soluções e processos completos.</h3>
            </div>

            <div className="second-container">
              <ul>
                <li>
                  <img src="/assets/images/icon1.png" alt=""/>
                  <p>
                    <strong>Método preciso de serviço </strong>
                    com controle da demanda e do serviço prestado
                  </p>
                </li>
                <li>
                  <img src="/assets/images/icon2.png" alt=""/>
                  <p>
                    Aplicação de práticas de <strong>gestão empresarial</strong>
                  </p>
                </li>
                <li>
                  <img src="/assets/images/icon3.png" alt=""/>
                  <p>
                    Entrega de <strong>obrigações fiscais e contábeis </strong> no
                    prazo estipulado
                  </p>
                </li>
                <li>
                  <img src="/assets/images/icon4.png" alt=""/>
                  <p>
                    <strong>Banco de horas </strong>para serem utilizadas conforme
                    a sua necessidade
                  </p>
                </li>
              </ul>

              <Link href="/contact">RECEBA UM DIAGNÓSTICO GRATUITO</Link>
            </div>
          </section>
        
          <TalkToSpecialist />
        
          <ContactForm />
        </main>

        <Footer />
      </section>
    </>
  );
}

export default Home;