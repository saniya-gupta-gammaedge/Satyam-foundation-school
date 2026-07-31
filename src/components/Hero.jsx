import Reveal from "./Reveal"
import playground from "../assets/playground.png"

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-inner">
        <div className="hero-text">
          <span className="hero-badge">🎒 Nursery to Class 8</span>
          <h1>Satyam Foundation School</h1>
          <p className="tagline">Foundation of the Future</p>
          <p className="hero-sub">Nurturing young minds with joy, curiosity & care</p>
          <a href="#admission" className="cta-button">Enquire About Admission</a>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-icon">🏆</span>
              <span className="stat-num">16+</span>
              <span className="stat-label">Years of Excellence</span>
            </div>
            <div className="stat">
              <span className="stat-icon">🎓</span>
              <span className="stat-num">Nursery–8th</span>
              <span className="stat-label">Classes Offered</span>
            </div>
          </div>
        </div>
        <Reveal className="hero-image-wrap">
          <div className="hero-wave" />
          <img src={playground} alt="Students playing at Satyam Foundation School" className="hero-image" />
          <span className="admission-sticker">Admissions Open</span>
        </Reveal>
      </div>
    </section>
  )
}
