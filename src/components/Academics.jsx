const PROGRAMS = [
  { icon: "🧸", title: "Pre-Primary", desc: "Nursery, LKG & UKG — play-based learning that builds curiosity and basic skills." },
  { icon: "📚", title: "Primary (Class 1–5)", desc: "Strong foundations in language, math, science, and creativity." },
  { icon: "🎒", title: "Middle (Class 6–8)", desc: "Deeper subject learning with focus on critical thinking and life skills." },
]

export default function Academics() {
  return (
    <section id="academics" className="section">
      <h2 className="section-title">Our Programs</h2>
      <div className="cards">
        {PROGRAMS.map((p) => (
          <div key={p.title} className="card">
            <div className="card-icon">{p.icon}</div>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
