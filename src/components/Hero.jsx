import Placeholder from "./Placeholder"

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-text">
        <h1>Satyam Foundation School</h1>
        <p className="tagline">Foundation of the Future</p>
        <p className="hero-sub">Nurturing young minds from Nursery to Class 8</p>
        <a href="#admission" className="cta-button">Enquire About Admission</a>
      </div>
      <Placeholder label="School Photo" className="hero-image" />
    </section>
  )
}
