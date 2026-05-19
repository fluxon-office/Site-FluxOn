const pains = [
  { n: '01', icon: 'lead', emphasis: 'Lead entra,', title: 'mas o contexto se perde', body: 'A empresa recebe contato, mas a informacao fica espalhada entre WhatsApp, agenda, recepcao e memoria da equipe.' },
  { n: '02', icon: 'confirm', emphasis: 'Confirmacao', title: 'depende de insistencia manual', body: 'Cada agendamento exige mensagem, confirmacao e remarcacao no improviso. Quando a rotina aperta, a taxa de falta sobe.' },
  { n: '03', icon: 'growth', emphasis: 'A operacao cresce', title: 'sem padrao', body: 'Mais demanda nao vira mais controle. Vira mais ruido, mais retrabalho e mais dependencia de pessoas segurando o processo no braco.' },
  { n: '04', icon: 'vision', emphasis: 'Ninguem enxerga', title: 'o gargalo inteiro', body: 'O problema parece ser agenda, mas quase sempre envolve atendimento, processo, repasse de informacao e ausencia de prioridade clara.' },
];

function PainIcon({ type }) {
  const icons = {
    lead: (
      <>
        <path d="M4 7h9" />
        <path d="M4 12h16" />
        <path d="M4 17h8" />
        <path d="M16 15l4-3-4-3" />
      </>
    ),
    confirm: (
      <>
        <rect x="4" y="5" width="16" height="15" rx="3" />
        <path d="M8 3v4M16 3v4M4 10h16" />
        <path d="M8 15l2 2 5-5" />
      </>
    ),
    growth: (
      <>
        <path d="M4 19V5" />
        <path d="M4 19h16" />
        <path d="M7 15l4-4 3 3 5-7" />
      </>
    ),
    vision: (
      <>
        <path d="M3 12s3.5-6 9-6 9 6 9 6-3.5 6-9 6-9-6-9-6z" />
        <circle cx="12" cy="12" r="2.5" />
      </>
    ),
  };

  return (
    <span className="pain-icon" aria-hidden="true">
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        {icons[type]}
      </svg>
    </span>
  );
}

export default function Problema() {
  return (
    <section id="problema" className="problema section-pad">
      <div className="container">
        <div className="section-label reveal">O problema real</div>
        <p className="problema-headline reveal">
          O gargalo nao esta so na agenda.
          <br />
          <em>Ele aparece quando lead, atendimento</em>
          <br />
          e operacao deixam de conversar.
        </p>
        <div className="pain-list">
          {pains.map((p, i) => (
            <div className={`pain-item reveal${i > 0 ? ` d${i}` : ''}`} key={p.n}>
              <div className="pain-card-glow" aria-hidden="true" />
              <div className="pain-marker">
                <div className="pain-n">{p.n}</div>
                <PainIcon type={p.icon} />
              </div>
              <div className="pain-copy">
                <div className="pain-title">
                  <strong><em>{p.emphasis}</em></strong>
                  {' '}
                  {p.title}
                </div>
                <p className="pain-body">{p.body}</p>
              </div>
              <div className="pain-flow" aria-hidden="true">
                <span />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
