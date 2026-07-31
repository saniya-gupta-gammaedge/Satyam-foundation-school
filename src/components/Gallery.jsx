import Placeholder from "./Placeholder"
import Reveal from "./Reveal"
import playground from "../assets/playground.png"
import classroom from "../assets/classroom.jpg"
import flagHoisting from "../assets/flag-hoisting.jpg"
import blocksActivity from "../assets/blocks-activity.jpg"
import victoryGroup from "../assets/victory-group.jpg"

const SLOTS = [
  { label: "Classroom", img: classroom },
  { label: "Playground", img: playground },
  { label: "Annual Day", img: flagHoisting },
  { label: "Sports Day", img: victoryGroup },
  { label: "Art & Craft", img: blocksActivity },
  { label: "Library" },
]

export default function Gallery() {
  return (
    <section id="gallery" className="section alt">
      <h2 className="section-title">Gallery & Events</h2>
      <div className="gallery-grid">
        {SLOTS.map((slot, i) => (
          <Reveal key={slot.label} className="reveal-delay" style={{ transitionDelay: `${i * 80}ms` }}>
            {slot.img ? (
              <img src={slot.img} alt={slot.label} className="gallery-item" />
            ) : (
              <Placeholder label={slot.label} className="gallery-item" />
            )}
          </Reveal>
        ))}
      </div>
    </section>
  )
}
