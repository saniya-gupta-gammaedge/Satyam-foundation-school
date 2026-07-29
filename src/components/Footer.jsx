export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3 className="footer-brand">Satyam Foundation School</h3>
        <p className="footer-tagline">Foundation of the Future</p>
        <div className="footer-details">
          <p>📍 Near Shiv Mandir, Hanuman Nagar, Rasuliya, Narmadapuram, MP</p>
          <p>📞 9893274622, 8878235548</p>
          <p>✉️ satyamfoundation2010@gmail.com</p>
          <p>🕒 8:00 AM – 2:00 PM, Monday to Saturday</p>
        </div>
      </div>
      <p className="footer-copy">© {new Date().getFullYear()} Satyam Foundation School. All rights reserved.</p>
    </footer>
  )
}
