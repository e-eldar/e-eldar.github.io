import { Link } from 'react-router-dom';

export default function MagneticButton({ children, className = '', href, to, type = 'button', onClick, disabled }) {
  const Tag = to ? Link : href ? 'a' : 'button';

  return (
    <Tag
      to={to || undefined}
      href={href || undefined}
      type={!href && !to ? type : undefined}
      onClick={onClick}
      disabled={disabled}
      className={`magnetic-button ${className}`}
    >
      {children}
    </Tag>
  );
}
