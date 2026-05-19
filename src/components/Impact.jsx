const data = [
  { num: '01', icon: 'calendar', level: '62%', title: 'Agenda menos previsivel', desc: 'Sem processo claro, confirmacoes e remarcacoes consomem a equipe e o comparecimento oscila.' },
  { num: '02', icon: 'clock', level: '72%', title: 'Atendimento mais lento', desc: 'Cada contato exige recuperar historico, repetir perguntas e preencher lacunas manualmente.' },
  { num: '03', icon: 'blind', level: '84%', title: 'Gestao no escuro', desc: 'A lideranca sente o problema, mas nao consegue ver onde a rotina esta perdendo tempo e receita.' },
  { num: '04', icon: 'loop', level: '92%', title: 'Crescimento com retrabalho', desc: 'Quando a demanda aumenta, o negocio nao ganha fluidez. Ganha sobrecarga.' },
];

function ImpactIcon({ type }) {
  const icons = {
    calendar: (
      <>
        <rect x="4" y="5" width="16" height="15" rx="3" />
        <path d="M8 3v4M16 3v4M4 10h16" />
        <path d="M8 14h3M14 14h2M8 17h2" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="8" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    blind: (
      <>
        <path d="M3 12s3.5-6 9-6 9 6 9 6-3.5 6-9 6-9-6-9-6z" />
        <path d="M9.5 9.5l5 5M14.5 9.5l-5 5" />
      </>
    ),
    loop: (
      <>
        <path d="M17 7h-6a5 5 0 0 0-5 5" />
        <path d="M14 4l3 3-3 3" />
        <path d="M7 17h6a5 5 0 0 0 5-5" />
        <path d="M10 20l-3-3 3-3" />
      </>
    ),
  };

  return (
    <span className="impact-icon" aria-hidden="true">
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        {icons[type]}
      </svg>
    </span>
  );
}

export default function Impact() {
  return (
    <section id="impact" className="impact section-pad">
      <div className="container">
        <div className="impact-head">
          <div className="section-label reveal">Consequencias da desorganizacao</div>
          <h2 className="impact-heading reveal">
            Desorganizacao custa caro.
            <br />
            <em>E o preco vai alem do financeiro.</em>
          </h2>
        </div>
        <div className="impact-inner">
          {data.map((item, i) => (
            <div className={`impact-cell reveal${i > 0 ? ` d${i}` : ''}`} key={i}>
              <div className="impact-card-top">
                <div className="impact-num">{item.num}</div>
                <ImpactIcon type={item.icon} />
              </div>
              <h3 className="impact-title">{item.title}</h3>
              <p className="impact-desc">{item.desc}</p>
              <div className="impact-meter" aria-hidden="true">
                <span style={{ width: item.level }} />
              </div>
              <div className="impact-arrow" aria-hidden="true">-&gt;</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
