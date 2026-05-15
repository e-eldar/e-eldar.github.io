export default function ThreadsBackground({ className = '' }) {
  return (
    <div className={`threads-bg ${className}`} aria-hidden="true">
      {Array.from({ length: 18 }).map((_, index) => (
        <span key={index} style={{ '--i': index }} />
      ))}
    </div>
  );
}
