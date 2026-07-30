export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-col">
          <h3 className="footer-brand">Satyam Foundation School</h3>
          <p className="footer-tagline">Foundation of the Future</p>
        </div>
        <div className="footer-col">
          <h4>Contact</h4>
          <p>📍 Near Shiv Mandir, Hanuman Nagar, Rasuliya, Narmadapuram, MP</p>
          <p>📞 9893274622, 8878235548</p>
          <p>✉️ satyamfoundation2010@gmail.com</p>
        </div>
        <div className="footer-col">
          <h4>Quick Links</h4>
          <a href="#about">About</a>
          <a href="#academics">Academics</a>
          <a href="#gallery">Gallery</a>
          <a href="#admission">Admission Query</a>
        </div>
        <div className="footer-col">
          <h4>Timings</h4>
          <p>🕒 8:00 AM – 2:00 PM</p>
          <p>Monday to Saturday</p>
        </div>
      </div>
      <p className="footer-copy">© {new Date().getFullYear()} Satyam Foundation School. All rights reserved.</p>
    </footer>
  )
}
