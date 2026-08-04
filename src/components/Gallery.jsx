import Reveal from "./Reveal"
import classroom from "../assets/classroom.webp"
import fieldTrip from "../assets/field-trip.webp"
import flagHoisting from "../assets/flag-hoisting.webp"
import studentsGroup from "../assets/students-group.webp"
import artCraft from "../assets/art-craft.webp"
import rainyDay from "../assets/rainy-day.webp"
import diwali from "../assets/diwali.webp"
import scienceExhibition from "../assets/science-exhibition.webp"

const SLOTS = [
  { label: "Classroom", img: classroom },
  { label: "Field Trip", img: fieldTrip },
  { label: "Annual Day", img: flagHoisting },
  { label: "Sports Day", img: studentsGroup },
  { label: "Art & Craft", img: artCraft },
  { label: "Rainy Day Activity", img: rainyDay },
  { label: "Diwali Celebration", img: diwali },
  { label: "Science Exhibition", img: scienceExhibition },
]

export default function Gallery() {
  return (
    <section id="gallery" className="section alt">
      <h2 className="section-title">Gallery & Events</h2>
      <div className="gallery-grid">
        {SLOTS.map((slot, i) => (
          <Reveal key={slot.label} className="reveal-delay" style={{ transitionDelay: `${i * 80}ms` }}>
            <img src={slot.img} alt={slot.label} className="gallery-item" />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
