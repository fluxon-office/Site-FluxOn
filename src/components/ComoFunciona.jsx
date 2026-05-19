const steps = [
  { num: '01', icon: 'diagnostic', progress: '28%', title: 'Diagnostico da operacao', desc: 'Comecamos entendendo como lead, agenda, atendimento e rotina interna funcionam hoje. O objetivo e separar sintoma de causa.' },
  { num: '02', icon: 'read', progress: '52%', title: 'Leitura dos gargalos', desc: 'Identificamos onde a equipe perde tempo, onde a informacao quebra e o que mais afeta confirmacao, comparecimento e controle.' },
  { num: '03', icon: 'priority', progress: '76%', title: 'Priorizacao do que importa', desc: 'Nem todo problema pede software imediato. Primeiro definimos o que precisa de processo, o que precisa de automacao e o que ainda nao deve ser feito.' },
  { num: '04', icon: 'build', progress: '100%', title: 'Construcao e acompanhamento', desc: 'Quando a direcao fica clara, estruturamos a solucao e acompanhamos a implementacao para a operacao nao voltar ao improviso.' },
];

function StepIcon({ type }) {
  const icons = {
    diagnostic: (
      <>
        <path d="M4 5h16v14H4z" />
        <path d="M8 9h8M8 13h4" />
        <circle cx="17" cy="16" r="2" />
      </>
    ),
    read: (
      <>
        <path d="M4 6c2.2-1.2 5-1.2 8 0v14c-3-1.2-5.8-1.2-8 0z" />
        <path d="M12 6c3-1.2 5.8-1.2 8 0v14c-2.2-1.2-5-1.2-8 0z" />
        <path d="M8 10h1.5M15 10h1.5" />
      </>
    ),
    priority: (
      <>
        <path d="M12 3l2.7 5.5 6.1.9-4.4 4.3 1 6-5.4-2.9-5.4 2.9 1-6-4.4-4.3 6.1-.9z" />
      </>
    ),
    build: (
      <>
        <path d="M14 7l3 3-7 7H7v-3z" />
        <path d="M16 5l3 3" />
        <path d="M5 19h14" />
      </>
    ),
  };

  return (
    <span className="step-icon" aria-hidden="true">
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        {icons[type]}
      </svg>
    </span>
  );
}

export default function ComoFunciona() {
  return (
    <section id="como-funciona" className="comofunciona section-pad">
      <div className="container">
        <div className="section-label reveal">Metodo FluxOn</div>
        <p className="metodo-headline reveal">
          Antes de automatizar,
          <br />
          <em>a FluxOn organiza o problema</em>
          <br />
          que precisa ser resolvido.
        </p>
        <div className="steps">
          {steps.map((s, i) => (
            <div className={`step reveal${i > 0 ? ` d${i}` : ''}`} key={s.num}>
              <div className="step-marker">
                <div className="step-num">{s.num}</div>
                <StepIcon type={s.icon} />
              </div>
              <div className="step-content">
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <div className="step-progress" aria-hidden="true">
                  <span style={{ width: s.progress }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
