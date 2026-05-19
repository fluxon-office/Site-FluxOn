const links = [
  { href: '#problema', label: 'Problema' },
  { href: '#solucao', label: 'Solução' },
  { href: '#depoimentos', label: 'Resultados' },
  { href: '#como-funciona', label: 'Como funciona' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#cta', label: 'Contato' },
];

export default function Footer() {
  const logoUrl = `${import.meta.env.BASE_URL}brand/logo.png`;

  const smoothScroll = (href) => (e) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <img className="footer-logo" src={logoUrl} alt="FluxON" />
      <div className="footer-copy">
        © {new Date().getFullYear()} FluxON. Todos os direitos reservados.
      </div>
      <div className="footer-links">
        {links.map((link) => (
          <a key={link.href} href={link.href} onClick={smoothScroll(link.href)}>
            {link.label}
          </a>
        ))}
      </div>
    </footer>
  );
}
