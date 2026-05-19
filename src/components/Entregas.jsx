import gestaoFinanceira from '../assets/showcases/financial-management.png';
import dashboard from '../assets/showcases/dashboard.png';
import painelClinica from '../assets/showcases/clinic-panel.png';
import software from '../assets/showcases/software.png';

export default function Entregas() {
  const cards = [
    {
      icon: 'flow',
      solution: 'Servicos de estruturacao',
      title: 'Lead, agenda e atendimento no mesmo fluxo',
      body: 'Mapeamos a jornada operacional para que a equipe pare de alternar entre mensagens soltas, agenda manual e repasse incompleto de informacao.',
      metric: 'Fluxo',
      metricLabel: 'mais claro para a equipe',
      hint: 'Espaco para visual real da rotina ou mapa de processo',
      image: gestaoFinanceira,
      imageAlt: 'Painel moderno de gestao financeira',
    },
    {
      icon: 'consulting',
      solution: 'Consultoria assistida',
      title: 'Processo antes da ferramenta',
      body: 'Organizamos a rotina primeiro: funil, agenda, responsabilidades e pontos de controle. A tecnologia entra depois, para sustentar o que ja foi estruturado.',
      metric: 'Menos',
      image: painelClinica,
      imageAlt: 'Painel de clinica com automacao operacional',
      metricLabel: 'ruido operacional',
      hint: 'Espaco para fluxo real de automacao ou confirmacao',
    },
    {
      icon: 'platform',
      solution: 'Produto SaaS',
      title: 'Plataforma para negocios com agendamento',
      body: 'Apoiamos negocios locais que perdem atendimentos por falta de controle de agenda, clientes desorganizados e operacao sem padrao claro.',
      metric: 'Mais',
      image: software,
      imageAlt: 'Interface de software integrada',
      metricLabel: 'controle da rotina',
      hint: 'Espaco para painel, quadro ou visao consolidada',
    },
    {
      icon: 'implementation',
      solution: 'Implementacao sob medida',
      title: 'Cada decisao nasce do diagnostico',
      body: 'Nem todo cliente precisa da mesma combinacao de processo, consultoria, automacao e sistema. A implementacao parte do gargalo real, nao de pacote pronto.',
      metric: 'Sem',
      metricLabel: 'solucao engessada',
      hint: 'Espaco para caso real ou imagem de apoio',
      image: dashboard,
      imageAlt: 'Dashboard de gestao com visao operacional',
    },
  ];

  const icons = {
    flow: (
      <>
        <path d="M4 7h7" />
        <path d="M4 17h7" />
        <path d="M13 7h3a4 4 0 0 1 0 8h-3" />
        <path d="M9 13l4 4-4 4" />
      </>
    ),
    consulting: (
      <>
        <circle cx="8" cy="8" r="3" />
        <path d="M3.5 19a4.5 4.5 0 0 1 9 0" />
        <path d="M15 8h5M15 12h4M15 16h3" />
      </>
    ),
    platform: (
      <>
        <rect x="4" y="5" width="16" height="14" rx="3" />
        <path d="M4 10h16" />
        <path d="M8 14h3M14 14h2M8 17h8" />
      </>
    ),
    implementation: (
      <>
        <path d="M14 7l3 3-7 7H7v-3z" />
        <path d="M16 5l3 3" />
        <path d="M5 19h14" />
      </>
    ),
  };

  return (
    <section id="entregas" className="entregas section-pad">
      <div className="container">
        <div className="section-label reveal">Servicos</div>
        <h2 className="entregas-heading reveal">Estruturamos a operacao<br />antes de vender tecnologia.</h2>

        <div className="entregas-grid">
          {cards.map((c, i) => (
            <div className={`entregas-card reveal d${i}`} key={i}>
              <div className="card-image-container">
                {c.image ? <img src={c.image} alt={c.imageAlt} /> : null}
                <div className="card-image-placeholder">
                  <svg width="24" height="24" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" viewBox="0 0 24 24">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <path d="M21 15l-5-5L5 21" />
                  </svg>
                  <span>{c.hint}</span>
                </div>
              </div>

              <div className="card-content">
                <div className="card-tag">
                  <span className="service-icon" aria-hidden="true">
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      {icons[c.icon]}
                    </svg>
                  </span>
                  {c.solution}
                </div>
                <h3 className="card-title">{c.title}</h3>
                <p className="card-body">{c.body}</p>
                <div className="card-result">
                  <span className="card-result-val">
                    {c.metric}
                    <span aria-hidden="true">-&gt;</span>
                  </span>
                  <span className="card-result-label">{c.metricLabel}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
