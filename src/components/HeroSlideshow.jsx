import { useEffect, useState } from "react"
import playground from "../assets/playground.webp"
import classroom from "../assets/classroom.webp"
import fieldTrip from "../assets/field-trip.webp"
import diwali from "../assets/diwali.webp"
import victoryGroup from "../assets/victory-group.webp"

const SLIDES = [playground, classroom, fieldTrip, diwali, victoryGroup]

export default function HeroSlideshow() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setActive((i) => (i + 1) % SLIDES.length)
    }, 3500)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="hero-slideshow">
      {SLIDES.map((src, i) => (
        <img
          key={src}
          src={src}
          alt="Life at Satyam Foundation School"
          className={`hero-image ${i === active ? "active" : ""}`}
        />
      ))}
    </div>
  )
}
