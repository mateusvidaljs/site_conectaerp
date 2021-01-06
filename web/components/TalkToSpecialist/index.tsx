import React from 'react';
import Link from 'next/link';

const TalkToSpecialist: React.FC = () => {
  return (
    <section id="specialist">
      <div className="first-container">
        <h1>
          Você está tendo dificuldades ao utilizar seus sistema ERP Protheus
          ou RM?
        </h1>

        <h3>
          Faça um diagnóstico da sua empresa com a nossa consultoria em ERP
          e aproveite os <strong>7 dias de suporte gratuito</strong>
        </h3>

        <Link href="/">CONVERSE COM UM ESPECIALISTA</Link>
      </div>
    </section>
  );
}

export default TalkToSpecialist;