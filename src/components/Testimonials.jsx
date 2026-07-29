const QUOTES = [
  { quote: "My child loves going to school every day. The teachers are so caring.", name: "Parent of Class 2 student" },
  { quote: "Great balance of studies and extracurriculars. Highly recommend.", name: "Parent of Class 5 student" },
  { quote: "The school truly feels like a foundation for the future.", name: "Parent of Nursery student" },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="section">
      <h2 className="section-title">Parents Speak</h2>
      <div className="cards">
        {QUOTES.map((t) => (
          <div key={t.name} className="card quote-card">
            <p className="quote-text">"{t.quote}"</p>
            <p className="quote-name">{t.name}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
