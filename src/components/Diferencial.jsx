const badItems = [
  'Entregam longos relatórios em PDF teóricos',
  'Delegam a execução complexa para a sua equipe',
  'Mapeiam o problema, mas não tocam no código',
  'A empresa continua gerida via dezenas de planilhas',
];

const goodItems = [
  'Modelamos todo o ecossistema arquitetural da sua empresa em código',
  'Nós abrimos os terminais, programamos o sistema e conectamos as APIs',
  'Automação de scripts rodando no background do seu servidor 24/7',
  'Sua operação unificada sob painéis modulares e rastreáveis',
];

const CrossIcon = () => (
  <svg className="comp-icon comp-bad-icon" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
);

const CheckIcon = () => (
  <svg className="comp-icon comp-good-icon" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
);

export default function Diferencial() {
  return (
    <section id="diferencial" className="diferencial section-pad">
      <div className="container">
        <div className="dif-row">
          <h2 className="dif-headline reveal">
            <span>Nós não sugerimos.</span><br /><span>Nós</span> <span className="accent">codamos.</span>
          </h2>
          <p className="dif-sub reveal d1">Longe das consultorias de palestras que entregam PDF. Nós abrimos os editores, desenvolvemos o software, conectamos as APIs e subimos para produção na sua empresa.</p>
        </div>

        <div className="compare-grid reveal">
          <div className="compare-col compare-bad">
            <h3 style={{ color: 'var(--muted)' }}>Consultorias Tradicionais</h3>
            {badItems.map((item, i) => (
              <div className="comp-item" key={i}>
                <CrossIcon />
                <span className="comp-bad-text">{item}</span>
              </div>
            ))}
          </div>

          <div className="compare-col compare-good">
            <h3 style={{ color: '#fff' }}>FluxON <span style={{ color: 'var(--blue-light)' }}>Engineering</span></h3>
            {goodItems.map((item, i) => (
              <div className="comp-item" key={i}>
                <CheckIcon />
                <span className="comp-text">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
