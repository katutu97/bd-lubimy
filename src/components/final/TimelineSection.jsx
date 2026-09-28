const EVENTS = [
  { photo: '/bd-lubimy/photos/final/me-2.jpg', date: '09.09.2023' },
  { photo: '/bd-lubimy/photos/final/me-3.jpg', date: '08.09.2024' },
  { photo: '/bd-lubimy/photos/final/me-4.jpg', date: '14.09.2025' },
  { photo: '/bd-lubimy/photos/final/me-5.jpg', date: '05.09.2026' },
]

function StraightArrow({ id }) {
  return (
    <div className="spiral-arrow-wrapper">
      <svg className="spiral-line" viewBox="0 0 100 160" width="80" height="110" style={{ overflow: 'visible' }}>
        <defs>
          <marker
            id={`arrowhead-${id}`}
            markerWidth="10"
            markerHeight="10"
            refX="2"
            refY="4"
            orient="0"
          >
            <path d="M0,0 L5,10 L10,0 Z" fill="var(--color-olive-dark)" />
          </marker>
        </defs>
        <path
          d="M50,0 C10,30 90,50 50,80 C10,110 90,120 50,150"
          fill="none"
          stroke="var(--color-olive-dark)"
          strokeWidth="3"
          markerEnd={`url(#arrowhead-${id})`}
        />
      </svg>
    </div>
  )
}

export default function TimelineSection({ sentence }) {
  return (
    <section className="timeline-section">
      <p className="timeline-sentence">{sentence}</p>
      <div className="timeline-events">
        {EVENTS.map((event, i) => (
          <div className="timeline-event" key={i}>
            <StraightArrow id={i} />
            <div className="timeline-photo-frame">
              <img src={event.photo} alt={event.date} />
            </div>
            <p className="event-date">{event.date}</p>
          </div>
        ))}
      </div>
    </section>
  )
}