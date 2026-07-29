export default function Placeholder({ label, className = "" }) {
  return <div className={`placeholder ${className}`}>{label}</div>
}
