import { trackEvent } from '../utils/analytics';

const WHATSAPP_URL = 'https://wa.me/5511912898782';

const nextSteps = [
  {
    label: 'Briefing recebido',
    detail: 'Sua solicitacao entrou na fila de avaliacao tecnica da FluxON.',
  },
  {
    label: 'Leitura do escopo',
    detail: 'Nossa equipe vai revisar contexto, prioridade e oportunidade de implementacao.',
  },
  {
    label: 'Retorno inicial',
    detail: 'Voce recebe contato em ate 24 horas uteis para avancarmos a conversa.',
  },
];

export default function ThankYouPage({ visible, name, onClose }) {
  if (!visible) return null;

  return (
    <div className="thankyou-page active" id="thankyou-page">
      <div className="thankyou-shell">
        <div className="thankyou-panel">
          <div className="thankyou-copy">
            <div className="ty-kicker">FluxON intake confirmed</div>
            <h2 className="ty-title">
              Briefing <span>recebido.</span>
            </h2>
            <p className="ty-sub">
              Obrigado{ name ? `, ${name}` : '' }. Seu envio foi registrado e agora segue para analise da equipe.
              Vamos retornar com os proximos passos em ate <strong>24 horas uteis</strong>.
            </p>

            <div className="ty-actions">
              <a
                className="btn-primary ty-primary"
                href={`${WHATSAPP_URL}?text=Oi%2C+acabei+de+preencher+o+formulario+do+site+da+FluxON.`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('click', 'whatsapp', 'thankyou_page')}
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                Falar no WhatsApp agora
              </a>

              <button className="ty-back ty-secondary" onClick={onClose}>
                Voltar ao site
              </button>
            </div>
          </div>

          <div className="ty-status-card">
            <div className="ty-status-head">
              <div className="ty-status-dot" aria-hidden="true" />
              <span>Processo em andamento</span>
            </div>

            <div className="ty-steps">
              {nextSteps.map((step, index) => (
                <div className="ty-step" key={step.label}>
                  <div className="ty-step-index">{`0${index + 1}`}</div>
                  <div className="ty-step-copy">
                    <h3>{step.label}</h3>
                    <p>{step.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
