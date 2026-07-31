import Reveal from "./Reveal"
import classroom from "../assets/classroom.jpg"
import fieldTrip from "../assets/field-trip.jpg"
import flagHoisting from "../assets/flag-hoisting.jpg"
import studentsGroup from "../assets/students-group.jpg"
import artCraft from "../assets/art-craft.jpg"
import rainyDay from "../assets/rainy-day.jpg"
import diwali from "../assets/diwali.jpg"
import scienceExhibition from "../assets/science-exhibition.jpg"

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
