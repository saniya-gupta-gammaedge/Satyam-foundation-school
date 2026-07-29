import Placeholder from "./Placeholder"

export default function About() {
  return (
    <section id="about" className="section">
      <div className="section-inner reverse">
        <Placeholder label="Campus Photo" className="section-image" />
        <div>
          <h2>About Us</h2>
          <p>
            Satyam Foundation School provides quality education from Nursery to Class 8,
            focused on building strong values, curiosity, and confidence in every child.
            Our experienced teachers and caring environment help students grow academically
            and personally, laying the foundation for a bright future.
          </p>
        </div>
      </div>
    </section>
  )
}
