import { useEffect, useState } from 'react'
import { EVENT } from '../config'

const target = new Date(EVENT.date).getTime()

function diff() {
  const ms = Math.max(0, target - Date.now())
  return {
    Days: Math.floor(ms / 86400000),
    Hours: Math.floor(ms / 3600000) % 24,
    Minutes: Math.floor(ms / 60000) % 60,
    Seconds: Math.floor(ms / 1000) % 60,
  }
}

export default function Countdown() {
  const [t, setT] = useState(diff)
  useEffect(() => {
    const id = setInterval(() => setT(diff()), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="flex items-stretch gap-2 sm:gap-3" role="timer" aria-label="Countdown to OLEC'26">
      {Object.entries(t).map(([label, value]) => (
        <div
          key={label}
          className="min-w-0 flex-1 rounded-2xl border border-white/10 bg-white/5 px-2 py-3 text-center backdrop-blur sm:min-w-20 sm:px-4"
        >
          <div className="font-display text-2xl font-bold text-white tabular-nums sm:text-3xl">
            {String(value).padStart(2, '0')}
          </div>
          <div className="mt-1 text-[10px] tracking-widest text-gold-300 uppercase sm:text-xs">{label}</div>
        </div>
      ))}
    </div>
  )
}
