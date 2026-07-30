import Placeholder from "./Placeholder"
import Reveal from "./Reveal"

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-shape shape-1" />
      <div className="hero-shape shape-2" />
      <div className="hero-shape shape-3" />
      <span className="hero-float star-1">✦</span>
      <span className="hero-float star-2">✦</span>
      <span className="hero-float cloud-1">☁️</span>
      <div className="hero-text">
        <span className="hero-badge">Nursery to Class 8 · State Board</span>
        <h1>Satyam Foundation School</h1>
        <p className="tagline">Foundation of the Future</p>
        <p className="hero-sub">Nurturing young minds with joy, curiosity & care</p>
        <a href="#admission" className="cta-button">Enquire About Admission</a>
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-num">16+</span>
            <span className="stat-label">Years of Excellence</span>
          </div>
          <div className="stat">
            <span className="stat-num">Nur–8</span>
            <span className="stat-label">Classes Offered</span>
          </div>
          <div className="stat">
            <span className="stat-num">3</span>
            <span className="stat-label">Co-curricular Activities</span>
          </div>
        </div>
      </div>
      <Reveal className="hero-image-wrap">
        <span className="admission-sticker">Admissions Open</span>
        <Placeholder label="School Photo" className="hero-image blob" />
      </Reveal>
    </section>
  )
}
