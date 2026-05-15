export default function GlareHover({ children, className = '' }) {
  return <div className={`glare-hover safe-hover ${className}`}>{children}</div>;
}
