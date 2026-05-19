const fitGroups = [
  {
    title: 'Para quem e',
    tone: 'positive',
    description: 'A FluxON faz mais sentido para negocios locais que ja sentem perda de controle entre entrada de leads, agenda, atendimento e acompanhamento.',
    items: [
      { icon: 'clinic', text: 'Clinicas, estetica, bem-estar e operacoes com agenda ativa.' },
      { icon: 'lead', text: 'Negocios que recebem leads, agendam atendimentos e perdem controle no meio do caminho.' },
      { icon: 'whatsapp', text: 'Equipes que hoje dependem de WhatsApp, agenda manual e confirmacao feita no improviso.' },
    ],
  },
  {
    title: 'Para quem nao e',
    tone: 'negative',
    description: 'Nao e uma entrega para quem procura aparencia sem mexer na rotina. A proposta e organizar processo antes de adicionar tecnologia.',
    items: [
      { icon: 'surface', text: 'Quem quer apenas um site bonito sem mexer na operacao.' },
      { icon: 'question', text: 'Empresas que ainda nao tem um problema claro para resolver.' },
      { icon: 'software', text: 'Negocios que procuram um software generico antes de entender o gargalo real.' },
    ],
  },
];

function FitIcon({ type }) {
  const icons = {
    clinic: (
      <>
        <path d="M4 20V8l8-4 8 4v12" />
        <path d="M9 20v-6h6v6" />
        <path d="M12 8v4M10 10h4" />
      </>
    ),
    lead: (
      <>
        <path d="M4 6h10" />
        <path d="M4 12h16" />
        <path d="M4 18h8" />
        <path d="M17 15l3 3-3 3" />
      </>
    ),
    whatsapp: (
      <>
        <path d="M5 19l1.2-3.5A7.5 7.5 0 1 1 9 18.2L5 19z" />
        <path d="M9.5 8.5c.4 2.6 2 4.2 4.8 5" />
        <path d="M9.5 8.5l1.1-.7 1 1.8-.8.7" />
        <path d="M14.3 13.5l.7-.9 1.8 1-.7 1.2" />
      </>
    ),
    surface: (
      <>
        <rect x="4" y="5" width="16" height="14" rx="3" />
        <path d="M8 9h8M8 13h5" />
      </>
    ),
    question: (
      <>
        <circle cx="12" cy="12" r="8" />
        <path d="M9.8 9a2.4 2.4 0 0 1 4.4 1.4c0 1.7-2.2 2-2.2 3.4" />
        <path d="M12 17h.01" />
      </>
    ),
    software: (
      <>
        <rect x="4" y="5" width="16" height="14" rx="3" />
        <path d="M4 9h16" />
        <path d="M8 13h3M8 16h8" />
      </>
    ),
  };

  return (
    <span className="fit-icon" aria-hidden="true">
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        {icons[type]}
      </svg>
    </span>
  );
}

export default function FitSection() {
  return (
    <section id="fit" className="fit section-pad">
      <div className="container">
        <div className="section-label reveal">Clareza de foco</div>
        <div className="fit-grid">
          {fitGroups.map((group, index) => (
            <article className={`fit-card fit-${group.tone} reveal${index ? ` d${index}` : ''}`} key={group.title}>
              <div className="fit-card-head">
                <span className="fit-kicker">{index === 0 ? 'Perfil ideal' : 'Fora de foco'}</span>
                <h2 className="fit-title">{group.title}</h2>
                <p className="fit-description">{group.description}</p>
              </div>
              <div className="fit-list">
                {group.items.map((item) => (
                  <div className="fit-item" key={item.text}>
                    <FitIcon type={item.icon} />
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
