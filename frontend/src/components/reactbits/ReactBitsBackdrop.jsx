export default function ReactBitsBackdrop() {
  return (
    <div className="reactbits-backdrop" aria-hidden="true">
      <div className="rb-gradient rb-gradient-one" />
      <div className="rb-gradient rb-gradient-two" />
      <div className="rb-gradient rb-gradient-three" />
      <div className="rb-grid" />
      <div className="rb-stars rb-stars-one" />
      <div className="rb-stars rb-stars-two" />
      <div className="rb-beams">
        {Array.from({ length: 12 }).map((_, index) => (
          <span key={index} style={{ '--i': index }} />
        ))}
      </div>
      <div className="rb-vignette" />
    </div>
  );
}
