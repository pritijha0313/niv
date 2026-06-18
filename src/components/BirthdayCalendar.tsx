import { useMemo, useState } from "react"
import { birthdaySurprise } from "../data/story"
import LoveLetterCard from "./LoveLetterCard"

const WEEKDAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]

export default function BirthdayCalendar() {
  const [open, setOpen] = useState(false)

  const { year, day } = birthdaySurprise
  const monthIndex = 8 // September

  const cells = useMemo(() => {
    const firstDay = new Date(year, monthIndex, 1).getDay()
    const daysInMonth = new Date(year, monthIndex + 1, 0).getDate()
    const blanks = Array.from({ length: firstDay }, () => null as number | null)
    const days = Array.from({ length: daysInMonth }, (_, i) => i + 1)
    return [...blanks, ...days]
  }, [year, monthIndex])

  return (
    <>
      <section className="birthday-calendar-section animate-pop-in">
        <p className="birthday-calendar-hint">{birthdaySurprise.hint}</p>

        <div className="birthday-calendar-card">
          <div className="birthday-calendar-header">
            <span>📅</span>
            <div>
              <p className="birthday-calendar-month">{birthdaySurprise.month}</p>
              <p className="birthday-calendar-year">{year}</p>
            </div>
            <span>🎂</span>
          </div>

          <div className="birthday-calendar-weekdays">
            {WEEKDAYS.map((d) => (
              <span key={d}>{d}</span>
            ))}
          </div>

          <div className="birthday-calendar-grid">
            {cells.map((d, i) =>
              d === null ? (
                <span key={`blank-${i}`} className="birthday-cal-day birthday-cal-empty" />
              ) : d === day ? (
                <button
                  key={d}
                  type="button"
                  className="birthday-cal-day birthday-cal-special animate-heartbeat"
                  onClick={() => setOpen(true)}
                  aria-label={`${d} September — letter kholo`}
                >
                  <span className="birthday-cal-num">{d}</span>
                  <span className="birthday-cal-heart">💖</span>
                </button>
              ) : (
                <span key={d} className="birthday-cal-day">
                  {d}
                </span>
              )
            )}
          </div>

          <p className="birthday-calendar-tap">👆 21 Sept ko dabao — us din ka letter!</p>
        </div>
      </section>

      {open && (
        <div
          className="birthday-letter-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Birthday letter"
          onClick={() => setOpen(false)}
        >
          <div
            className="birthday-letter-modal animate-pop-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="birthday-letter-close"
              onClick={() => setOpen(false)}
              aria-label="Band karo"
            >
              ✕
            </button>

            <LoveLetterCard variant="birthday">
              <p className="birthday-letter-date">21 September 🎂</p>
              <h2 className="birthday-letter-title">{birthdaySurprise.title}</h2>
              <p className="birthday-letter-greeting">{birthdaySurprise.greeting}</p>
              <p className="birthday-letter-text">{birthdaySurprise.message}</p>
              <p className="birthday-letter-sign">{birthdaySurprise.signOff}</p>
            </LoveLetterCard>
          </div>
        </div>
      )}
    </>
  )
}
