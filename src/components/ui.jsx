import { useEffect, useRef } from 'react'

export function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...props }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible')
          io.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return (
    <Tag ref={ref} className={`reveal ${className}`} style={{ '--delay': `${delay}ms` }} {...props}>
      {children}
    </Tag>
  )
}

export function Eyebrow({ children, dark = false }) {
  return (
    <span
      className={`inline-flex items-center gap-2 font-display text-xs font-semibold tracking-[0.2em] uppercase ${
        dark ? 'text-gold-400' : 'text-gold-600'
      }`}
    >
      <span className={`h-px w-8 ${dark ? 'bg-gold-400' : 'bg-gold-500'}`} />
      {children}
    </span>
  )
}

export function SectionHeading({ eyebrow, title, intro, dark = false, center = false }) {
  return (
    <Reveal className={`max-w-3xl ${center ? 'mx-auto text-center' : ''}`}>
      {eyebrow && <Eyebrow dark={dark}>{eyebrow}</Eyebrow>}
      <h2
        className={`mt-4 font-display text-3xl leading-tight font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl ${
          dark ? 'text-white' : 'text-forest-800'
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p className={`mt-5 text-lg leading-relaxed text-pretty ${dark ? 'text-white/70' : 'text-ink/70'}`}>{intro}</p>
      )}
    </Reveal>
  )
}

const btnBase =
  'group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 font-display text-sm font-semibold transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500'

const btnVariants = {
  gold: 'bg-gold-500 text-forest-900 hover:bg-gold-400 hover:shadow-[0_10px_30px_-10px] hover:shadow-gold-500/60',
  ghost: 'border border-white/25 text-white hover:border-gold-400 hover:text-gold-300',
  dark: 'bg-forest-800 text-white hover:bg-forest-700',
  outline: 'border border-forest-800/20 text-forest-800 hover:border-forest-800 hover:bg-forest-800 hover:text-white',
}

export function Button({ href, variant = 'gold', className = '', children, external = true, ...props }) {
  const ext = external && /^(https?:|mailto:)/.test(href)
  return (
    <a
      href={href}
      className={`${btnBase} ${btnVariants[variant]} ${className}`}
      {...(ext && href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      {...props}
    >
      {children}
    </a>
  )
}

export function WhatsAppIcon({ className = 'size-4' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.27.49 1.7.63.72.23 1.37.2 1.88.12.57-.09 1.75-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35M12.05 21.5h-.01a9.4 9.4 0 0 1-4.8-1.32l-.34-.2-3.57.94.95-3.48-.22-.36a9.4 9.4 0 0 1-1.44-5.02c0-5.2 4.23-9.43 9.44-9.43 2.52 0 4.89.98 6.67 2.77a9.37 9.37 0 0 1 2.76 6.67c0 5.2-4.24 9.43-9.44 9.43m8.03-17.46A11.27 11.27 0 0 0 12.05.7C5.8.7.7 5.8.7 12.06c0 2 .52 3.95 1.52 5.67L.6 23.6l6.02-1.58a11.33 11.33 0 0 0 5.42 1.38h.01c6.26 0 11.35-5.1 11.36-11.35 0-3.04-1.18-5.89-3.32-8.03" />
    </svg>
  )
}
