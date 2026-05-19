import { useState } from 'react';
import guiPhoto from '../assets/team/gui.png';
import johnPhoto from '../assets/team/john.png';
import lucasPhoto from '../assets/team/lucas.png';
import pabloPhoto from '../assets/team/pablo.png';
import pedroPhoto from '../assets/team/pedro.png';

const teamMembers = [
  {
    name: 'John Kevin',
    role: 'CEO',
    bio: 'Direciona a visao da FluxON e conecta estrategia de negocio com execucao.',
    accent: '#7dd3fc',
    photo: johnPhoto,
    focusPosition: 'center 24%',
    spotlightScale: 1.42,
    selectorScale: 1.26,
    spotlightShiftY: '11px',
    selectorShiftY: '6px',
    spotlightAvatarSize: '148px',
    spotlightPresenceBottom: '-2px',
    spotlightPresenceRight: '2px',
    selectorPresenceBottom: '6px',
    selectorPresenceRight: '10px',
  },
  {
    name: 'Lucas Pires',
    role: 'CTO',
    bio: 'Responsavel pela arquitetura tecnica, estrutura dos sistemas e escalabilidade.',
    accent: 'var(--blue)',
    photo: lucasPhoto,
    focusPosition: 'center 32%',
    spotlightScale: 1.42,
    selectorScale: 1.2,
    spotlightShiftY: '10px',
    selectorShiftY: '5px',
    spotlightAvatarSize: '148px',
    spotlightPresenceBottom: '-1px',
    spotlightPresenceRight: '3px',
    selectorPresenceBottom: '7px',
    selectorPresenceRight: '10px',
  },
  {
    name: 'Guilherme',
    role: 'CFO',
    bio: 'Cuida da frente financeira e sustenta decisoes com leitura precisa de numeros.',
    accent: '#60a5fa',
    photo: guiPhoto,
    focusPosition: 'center 32%',
    spotlightScale: 1.34,
    selectorScale: 1.22,
    spotlightShiftY: '10px',
    selectorShiftY: '6px',
    spotlightAvatarSize: '148px',
    spotlightCardWidth: 'calc(100% + 28px)',
    spotlightPresenceBottom: '-3px',
    spotlightPresenceRight: '1px',
    selectorPresenceBottom: '5px',
    selectorPresenceRight: '9px',
  },
  {
    name: 'Pedro',
    role: 'CMO',
    bio: 'Posiciona a marca, constroi narrativa e amplia a presenca comercial da FluxON.',
    accent: '#93c5fd',
    photo: pedroPhoto,
    focusPosition: 'center 16%',
    spotlightScale: 1.3,
    selectorScale: 1.2,
    spotlightShiftY: '11px',
    selectorShiftY: '5px',
    spotlightAvatarSize: '148px',
    spotlightPresenceBottom: '-2px',
    spotlightPresenceRight: '2px',
    selectorPresenceBottom: '6px',
    selectorPresenceRight: '10px',
  },
  {
    name: 'Pablo',
    role: 'Front End Lead',
    bio: 'Transforma complexidade em interfaces fluidas, confiaveis e com acabamento premium.',
    accent: '#22d3ee',
    photo: pabloPhoto,
    focusPosition: 'center 25%',
    spotlightScale: 1.36,
    selectorScale: 1.22,
    spotlightShiftY: '10px',
    selectorShiftY: '5px',
    spotlightAvatarSize: '148px',
    spotlightPresenceBottom: '-7px',
    spotlightPresenceRight: '-3px',
    selectorPresenceBottom: '-5px',
    selectorPresenceRight: '-2px',
  },
];

const trustPoints = [
  'Diagnostico antes da ferramenta.',
  'Processo organizado antes da implementacao de tecnologia.',
  'Consultoria especializada com preco acessivel para negocios pequenos.',
];

function RoleIcon({ role }) {
  const type = role.includes('CEO')
    ? 'lead'
    : role.includes('CTO')
      ? 'tech'
      : role.includes('CFO')
        ? 'finance'
        : role.includes('CMO')
          ? 'growth'
          : 'interface';

  const icons = {
    lead: (
      <>
        <path d="M12 3l3 6 6 .8-4.4 4.3 1 6-5.6-3-5.6 3 1-6L3 9.8 9 9z" />
      </>
    ),
    tech: (
      <>
        <rect x="4" y="5" width="16" height="14" rx="3" />
        <path d="M8 10h8M8 14h4" />
      </>
    ),
    finance: (
      <>
        <path d="M4 19V5" />
        <path d="M4 19h16" />
        <path d="M8 15l3-4 3 2 4-6" />
      </>
    ),
    growth: (
      <>
        <path d="M4 16l5-5 4 4 7-8" />
        <path d="M16 7h4v4" />
      </>
    ),
    interface: (
      <>
        <rect x="4" y="5" width="16" height="14" rx="3" />
        <path d="M4 10h16" />
        <path d="M8 14h3M14 14h2" />
      </>
    ),
  };

  return (
    <span className="team-role-icon" aria-hidden="true">
      <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        {icons[type]}
      </svg>
    </span>
  );
}

export default function Sobre() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeMember = teamMembers[activeIndex];

  return (
    <section id="sobre" className="sobre section-pad">
      <div className="container">
        <div className="sobre-inner sobre-team-layout">
          <div className="sobre-team-panel reveal-left">
            <div className="sobre-team-header">
              <div className="section-label">{'Time FluxON'}</div>
              <p className="sobre-team-intro">
                {'Uma equipe de lideranca tecnica, operacao e estrategia para transformar negocio local desorganizado em rotina clara.'}
              </p>
            </div>

            <div
              className="team-spotlight"
              style={{
                '--team-accent': activeMember.accent,
                width: activeMember.spotlightCardWidth,
              }}
            >
              <div
                className="team-spotlight-avatar-wrap"
                style={{
                  width: activeMember.spotlightAvatarSize,
                  height: activeMember.spotlightAvatarSize,
                }}
              >
                <img
                  className="team-spotlight-avatar"
                  src={activeMember.photo}
                  alt={activeMember.name}
                  style={{
                    objectPosition: activeMember.focusPosition,
                    transform: `translate3d(0, ${activeMember.spotlightShiftY ?? '0px'}, 0) scale(${activeMember.spotlightScale ?? 1})`,
                  }}
                />
              </div>

              <div className="team-spotlight-copy">
                <h3>{activeMember.name}</h3>
                <p className="team-spotlight-role">
                  <RoleIcon role={activeMember.role} />
                  {activeMember.role}
                </p>
                <p className="team-spotlight-bio">{activeMember.bio}</p>
              </div>
            </div>

            <div className="team-selector-row" role="list" aria-label="Equipe FluxON">
              {teamMembers.map((member, index) => {
                const isActive = index === activeIndex;

                return (
                  <button
                    key={member.name}
                    type="button"
                    role="listitem"
                    className={`team-selector${isActive ? ' active' : ''}`}
                    style={{ '--team-accent': member.accent }}
                    onMouseEnter={() => setActiveIndex(index)}
                    onFocus={() => setActiveIndex(index)}
                    onClick={() => setActiveIndex(index)}
                    aria-pressed={isActive}
                  >
                    <img
                      className="team-selector-avatar"
                      src={member.photo}
                      alt={member.name}
                      style={{
                        objectPosition: member.focusPosition,
                        transform: `translate3d(0, ${member.selectorShiftY ?? '0px'}, 0) scale(${member.selectorScale ?? 1})`,
                      }}
                    />
                    <span className="team-selector-name">{member.name}</span>
                    <span className="team-selector-role">
                      <RoleIcon role={member.role} />
                      {member.role}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="sobre-text reveal-right">
            <div className="section-label">{'Sobre nos'}</div>
            <h2>{'A FluxON estrutura negocios locais'} <br />{'para crescer com menos improviso.'}</h2>
            <p>{'A empresa nasceu da percepcao de que muitos negocios perdem venda, atendimento e controle porque tentam escalar com agenda manual, processo informal e cliente espalhado em canais diferentes.'}</p>
            <p>{'Por isso a FluxON trabalha com solucoes hibridas: produto SaaS quando faz sentido, consultoria assistida quando a operacao precisa de organizacao, e tecnologia so depois de entender o gargalo real.'}</p>
            <p><strong>{'O foco e estrutura operacional.'}</strong>{' Ajudamos negocios locais a organizar processos, reduzir retrabalho e ganhar clareza para escalar sem depender de improviso diario.'}</p>

            <div className="sobre-points">
              {trustPoints.map((point) => (
                <div className="sobre-point" key={point}>
                  <span className="sobre-point-dot" aria-hidden="true" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
