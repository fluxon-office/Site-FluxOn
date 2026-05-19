import { useState, useCallback } from 'react';
import { trackEvent } from '../utils/analytics';
import {
  EMAIL_PATTERN,
  FIELD_LIMITS,
  cleanMultilineText,
  cleanText,
} from '../utils/briefingSecurity';

const WHATSAPP_URL = 'https://wa.me/5511912898782';

const REQUIRED_MESSAGES = {
  nome: 'Informe seu nome para continuarmos.',
  whatsapp: 'Informe um WhatsApp para contato.',
  negocio: 'Informe o nome da sua empresa.',
  email: 'Informe seu melhor email.',
  dor: 'Descreva o principal gargalo da sua operacao.',
};

export default function CTASection({ onFormSubmit }) {
  const [formState, setFormState] = useState({
    nome: '',
    whatsapp: '',
    negocio: '',
    email: '',
    dor: '',
    prazo: '',
    investimento: '',
    company_website: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({});

  const handleChange = (e) => {
    const { id, value: rawValue } = e.target;
    const key = id.replace('f-', '');
    let value = rawValue;

    if (key === 'whatsapp') {
      value = value.replace(/\D/g, '').slice(0, 11);
      if (value.length <= 10) value = value.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
      else value = value.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
    } else if (FIELD_LIMITS[key]) {
      value = value.slice(0, FIELD_LIMITS[key]);
    }

    setFormState((prev) => ({ ...prev, [key]: value }));
    if (value.trim()) {
      setFieldErrors((prev) => {
        if (!prev[key]) return prev;
        const next = { ...prev };
        delete next[key];
        return next;
      });
    }

    if (e.target.tagName === 'TEXTAREA') {
      e.target.style.height = 'auto';
      e.target.style.height = `${e.target.scrollHeight}px`;
    }
  };

  const getMissingFields = useCallback(() => Object.entries(REQUIRED_MESSAGES).reduce((errors, [key, message]) => {
    if (!String(formState[key] || '').trim()) errors[key] = message;
    return errors;
  }, {}), [formState]);

  const validateForm = useCallback(() => {
    const errors = getMissingFields();
    const digits = formState.whatsapp.replace(/\D/g, '');

    if (formState.email && !EMAIL_PATTERN.test(formState.email.trim())) {
      errors.email = 'Informe um email valido.';
    }

    if (formState.whatsapp && (digits.length < 10 || digits.length > 11)) {
      errors.whatsapp = 'Informe um WhatsApp com DDD valido.';
    }

    return errors;
  }, [formState, getMissingFields]);

  const handleSubmit = useCallback(async () => {
    const {
      nome, whatsapp, negocio, email, dor, prazo, investimento, company_website,
    } = formState;

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length) {
      setFieldErrors(validationErrors);
      return;
    }

    const safePayload = {
      nome: cleanText(nome, FIELD_LIMITS.nome),
      whatsapp: cleanText(whatsapp, FIELD_LIMITS.whatsapp),
      negocio: cleanText(negocio, FIELD_LIMITS.negocio),
      email: cleanText(email, FIELD_LIMITS.email).toLowerCase(),
      dor: cleanMultilineText(dor, FIELD_LIMITS.dor),
      prazo: cleanMultilineText(prazo, FIELD_LIMITS.prazo),
      investimento: cleanMultilineText(investimento, FIELD_LIMITS.investimento),
      company_website: cleanText(company_website, 120),
    };

    setSubmitting(true);

    try {
      trackEvent('form_submit', 'lead', 'cta_briefing');

      trackEvent('conversion', 'lead_confirmed', 'briefing_sent');
      setSuccess(true);

      if (onFormSubmit) {
        onFormSubmit(safePayload);
      }

      const message = [
        'Ola, vim pelo site da FluxON e quero solicitar um diagnostico.',
        '',
        `Nome: ${safePayload.nome}`,
        `Empresa: ${safePayload.negocio}`,
        `Email: ${safePayload.email}`,
        `WhatsApp: ${safePayload.whatsapp}`,
        `Gargalo: ${safePayload.dor}`,
        safePayload.prazo ? `Contexto: ${safePayload.prazo}` : '',
        safePayload.investimento ? `Observacao: ${safePayload.investimento}` : '',
      ].filter(Boolean).join('\n');

      window.open(`${WHATSAPP_URL}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
    } catch {
      window.location.href = `${WHATSAPP_URL}?text=${encodeURIComponent('Ola, vim pelo site da FluxON e quero solicitar um diagnostico.')}`;
    } finally {
      setSubmitting(false);
    }
  }, [formState, validateForm, onFormSubmit]);

  return (
    <section className="cta" id="cta">
      <div className="container">
        <div className="cta-inner cta-sales-layout">
          <div className="cta-left cta-sales-copy reveal-left">
            <div className="cta-eyebrow">Diagnostico inicial</div>
            <h2 className="cta-headline cta-sales-headline">
              Vamos comecar com um
              <br />
              <span>diagnostico claro?</span>
            </h2>
            <p className="cta-sub cta-sales-sub">
              Se sua operacao depende demais de mensagens, agenda manual e repasse informal, a conversa inicial ja
              serve para enxergar onde esta o gargalo principal.
            </p>

            <a
              className="cta-whatsapp cta-whatsapp-pill"
              href={`${WHATSAPP_URL}?text=Ola, vim pelo site da FluxON e quero entender melhor como funciona o diagnostico.`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('click', 'whatsapp', 'cta_section')}
            >
              <span>Entrar em contato pelo WhatsApp</span>
              <span className="cta-whatsapp-icon" aria-hidden="true">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
              </span>
            </a>
          </div>

          <div className="cta-form-shell reveal-right">
            {!success ? (
              <div className="tech-form tech-form-sales" id="formContent">
                <div className="tech-form-body tech-form-body-sales">
                  <div className="form-title form-title-sales">Preencha os dados abaixo</div>

                  <input
                    className="form-honeypot"
                    type="text"
                    id="f-company_website"
                    name="company_website"
                    tabIndex="-1"
                    autoComplete="off"
                    value={formState.company_website}
                    onChange={handleChange}
                  />

                  <div className="form-row form-row-sales">
                    <div className="form-group">
                      <label htmlFor="f-nome">Seu nome</label>
                      <input type="text" id="f-nome" placeholder="Seu nome" required maxLength={FIELD_LIMITS.nome} autoComplete="name" value={formState.nome} onChange={handleChange} aria-invalid={Boolean(fieldErrors.nome)} />
                      {fieldErrors.nome ? <span className="form-field-error">{fieldErrors.nome}</span> : null}
                    </div>
                    <div className="form-group">
                      <label htmlFor="f-negocio">Sua empresa</label>
                      <input type="text" id="f-negocio" placeholder="Sua empresa" required maxLength={FIELD_LIMITS.negocio} autoComplete="organization" value={formState.negocio} onChange={handleChange} aria-invalid={Boolean(fieldErrors.negocio)} />
                      {fieldErrors.negocio ? <span className="form-field-error">{fieldErrors.negocio}</span> : null}
                    </div>
                  </div>

                  <div className="form-row form-row-sales">
                    <div className="form-group">
                      <label htmlFor="f-email">Seu melhor email</label>
                      <input type="email" id="f-email" placeholder="Seu melhor email" required maxLength={FIELD_LIMITS.email} autoComplete="email" value={formState.email} onChange={handleChange} aria-invalid={Boolean(fieldErrors.email)} />
                      {fieldErrors.email ? <span className="form-field-error">{fieldErrors.email}</span> : null}
                    </div>
                    <div className="form-group">
                      <label htmlFor="f-whatsapp">DDD + WhatsApp</label>
                      <input type="tel" id="f-whatsapp" placeholder="DDD + WhatsApp" required maxLength={FIELD_LIMITS.whatsapp} autoComplete="tel" value={formState.whatsapp} onChange={handleChange} aria-invalid={Boolean(fieldErrors.whatsapp)} />
                      {fieldErrors.whatsapp ? <span className="form-field-error">{fieldErrors.whatsapp}</span> : null}
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="f-dor">Principal gargalo da operacao</label>
                    <textarea id="f-dor" placeholder="Onde a rotina mais trava hoje? Ex.: confirmacao, faltas, agenda, atendimento ou repasse interno." required rows="1" maxLength={FIELD_LIMITS.dor} value={formState.dor} onChange={handleChange} aria-invalid={Boolean(fieldErrors.dor)} />
                    {fieldErrors.dor ? <span className="form-field-error">{fieldErrors.dor}</span> : null}
                  </div>

                  <div className="form-group">
                    <label htmlFor="f-prazo">Contexto ou urgencia</label>
                    <textarea id="f-prazo" placeholder="Existe alguma urgencia, meta ou situacao especifica que precisamos entender?" rows="1" maxLength={FIELD_LIMITS.prazo} value={formState.prazo} onChange={handleChange} aria-invalid={Boolean(fieldErrors.prazo)} />
                    {fieldErrors.prazo ? <span className="form-field-error">{fieldErrors.prazo}</span> : null}
                  </div>

                  <div className="form-group">
                    <label htmlFor="f-investimento">Observacao opcional</label>
                    <textarea id="f-investimento" placeholder="Se quiser, adicione mais contexto sobre a operacao ou o momento do negocio." rows="1" maxLength={FIELD_LIMITS.investimento} value={formState.investimento} onChange={handleChange} aria-invalid={Boolean(fieldErrors.investimento)} />
                    {fieldErrors.investimento ? <span className="form-field-error">{fieldErrors.investimento}</span> : null}
                  </div>

                  {fieldErrors.form ? <span className="form-submit-error">{fieldErrors.form}</span> : null}

                  <button className="btn-submit btn-submit-sales" id="submitBtn" type="button" onClick={handleSubmit} disabled={submitting}>
                    <span id="btnText">{submitting ? 'Enviando...' : 'Solicitar diagnostico'}</span>
                  </button>
                </div>
              </div>
            ) : (
              <div className="form-success active form-success-sales" id="formSuccess">
                <div className="form-success-icon">✓</div>
                <h3>Diagnostico solicitado</h3>
                <p>Obrigado, <strong>{formState.nome.split(' ')[0]}</strong>. Vamos entrar em contato em breve para entender melhor sua operacao.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
