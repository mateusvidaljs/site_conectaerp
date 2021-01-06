import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer-navigation">
        <div className="logo-container">
          <img src="/assets/images/logo.png" alt=""/>
        </div>

        <div className="navigation-menu-container">
          <div className="navigation-menu">
            <h3>Sobre nós</h3>
            <a href="/cases">Cases</a>
          </div>

          <div className="navigation-menu">
            <h3>Soluções</h3>
            <a href="/solution/painelvendas">Portal de Vendas</a>
            <a href="/solution/monitorxml">Monitor XML</a>
            <a href="/solution/painelonline">Painel Online</a>
            <a href="/solution/automacao">Automação de Faturamento</a>
            <a href="/solution/ams">Service Desk | AMS</a>
          </div>

          <div className="navigation-menu">
            <h3>Blog</h3>
            <a href="/">Portal</a>
          </div>

          <div className="navigation-menu">
            <h3>Contato</h3>
            <p>Av. Paulista, 171 - Paraíso, São Paulo - SP Brasil</p>
            <p>+55 11 3995.9039</p>

            <div className="social-media-buttons">
              <a href="">
                <FaFacebookF size={ 24 } color='#5E12D4' />
              </a>
              <a href="">
                <FaInstagram size={ 24 } color='#5E12D4' />
              </a>
              <a href="">
                <FaLinkedinIn size={ 24 } color='#5E12D4' />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright-container">
        <div className="copyright-totvs">
          <p>A Conecta ERP é uma consultoria independente.</p>
          <p>Protheus, Fluig e TOTVS são marcas registradas pertencentes à TOTVS S/A.</p>
        </div>

        <div className="developed-by">
          <p>Criado por</p>
          <a href="https://www.nubmarketing.com/">
            <img src="https://www.nubmarketing.com/static/f5184e5a16742efc1f190ff08ff9f1b2/8cd67/nub.png" alt=""/>
          </a>

          <p>Desenvolvido por</p>
          <a href="https://www.nubmarketing.com/">
            <img src="/assets/images/ethosx.png" alt="" style={{ marginBottom: '-1rem' }}/>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;