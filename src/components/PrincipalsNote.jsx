import Placeholder from "./Placeholder"

export default function PrincipalsNote() {
  return (
    <section id="principal" className="section alt">
      <div className="section-inner">
        <Placeholder label="Principal's Photo" className="section-image small" />
        <div>
          <h2>From the Principal's Desk</h2>
          <p>
            Welcome to Satyam Foundation School. We believe every child carries unique
            potential, and our purpose is to nurture it with care, discipline, and joy.
            Our dedicated teachers work closely with every student to build strong
            foundations in learning and character. We look forward to welcoming your
            child into our school family.
          </p>
          <p className="signature">— Principal, Satyam Foundation School</p>
        </div>
      </div>
    </section>
  )
}
