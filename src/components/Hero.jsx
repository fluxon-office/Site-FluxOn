import heroTeamPhoto from '../assets/team/fluxon-team.png';

function LiveDot() {
  return <span className="live-dot" />;
}

function MetricIcon({ type }) {
  const icons = {
    entrada: (
      <>
        <path d="M4 12h10" />
        <path d="M10 6l6 6-6 6" />
        <path d="M20 5v14" />
      </>
    ),
    agenda: (
      <>
        <rect x="4" y="5" width="16" height="15" rx="3" />
        <path d="M8 3v4M16 3v4M4 10h16" />
        <path d="M8 14h3M14 14h2M8 17h2" />
      </>
    ),
    atendimento: (
      <>
        <path d="M7 11a5 5 0 0 1 10 0v2" />
        <path d="M5 13h3v5H5zM16 13h3v5h-3z" />
        <path d="M17 18c-.8 1.8-2.4 3-5 3" />
      </>
    ),
    controle: (
      <>
        <path d="M4 19V5" />
        <path d="M4 19h16" />
        <path d="M8 15l3-4 3 2 4-6" />
        <circle cx="8" cy="15" r="1" />
        <circle cx="11" cy="11" r="1" />
        <circle cx="14" cy="13" r="1" />
        <circle cx="18" cy="7" r="1" />
      </>
    ),
  };

  return (
    <span className={`dashboard-metric-icon icon-${type}`} aria-hidden="true">
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        {icons[type]}
      </svg>
    </span>
  );
}

export default function Hero() {
  const smoothScroll = (href) => (e) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  const activities = [
    { status: 'completed', text: 'Lead entrou e a equipe recebeu contexto antes do atendimento.' },
    { status: 'completed', text: 'Confirmacao enviada sem depender de follow-up manual.' },
    { status: 'processing', text: 'Agenda, time e demanda sendo reorganizados no mesmo fluxo.' },
    { status: 'completed', text: 'Atendimento confirmado e operacao atualizada.' },
    { status: 'running', text: 'Gargalos de rotina mapeados para a proxima decisao.' },
  ];

  const metrics = [
    { type: 'entrada', label: 'Entrada', value: 'Leads', desc: 'origem, contato e contexto dispersos' },
    { type: 'agenda', label: 'Agenda', value: 'Ruidos', desc: 'confirmacoes manuais, remarcacoes e faltas' },
    { type: 'atendimento', label: 'Atendimento', value: 'Equipe', desc: 'tempo gasto repetindo o mesmo processo' },
    { type: 'controle', label: 'Controle', value: 'Visao', desc: 'dados soltos entre agenda, financeiro e operacao' },
  ];

  return (
    <section className="hero" id="hero">
      <img
        className="hero-photo-bg"
        src={heroTeamPhoto}
        alt="Equipe FluxON"
      />

      <div className="hero-video-overlay" />
      <div className="hero-grid-line" />
      <div className="hero-grid-line" />
      <div className="hero-grid-line" />

      <div style={{ position: 'relative', zIndex: 1 }}>
        <p className="hero-label">Consultoria operacional · automacao · negocios com agendamento</p>
        <h1>
          Menos caos entre
          <br />
          lead, agenda e atendimento.
          <br />
          Mais <em>operacao clara.</em>
        </h1>
        <p className="hero-sub">
          A FluxOn ajuda clinicas e negocios com agenda a enxergar gargalos, organizar a rotina e automatizar
          o que hoje trava confirmacao, comparecimento e controle.
        </p>
        <div className="hero-actions" style={{ marginBottom: 24 }}>
          <a className="btn-primary" href="#cta" onClick={(e) => smoothScroll('#cta')(e)}>
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
            Pedir diagnostico inicial →
          </a>
          <a className="btn-ghost" href="#como-funciona" onClick={(e) => smoothScroll('#como-funciona')(e)}>
            Entender o metodo
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </a>
        </div>

        <div className="reveal-up hero-dashboard" style={{ marginTop: 36 }}>
          <div className="dashboard-window">
            <div className="dashboard-header">
              <div className="dashboard-dots">
                <span style={{ background: '#ef4444' }} />
                <span style={{ background: '#f59e0b' }} />
                <span style={{ background: '#10b981' }} />
              </div>
              <div className="dashboard-title">
                <LiveDot />
                Diagnostico operacional · leitura em tempo real
              </div>
            </div>

            <div className="dashboard-body">
              <div className="dashboard-metrics">
                {metrics.map((metric) => (
                  <div className="dashboard-metric" key={metric.label}>
                    <div className="dashboard-metric-head">
                      <MetricIcon type={metric.type} />
                      <div className="dashboard-metric-label">{metric.label}</div>
                    </div>
                    <div className="dashboard-metric-value">{metric.value}</div>
                    <div className="dashboard-metric-delta">{metric.desc}</div>
                  </div>
                ))}
              </div>

              <div className="dashboard-activity">
                <div className="dashboard-activity-title">Sinais de gargalo</div>
                <div className="activity-feed">
                  {activities.map((a, i) => (
                    <div className="activity-item" key={i} style={{ animationDelay: `${i * 0.8}s` }}>
                      <span className={`activity-status activity-${a.status}`}>
                        <span />
                      </span>
                      <span className="activity-text">{a.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="dashboard-chart-bar">
              <div className="chart-label">Fluxo do dia</div>
              <div className="mini-chart">
                {[120, 145, 98, 167, 134, 189, 156, 201].map((h, i) => (
                  <div className="chart-col" key={i}>
                    <div className="chart-col-fill" style={{ height: `${(h / 210) * 100}%` }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-scroll-indicator"><div className="hero-scroll-line" />scroll</div>
      <div className="hero-stat">
        <div className="hero-stat-number">01</div>
        <div className="hero-stat-label">foco: diagnosticar antes de automatizar.</div>
      </div>
    </section>
  );
}
