import Reveal from "./Reveal"
import directorPhoto from "../assets/director.webp"
import principalPhoto from "../assets/principal.webp"

const LEADERS = [
  {
    title: "From the Director's Desk",
    name: "Mr. Ashutosh Gupta",
    role: "Director",
    photo: directorPhoto,
    note: `Welcome to Satyam Foundation School. Since 2010, our mission has been to build a
      learning environment where every child feels safe, valued, and inspired to grow.
      We are committed to providing quality education and the resources our students
      need to succeed, today and in the future.`,
  },
  {
    title: "From the Principal's Desk",
    name: "Mrs. Sakshi Gupta",
    role: "Principal",
    photo: principalPhoto,
    note: `Every child carries unique potential, and our purpose is to nurture it with care,
      discipline, and joy. Our dedicated teachers work closely with every student to
      build strong foundations in learning and character. We look forward to welcoming
      your child into our school family.`,
  },
]

export default function PrincipalsNote() {
  return (
    <section id="principal" className="section alt">
      <h2 className="section-title">Our Leadership</h2>
      <div className="leadership">
        {LEADERS.map((l, i) => (
          <Reveal key={l.name} className="section-inner" style={{ transitionDelay: `${i * 100}ms` }}>
            <img src={l.photo} alt={l.name} className="section-image small" />
            <div>
              <h3>{l.title}</h3>
              <p>{l.note}</p>
              <p className="signature">
                — {l.name}, {l.role}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
