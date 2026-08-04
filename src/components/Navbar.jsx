import { useEffect, useState } from "react"

const LINKS = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Leadership", "#principal"],
  ["Academics", "#academics"],
  ["Gallery", "#gallery"],
  ["Parents Speak", "#testimonials"],
  ["Admission Query", "#admission"],
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <a href="#home" className="navbar-brand">
        <span className="navbar-logo">SFS</span>
        Satyam Foundation School
      </a>
      <button
        className={`navbar-toggle ${open ? "open" : ""}`}
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
        aria-expanded={open}
      >
        <span />
        <span />
        <span />
      </button>
      <nav className={`navbar-links ${open ? "open" : ""}`}>
        {LINKS.map(([label, href]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
        ))}
      </nav>
    </header>
  )
}
