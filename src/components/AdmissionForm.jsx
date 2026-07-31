import { useState } from "react"

const EMPTY = { name: "", email: "", phone: "", message: "" }
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function AdmissionForm() {
  const [form, setForm] = useState(EMPTY)
  const [status, setStatus] = useState(null)
  const sending = status?.ok === null

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name.trim() || !form.email.trim() || !form.phone.trim() || !form.message.trim()) {
      setStatus({ ok: false, text: "Please fill in all fields." })
      return
    }
    if (!EMAIL_RE.test(form.email.trim())) {
      setStatus({ ok: false, text: "Please enter a valid email address." })
      return
    }
    setStatus({ ok: null, text: "Sending..." })
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (res.ok && data.ok) {
        setStatus({ ok: true, text: "Thank you! We will get back to you soon." })
        setForm(EMPTY)
      } else {
        setStatus({ ok: false, text: data.error || "Something went wrong. Please try again." })
      }
    } catch {
      setStatus({ ok: false, text: "Network error. Please try again." })
    }
  }

  return (
    <section id="admission" className="section alt">
      <h2 className="section-title">Admission Query</h2>
      <form className="admission-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Your Phone Number"
          value={form.phone}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Your Query"
          rows={4}
          value={form.message}
          onChange={handleChange}
        />
        <button type="submit" className="cta-button" disabled={sending}>
          {sending ? "Sending..." : "Submit Query"}
        </button>
        {status && (
          <p className={status.ok === false ? "form-status error" : "form-status"}>
            {status.text}
          </p>
        )}
      </form>
    </section>
  )
}
