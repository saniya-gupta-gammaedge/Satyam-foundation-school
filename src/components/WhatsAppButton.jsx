const MESSAGE = "Hi 👋 I'm interested in admission at Satyam Foundation School 🎒 Could you share more details?"

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/919893274622?text=${encodeURIComponent(MESSAGE)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
      aria-label="Chat with us on WhatsApp"
    >
      <svg viewBox="0 0 32 32" width="28" height="28" fill="#fff" aria-hidden="true">
        <path d="M16.004 3C9.376 3 4 8.373 4 15c0 2.31.64 4.47 1.75 6.31L4 29l7.86-1.7A11.94 11.94 0 0 0 16.004 27C22.63 27 28 21.63 28 15S22.63 3 16.004 3Zm6.98 17.02c-.29.82-1.44 1.51-2.35 1.7-.62.13-1.43.24-4.16-.89-3.5-1.45-5.76-4.98-5.94-5.21-.17-.24-1.42-1.89-1.42-3.6s.88-2.55 1.19-2.9c.3-.34.66-.43.88-.43.22 0 .44 0 .63.01.2.01.47-.08.74.56.29.7.98 2.4 1.06 2.58.09.17.15.38.03.61-.11.24-.17.38-.34.58-.17.2-.36.44-.51.6-.17.17-.35.36-.15.7.2.34.87 1.44 1.87 2.33 1.29 1.15 2.37 1.51 2.71 1.68.34.17.54.14.74-.09.2-.24.85-.99 1.08-1.33.23-.34.46-.28.77-.17.31.11 1.98.93 2.32 1.1.34.17.57.26.65.4.09.14.09.81-.2 1.63Z" />
      </svg>
      <span className="whatsapp-tooltip">Chat on WhatsApp</span>
    </a>
  )
}
