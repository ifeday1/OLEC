// ─────────────────────────────────────────────────────────────
//  OLEC'26 site settings. Update these values and the whole page follows.
// ─────────────────────────────────────────────────────────────

export const EVENT = {
  // ISO date-time of the opening session (WAT is UTC+1).
  date: '2026-12-05T09:00:00+01:00',
  // Set to true once the date is final; until then the page shows "Date to be confirmed".
  dateConfirmed: false,
  dateLabel: 'Date to be announced',
  venue: 'Osogbo, Osun State',
  venueConfirmed: false,
}

export const CONTACT = {
  // Placeholder: replace with the official OLEC email address.
  email: 'info@olec.example',
  // Placeholder: international format, digits only, no "+" (e.g. 2348012345678).
  whatsapp: '2340000000000',
  whatsappDisplay: '+234 000 000 0000',
}

export const SOCIALS = [
  // { label: 'Instagram', href: 'https://instagram.com/...' },
  // { label: 'X (Twitter)', href: 'https://x.com/...' },
  // { label: 'LinkedIn', href: 'https://linkedin.com/company/...' },
]

export const whatsappLink = (message) =>
  `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`

export const mailLink = (subject, body = '') =>
  `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}${body ? `&body=${encodeURIComponent(body)}` : ''}`

export const LINKS = {
  register: 'https://live.provinear.com/e/osun-local-economy-conference-olec/',
  whatsapp: whatsappLink("Hello OLEC team, I'd like to find out more about #OLEC'26."),
  sponsor: mailLink("Partnership / Sponsorship enquiry: OLEC'26"),
  speak: mailLink("Speaker application: OLEC'26"),
  pitch: whatsappLink("Hello OLEC team, I'd like to apply for the OLEC'26 Innovation Pitch competition."),
}
