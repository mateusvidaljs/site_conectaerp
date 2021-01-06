import { useState } from 'react';

import { FaChevronLeft, FaChevronRight, FaDotCircle } from 'react-icons/fa';

import Link from 'next/link';

const Solutions = () => {
  const [ slide, setSlide ] = useState(1);
  const slideCount = 5;

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

  return (
    <section id="solutions-container">
      <div className="first-container">
        <h1>Nossas soluções</h1>
        <h2>Conheça as soluções da nossa consultoria ERP Protheus</h2>
      </div>

      <div className="second-container">
        <div className="carousel-container">
          <FaChevronLeft color="#520EBC" size={ 40 } className="icon-carousel" onClick={ prevSlide } />

          <div className="carousel-items">
            <div className="carousel-item" style={{ display: slide === 1 ? 'flex' : 'none' }}>
              <img src="/assets/images/portal_vendas.png" alt=""/>

              <div className="carousel-text">
                <h2>Portal de Vendas</h2>
                <p>
                  Consulte clientes, pedidos, aprovações, financeiro e dashboards
                  em uma plataforma acessível de qualquer dispositivo.
                </p>
              </div>
            </div>

            <div className="carousel-item" style={{ display: slide === 2 ? 'flex' : 'none' }}>
              <img src="/assets/images/monitorxml.png" alt=""/>

              <div className="carousel-text">
                <h2>Monitor XML</h2>
                <p>
                  Tenha mais segurança com uma ferramenta de compliance onde é
                  possível verificar no ambiente SEFAZ a situação das notas fiscais
                  emitidas contra o CNPJ da sua empresa.
                </p>
              </div>
            </div>

            <div className="carousel-item" style={{ display: slide === 3 ? 'flex' : 'none' }}>
              <img src="/assets/images/painelonline.png" alt=""/>

              <div className="carousel-text">
                <h2>Painel Online</h2>
                <p>
                  Produza gráficos personalizados e mais adequados ao seu negócio
                  e estratégia e disponibilize-os em um ambiente online e acessível
                  a todos em tempo real.
                </p>
              </div>
            </div>

            <div className="carousel-item" style={{ display: slide === 4 ? 'flex' : 'none' }}>
              <img src="/assets/images/automacaofaturamento.png" alt=""/>

              <div className="carousel-text">
                <h2>Automação de Faturamento</h2>
                <p>
                  Controle a geração de boletos emitidos por sua empresa e tenha
                  relatórios automáticos e workflows que auxiliam no controle
                  exato das entradas do fluxo de caixa.
                </p>
              </div>
            </div>

            <div className="carousel-item" style={{ display: slide === 5 ? 'flex' : 'none' }}>
              <img src="/assets/images/ams.png" alt=""/>

              <div className="carousel-text">
                <h2>Service Desk | AMS</h2>
                <p>
                  Ganhe mais produtividade na resolução de problemas centralizando
                  as necessidades com a abertura de chamados, acompanhamento
                  de atendimento e resposta à incidentes.
                </p>
              </div>
            </div>
          </div>

          <FaChevronRight color="#520EBC" size={ 40 } className="icon-carousel" onClick={ nextSlide } />
        </div>

        <div className="points-carousel">
          <FaDotCircle color={ slide === 1 ? '#520EBC' : '#3c3c3c' } className="point" />
          <FaDotCircle color={ slide === 2 ? '#520EBC' : '#3c3c3c' } className="point" />
          <FaDotCircle color={ slide === 3 ? '#520EBC' : '#3c3c3c' } className="point" />
          <FaDotCircle color={ slide === 4 ? '#520EBC' : '#3c3c3c' } className="point" />
          <FaDotCircle color={ slide === 5 ? '#520EBC' : '#3c3c3c' } className="point" />
        </div>

        <Link href="/cases">SAIBA MAIS</Link>
      </div>
    </section>
  );
}

export default Solutions;