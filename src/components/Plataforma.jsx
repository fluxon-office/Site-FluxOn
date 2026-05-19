const planCards = [
  {
    icon: 'checklist',
    level: '38%',
    name: 'Essencial',
    fit: 'Para pequenos negocios comecando a se organizar.',
    features: ['Funcionalidades core', 'Agenda mais controlada', 'Suporte padrao'],
  },
  {
    icon: 'growth',
    level: '68%',
    name: 'Profissional',
    fit: 'Para negocios em crescimento, com equipe pequena.',
    features: ['Mais recursos de gestao', 'Relatorios de rotina', 'Suporte agil'],
  },
  {
    icon: 'support',
    level: '100%',
    name: 'Avancado',
    fit: 'Para negocios consolidados, com multiplos profissionais.',
    features: ['Plataforma completa', 'Suporte prioritario', 'Onboarding dedicado'],
  },
];

function PlatformIcon({ type }) {
  const icons = {
    checklist: (
      <>
        <path d="M8 6h12M8 12h12M8 18h12" />
        <path d="M4 6l1 1 2-2M4 12l1 1 2-2M4 18l1 1 2-2" />
      </>
    ),
    growth: (
      <>
        <path d="M4 19V5" />
        <path d="M4 19h16" />
        <path d="M7 15l4-4 3 3 5-7" />
      </>
    ),
    support: (
      <>
        <path d="M7 11a5 5 0 0 1 10 0v2" />
        <path d="M5 13h3v5H5zM16 13h3v5h-3z" />
        <path d="M17 18c-.8 1.8-2.4 3-5 3" />
      </>
    ),
    tool: (
      <>
        <path d="M14 7l3 3-7 7H7v-3z" />
        <path d="M16 5l3 3" />
        <path d="M5 19h14" />
      </>
    ),
    chat: (
      <>
        <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
        <path d="M8 9h8M8 13h5" />
      </>
    ),
  };

  return (
    <span className="platform-icon" aria-hidden="true">
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        {icons[type]}
      </svg>
    </span>
  );
}

export default function Plataforma() {
  const smoothScroll = (href) => (e) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="plataforma" className="plataforma section-pad">
      <div className="container">
        <div className="plataforma-head reveal">
          <div className="section-label">Plataforma</div>
          <h2>FluxON - Plataforma de Agendamento</h2>
          <p>
            Para negocios locais que perdem atendimentos por agenda baguncada,
            falta de controle de clientes e operacao sem dono claro.
          </p>
        </div>

        <div className="plataforma-grid">
          <div className="plataforma-main reveal-left">
            <div className="platform-tag">Produto SaaS + consultoria assistida</div>
            <h3>Antes da ferramenta, a FluxON organiza o processo.</h3>
            <p>
              A plataforma foi pensada para clinicas de estetica, academias,
              petshops, consultorios e qualquer negocio local que depende de
              horario marcado para vender e atender bem.
            </p>
            <p>
              O trabalho comeca no diagnostico: entender onde a agenda falha,
              onde o cliente se perde e quais etapas precisam de rotina antes
              de colocar tecnologia no caminho.
            </p>

            <div className="platform-proof-grid">
              <div>
                <span>Resolve</span>
                <strong>perda de atendimentos</strong>
              </div>
              <div>
                <span>Organiza</span>
                <strong>clientes, agenda e equipe</strong>
              </div>
              <div>
                <span>Modelo</span>
                <strong>assinatura mensal MRR</strong>
              </div>
            </div>

            <a className="btn-primary platform-cta" href="#cta" onClick={(e) => smoothScroll('#cta')(e)}>
              <PlatformIcon type="chat" />
              Conversar sobre diagnostico
            </a>
          </div>

          <div className="plataforma-side reveal-right">
            <h3>Diferente de uma solucao pronta e engessada.</h3>
            <ul>
              <li>Diagnostico antes da ferramenta.</li>
              <li>Consultoria especializada durante a organizacao.</li>
              <li>Preco acessivel para negocios pequenos.</li>
              <li>Plano ajustado ao tamanho da operacao.</li>
            </ul>
          </div>
        </div>

        <div className="plans-grid">
          {planCards.map((plan, index) => (
            <article className={`plan-card reveal d${index}`} key={plan.name}>
              <div className="plan-card-top">
                <PlatformIcon type={plan.icon} />
                <div>
                  <span>Plano</span>
                  <h3>{plan.name}</h3>
                </div>
              </div>
              <p>{plan.fit}</p>
              <ul>
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <div className="plan-model">
                Pagamento mensal conforme o plano contratado.
              </div>
              <div className="plan-meter" aria-hidden="true">
                <span style={{ width: plan.level }} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
