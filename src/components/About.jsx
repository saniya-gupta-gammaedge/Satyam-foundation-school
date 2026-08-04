import Reveal from "./Reveal"
import victoryGroup from "../assets/victory-group.webp"

export default function About() {
  return (
    <section id="about" className="section">
      <Reveal className="section-inner reverse">
        <img src={victoryGroup} alt="Students of Satyam Foundation School" className="section-image about-image" />
        <div>
          <h2>About Us</h2>
          <p>
            Established in 2010, Satyam Foundation School provides quality education from
            Nursery to Class 8 through a play-way method of teaching, focused on building
            strong values, curiosity, and confidence in every child. Our experienced teachers
            and caring environment help students grow academically and personally, laying the
            foundation for a bright future.
          </p>
          <p className="about-timing">🕒 School Timings: 8:00 AM – 2:00 PM</p>
        </div>
      </Reveal>
    </section>
  )
}
