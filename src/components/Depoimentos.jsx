import diegoPhoto from '../assets/testimonials/diego.png';
import fernandoPhoto from '../assets/testimonials/fernando.png';
import lucianaPhoto from '../assets/testimonials/luciana.jpg';
import rafaelPhoto from '../assets/testimonials/rafael.png';

const testimonials = [
  {
    name: 'Fernando Oliveira',
    role: 'Diretor comercial · organizacao operacional',
    text: 'A FluxON ajudou a tirar a operacao do improviso. O que antes ficava espalhado entre planilha, retrabalho e atraso passou a ter fluxo mais claro para a equipe.',
    accent: 'var(--blue-light)',
    avatar: fernandoPhoto,
  },
  {
    name: 'Rafael Martins',
    role: 'Fundador · aquisicao de clientes',
    text: 'O trabalho trouxe mais clareza na forma de apresentar a empresa e organizar a entrada de contatos. O ganho maior foi consistencia na comunicacao e no proximo passo comercial.',
    accent: '#60a5fa',
    avatar: rafaelPhoto,
  },
  {
    name: 'Luciana Silva',
    role: 'Operacoes · melhoria de processos',
    text: 'O maior impacto foi reduzir o peso manual da rotina. Com os processos mais organizados, a equipe passou a errar menos e a ganhar mais visao do que precisava ser feito.',
    accent: '#38bdf8',
    avatar: lucianaPhoto,
  },
  {
    name: 'Diego Nascimento',
    role: 'Socio · site institucional',
    text: 'O site novo nos ajudou a comunicar melhor o que a empresa faz. Antes a apresentacao era confusa; agora a percepcao de clareza e posicionamento melhorou bastante.',
    accent: 'var(--blue)',
    avatar: diegoPhoto,
  },
];

export default function Depoimentos() {
  return (
    <section id="depoimentos" className="depoimentos section-pad">
      <div className="container">
        <div className="section-label reveal">Provas e sinais de confianca</div>
        <h2 className="dep-heading reveal">
          Alguns projetos ja realizados
          <br />
          mostram a direcao: <em>mais clareza e menos improviso.</em>
        </h2>

        <div className="dep-wall">
          {testimonials.map((item, index) => (
            <article
              key={item.name}
              className={`dep-card reveal${index > 0 ? ` d${Math.min(index, 4)}` : ''}`}
              style={{ '--dep-accent': item.accent }}
            >
              <span className="dep-bar" aria-hidden="true" />
              <div className="dep-card-inner">
                <p className="dep-text">“{item.text}”</p>

                <div className="dep-author">
                  <img className="dep-avatar" src={item.avatar} alt={item.name} />
                  <div>
                    <div className="dep-name">{item.name}</div>
                    <div className="dep-role">
                      <span aria-hidden="true">
                        <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                          <path d="M4 7h16" />
                          <path d="M7 7V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" />
                          <rect x="4" y="7" width="16" height="13" rx="2" />
                        </svg>
                      </span>
                      {item.role}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
