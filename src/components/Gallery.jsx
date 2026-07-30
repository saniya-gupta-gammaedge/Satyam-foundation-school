import Placeholder from "./Placeholder"
import Reveal from "./Reveal"

const SLOTS = ["Classroom", "Playground", "Annual Day", "Sports Day", "Art & Craft", "Library"]

export default function Gallery() {
  return (
    <section id="gallery" className="section alt">
      <h2 className="section-title">Gallery & Events</h2>
      <div className="gallery-grid">
        {SLOTS.map((label, i) => (
          <Reveal key={label} className="reveal-delay" style={{ transitionDelay: `${i * 80}ms` }}>
            <Placeholder label={label} className="gallery-item" />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
