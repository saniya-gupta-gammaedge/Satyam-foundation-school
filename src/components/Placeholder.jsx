const ICONS = {
  "Campus Photo": "🏫",
  "Principal's Photo": "🧑‍🏫",
  "Classroom": "📖",
  "Playground": "🛝",
  "Annual Day": "🎉",
  "Sports Day": "🏃",
  "Art & Craft": "🎨",
  "Library": "📚",
}

export default function Placeholder({ label, className = "" }) {
  return (
    <div className={`placeholder ${className}`}>
      <span className="placeholder-icon">{ICONS[label] || "📷"}</span>
      <span>{label}</span>
    </div>
  )
}
