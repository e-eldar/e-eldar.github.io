const orbitItems = ['React', 'Vite', 'Tailwind', 'Node', 'Express', 'SQLite', 'Auth', 'APIs'];

export default function OrbitalTech() {
  return (
    <div className="orbital-tech" aria-hidden="true">
      <div className="orbital-core">EL</div>
      {orbitItems.map((item, index) => (
        <span key={item} style={{ '--i': index, '--total': orbitItems.length }}>{item}</span>
      ))}
    </div>
  );
}
