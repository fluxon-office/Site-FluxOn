export default function Solucao() {
  const smoothScroll = (href) => (e) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  const supportPoints = [
    'Diagnostico antes da ferramenta',
    'Rotina clara antes da automacao',
    'Tecnologia aplicada no gargalo certo',
  ];

  return (
    <section id="solucao" className="solucao section-pad">
      <div className="container">
        <div className="solucao-grid">
          <div className="solucao-visual">
            <div className="solucao-orbits">
              <div className="sol-center-circle">
                <div className="sol-center-word">FluxON</div>
              </div>

              <div className="orbit-ring orbit-1">
                <div className="orbit-pill orbit-pill-fwd" style={{ '--dur': '14s' }}>
                  <span className="orbit-pill-dot" style={{ background: 'var(--blue)', boxShadow: '0 0 12px 4px var(--blue)' }} />
                </div>
              </div>

              <div className="orbit-ring orbit-2">
                <div className="orbit-pill orbit-pill-fwd" style={{ '--dur': '22s' }}>
                  <span className="orbit-pill-dot" style={{ background: 'var(--blue)', boxShadow: '0 0 12px 4px var(--blue)' }} />
                  Processo
                </div>
              </div>

              <div className="orbit-ring orbit-3">
                <div className="orbit-pill orbit-pill-rev" style={{ '--dur': '28s' }}>
                  <span className="orbit-pill-dot" style={{ background: 'var(--blue-light)', boxShadow: '0 0 12px 4px var(--blue-light)' }} />
                  Rotina
                </div>
              </div>

              <div className="orbit-ring orbit-4">
                <div className="orbit-pill orbit-pill-fwd" style={{ '--dur': '35s' }}>
                  <span className="orbit-pill-dot" style={{ background: '#a78bfa', boxShadow: '0 0 12px 4px #a78bfa' }} />
                  Automacao
                </div>
              </div>
            </div>
          </div>
          <div className="solucao-text">
            <div className="section-label">Solucao aplicada</div>
            <div className="solucao-copy-card reveal-right">
              <div className="solucao-title-row">
                <span className="solucao-title-icon" aria-hidden="true">
                  <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M4 6h7" />
                    <path d="M4 12h16" />
                    <path d="M4 18h10" />
                    <path d="M15 5l5 7-5 7" />
                  </svg>
                </span>
                <h2>Primeiro organizamos a operacao.<br />Depois aplicamos tecnologia.</h2>
              </div>
              <p>A FluxON nao comeca pela ferramenta. O trabalho parte do diagnostico da rotina: onde o cliente se perde, onde a agenda falha e quais tarefas travam a equipe.</p>
              <p>Quando a base esta clara, combinamos consultoria assistida com produto SaaS para transformar processo, atendimento e acompanhamento em uma operacao mais previsivel.</p>

              <div className="solucao-support-grid">
                {supportPoints.map((point) => (
                  <div className="solucao-support-item" key={point}>
                    <span aria-hidden="true" />
                    {point}
                  </div>
                ))}
              </div>

              <a className="btn-primary solucao-cta" href="#cta" onClick={(e) => smoothScroll('#cta')(e)}>
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
                  <path d="M8 9h8M8 13h5" />
                </svg>
                Conversar sobre o diagnostico
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
