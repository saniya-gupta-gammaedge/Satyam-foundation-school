const LINKS = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Principal's Desk", "#principal"],
  ["Academics", "#academics"],
  ["Gallery", "#gallery"],
  ["Parents Speak", "#testimonials"],
  ["Admission Query", "#admission"],
]

export default function Navbar() {
  return (
    <header className="navbar">
      <a href="#home" className="navbar-brand">Satyam Foundation School</a>
      <nav className="navbar-links">
        {LINKS.map(([label, href]) => (
          <a key={href} href={href}>{label}</a>
        ))}
      </nav>
    </header>
  )
}
