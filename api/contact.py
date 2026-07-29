import json
import os
import re
import resend

from http.server import BaseHTTPRequestHandler

MAX_LEN = 1000
EMAIL_RE = re.compile(r"^[^\s@]+@[^\s@]+\.[^\s@]+$")


class handler(BaseHTTPRequestHandler):
    def do_POST(self):
        length = int(self.headers.get("Content-Length", 0))
        try:
            data = json.loads(self.rfile.read(length))
        except json.JSONDecodeError:
            return self._respond(400, {"ok": False, "error": "Invalid JSON"})

        name = str(data.get("name", "")).strip()
        email = str(data.get("email", "")).strip()
        phone = str(data.get("phone", "")).strip()
        message = str(data.get("message", "")).strip()

        if not name or not email or not phone or not message:
            return self._respond(400, {"ok": False, "error": "Name, email, phone, and message are required"})
        if not EMAIL_RE.match(email):
            return self._respond(400, {"ok": False, "error": "Invalid email address"})
        if len(name) > MAX_LEN or len(email) > MAX_LEN or len(phone) > MAX_LEN or len(message) > MAX_LEN:
            return self._respond(400, {"ok": False, "error": "Input too long"})

        resend.api_key = os.environ["RESEND_API_KEY"]
        try:
            resend.Emails.send({
                "from": "Satyam Foundation School Website <onboarding@resend.dev>",
                "to": [os.environ["TO_EMAIL"]],
                "reply_to": email,
                "subject": f"New Admission Query from {name}",
                "text": f"Name: {name}\nEmail: {email}\nPhone: {phone}\n\nMessage:\n{message}",
            })
        except Exception:
            return self._respond(502, {"ok": False, "error": "Failed to send email"})

        self._respond(200, {"ok": True})

    def _respond(self, status, body):
        self.send_response(status)
        self.send_header("Content-Type", "application/json")
        self.end_headers()
        self.wfile.write(json.dumps(body).encode())
