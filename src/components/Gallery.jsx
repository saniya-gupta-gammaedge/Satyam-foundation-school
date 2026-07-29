import Placeholder from "./Placeholder"

const SLOTS = ["Classroom", "Playground", "Annual Day", "Sports Day", "Art & Craft", "Library"]

export default function Gallery() {
  return (
    <section id="gallery" className="section alt">
      <h2 className="section-title">Gallery & Events</h2>
      <div className="gallery-grid">
        {SLOTS.map((label) => (
          <Placeholder key={label} label={label} className="gallery-item" />
        ))}
      </div>
    </section>
  )
}
