const items = [
  'Sistemas de gestão',
  'Organização financeira',
  'Automação de processos',
  'Clareza operacional',
  'Controle total',
  'Crescimento sustentável',
];

export default function Marquee() {
  const doubled = [...items, ...items];
  return (
    <div className="marquee-section">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <div className="marquee-item" key={i}>
            <span>→</span> {item}
          </div>
        ))}
      </div>
    </div>
  );
}
