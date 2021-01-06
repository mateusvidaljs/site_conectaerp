import Link from 'next/link';
import React from 'react';

const WhoTrust: React.FC = () => {
  return (
    <div id="who-trust">
      <div className="text-container">
        <h2>Quem confia</h2>
        <p>Conheça as empresas que prosperam ao nosso lado</p>
      </div>

      <div className="main-clients-brandings">
        <ul>
          <li>
            <img src="/assets/images/dark_logos/crawford.png" alt=""/>
          </li>
          <li>
            <img src="/assets/images/dark_logos/logoDAISO.png" alt=""/>
          </li>
          <li>
            <img src="/assets/images/dark_logos/johnson_electric.png" alt=""/>
          </li>
          <li>
            <img src="/assets/images/dark_logos/koyo.png" alt=""/>
          </li>
          <li>
            <img src="/assets/images/dark_logos/superborn.png" alt=""/>
          </li>
          <li>
            <img src="/assets/images/dark_logos/pp_c.png" alt=""/>
          </li>
        </ul>
      </div>

      <Link href="/">CONHEÇA OS CASES</Link>
    </div>
  );
}

export default WhoTrust;