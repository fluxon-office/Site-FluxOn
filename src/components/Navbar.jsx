import { useEffect, useState, useCallback } from 'react';
import { trackEvent } from '../utils/analytics';

const navItems = [
  { href: '#fit', label: 'Foco' },
  { href: '#problema', label: 'Problema' },
  { href: '#entregas', label: 'Servicos' },
  { href: '#plataforma', label: 'Plataforma' },
  { href: '#como-funciona', label: 'Metodo' },
  { href: '#sobre', label: 'Sobre' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const logoUrl = `${import.meta.env.BASE_URL}brand/logo.png`;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavCta = useCallback(() => {
    trackEvent('click', 'nav', 'cta_nav');
  }, []);

  const smoothScroll = (href) => (e) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`} id="navbar">
      <div className="navbar-shell">
        <a className="navbar-brand" href="#hero" aria-label="FluxON Home" onClick={smoothScroll('#hero')}>
          <img className="logo-img" src={logoUrl} alt="FluxON" />
        </a>

        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} onClick={smoothScroll(item.href)}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          className="nav-cta"
          href="#cta"
          onClick={(e) => {
            handleNavCta();
            smoothScroll('#cta')(e);
          }}
        >
          Pedir diagnostico <span aria-hidden="true">-&gt;</span>
        </a>
      </div>

      <div className="nav-mobile-links" aria-label="Navegacao da pagina">
        {navItems.map((item) => (
          <a key={item.href} href={item.href} onClick={smoothScroll(item.href)}>
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
