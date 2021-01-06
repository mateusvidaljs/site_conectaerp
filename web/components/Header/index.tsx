import React, { useState } from 'react';
import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';

const Header: React.FC = () => {
  const [ hidden, setHidden ] = useState(true);

  function handleMouseHover() {
    setHidden(false);
  }

  function handleMouseLeave() {
    setHidden(true);
  }

  return (
    <header className="header-default">
      <Link href="/">
        <img src="/assets/images/logo.png" alt="Logotipo" className="main-logo"/>
      </Link>

      <ul>
        <li>
          <Link href="/aboutus">Sobre nós</Link>
        </li>
        <li onMouseOver={ handleMouseHover } onMouseLeave={ handleMouseLeave }>
          <Link href="/solutions">Soluções</Link>

          <div onMouseOver={ handleMouseHover } onMouseLeave={ handleMouseLeave } className="submenu-solutions" hidden={ hidden }>
            <ul>
              <li><Link href="/solution/painelvendas">Portal de Vendas</Link></li>
              <li><Link href="/solution/monitorxml">Monitor XML</Link></li>
              <li><Link href="/solution/painelonline">Painel Online</Link></li>
              <li><Link href="/solution/automacao">Automação de Faturamento</Link></li>
              <li><Link href="/solution/ams">Service Desk | AMS</Link></li>
            </ul>
          </div>
        </li>
        <li>
          <Link href="/">Portal</Link>
        </li>
        <li>
          <Link href="/cases">Cases</Link>
        </li>
        <li>
          <Link href="/contact">Contato</Link>
        </li>
      </ul>

      <div className="header-buttons">
        <FaWhatsapp size={ 35 } style={{ cursor: 'pointer' }} />

        <Link href="/contact">ENTRE EM CONTATO</Link>
      </div>
    </header>
  );
}

export default Header;