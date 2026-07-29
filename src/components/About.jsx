import Placeholder from "./Placeholder"

export default function About() {
  return (
    <section id="about" className="section">
      <div className="section-inner reverse">
        <Placeholder label="Campus Photo" className="section-image" />
        <div>
          <h2>About Us</h2>
          <p>
            Established in 2010, Satyam Foundation School provides quality, State Board
            affiliated education from Nursery to Class 8, focused on building strong values,
            curiosity, and confidence in every child. Our experienced teachers and caring
            environment help students grow academically and personally, laying the
            foundation for a bright future.
          </p>
          <p className="about-timing">🕒 School Timings: 8:00 AM – 2:00 PM</p>
        </div>
      </div>
    </section>
  )
}
