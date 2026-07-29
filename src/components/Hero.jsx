import Placeholder from "./Placeholder"

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-shape shape-1" />
      <div className="hero-shape shape-2" />
      <div className="hero-shape shape-3" />
      <div className="hero-text">
        <span className="hero-badge">Nursery to Class 8</span>
        <h1>Satyam Foundation School</h1>
        <p className="tagline">Foundation of the Future</p>
        <p className="hero-sub">Nurturing young minds with joy, curiosity & care</p>
        <a href="#admission" className="cta-button">Enquire About Admission</a>
      </div>
      <Placeholder label="School Photo" className="hero-image blob" />
    </section>
  )
}
