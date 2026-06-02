import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/offerings')({
  component: Offerings,
})

const offerings = [
  {
    number: '01',
    title: 'Santoor Classical Concert',
    subtitle: 'Hindustani Classical Recital',
    duration: '45 minutes – 1 hour 50 minutes',
    description: 'A formal recital in the Hindustani classical tradition — featuring ragas performed across the arc of time-of-day and season, with the accompaniment of Tabla, an Indian percussion instrument.',
    details: [
      'Ragas chosen by time of day and season',
      'Accompanied by Tabla (Indian percussion)',
      'Suitable for cultural venues and arts festivals',
      'Private concerts and institutional events welcome',
    ],
    suitable: 'Cultural venues · Arts festivals · Private concerts',
  },
  {
    number: '02',
    title: 'Live Sound Meditation',
    subtitle: 'Santoor for Yoga, Meditation & Breathwork',
    duration: 'Flexible duration by arrangement',
    description: 'An immersive session using the live Santoor to accompany meditation, yoga, or breathwork. The instrument\'s sustained, shimmering tones create a sonic environment that invites deep rest and inner stillness.',
    details: [
      'Live, responsive performance — not pre-recorded',
      'Shaped by the energy and pace of the session',
      'Supports breath, body awareness, and deep rest',
      'Gentle transition into and out of silence',
    ],
    suitable: 'Yoga centres · Wellness studios · Retreat spaces',
  },
  {
    number: '03',
    title: 'Bespoke Collaborations',
    subtitle: 'Creative & Cultural Partnerships',
    duration: 'By arrangement',
    description: 'Open to creative partnerships with choreographers, visual artists, filmmakers, and cultural organisations. Sreerag\'s approach is flexible and responsive — each collaboration is shaped by the context.',
    details: [
      'Choreography & contemporary dance',
      'Film scores and sound design',
      'Visual art installations',
      'Cultural and educational programmes',
    ],
    suitable: 'Artists · Filmmakers · Cultural organisations',
  },
]

function Offerings() {
  return (
    <div style={{ minHeight: '100vh', padding: 'clamp(3rem, 6vw, 5rem) 1.5rem' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>

        {/* Header */}
        <div className="section-fade" style={{ textAlign: 'center', marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
          <p style={{ fontSize: '0.72rem', letterSpacing: '0.35em', color: '#c9a96e', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            Concerts · Meditation · Collaboration
          </p>
          <h1 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
            fontWeight: 300,
            color: '#e8e0d0',
            margin: '0 0 0.5rem',
            letterSpacing: '0.04em',
          }}>
            Offerings
          </h1>
          <div className="gold-divider" />
          <p style={{ color: '#7a7060', fontSize: '0.95rem', maxWidth: '500px', margin: '0 auto', lineHeight: 1.8 }}>
            Each offering is shaped by intention and space. Enquiries are welcome for events in London and beyond.
          </p>
        </div>

        {/* Offering cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
          {offerings.map(offering => (
            <div key={offering.number} style={{
              border: '1px solid rgba(201,169,110,0.2)',
              padding: 'clamp(1.5rem, 3vw, 2.5rem)',
              display: 'grid',
              gridTemplateColumns: 'auto 1fr',
              gap: '2rem',
              alignItems: 'start',
              transition: 'border-color 0.3s ease',
            }}
            onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(201,169,110,0.45)'}
            onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(201,169,110,0.2)'}
            >
              {/* Number */}
              <div style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                color: 'rgba(201,169,110,0.2)',
                fontWeight: 300,
                lineHeight: 1,
                minWidth: '3rem',
                textAlign: 'center',
              }}>
                {offering.number}
              </div>

              {/* Content */}
              <div>
                <p style={{ fontSize: '0.7rem', letterSpacing: '0.25em', color: '#c9a96e', textTransform: 'uppercase', marginBottom: '0.4rem', opacity: 0.7 }}>
                  {offering.subtitle}
                </p>
                <h2 style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 'clamp(1.3rem, 3vw, 1.8rem)',
                  fontWeight: 400,
                  color: '#e8e0d0',
                  margin: '0 0 0.3rem',
                  letterSpacing: '0.03em',
                }}>
                  {offering.title}
                </h2>
                <p style={{ fontSize: '0.75rem', color: '#5a5040', letterSpacing: '0.08em', marginBottom: '1rem' }}>
                  ◇ {offering.duration}
                </p>
                <p style={{ color: '#9a8f7e', lineHeight: 1.85, fontSize: '0.95rem', marginBottom: '1.25rem' }}>
                  {offering.description}
                </p>
                <ul style={{ margin: '0 0 1.25rem', padding: 0, listStyle: 'none' }}>
                  {offering.details.map(d => (
                    <li key={d} style={{ display: 'flex', alignItems: 'baseline', gap: '0.6rem', color: '#7a7060', fontSize: '0.87rem', marginBottom: '0.35rem' }}>
                      <span style={{ color: '#c9a96e', fontSize: '0.5rem', flexShrink: 0 }}>◆</span>
                      {d}
                    </li>
                  ))}
                </ul>
                <p style={{ fontSize: '0.72rem', color: '#4a4030', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  {offering.suitable}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center', marginTop: 'clamp(3rem, 6vw, 5rem)', padding: 'clamp(2rem, 4vw, 3rem)', border: '1px solid rgba(201,169,110,0.15)' }}>
          <div className="gold-divider" />
          <h3 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)',
            fontWeight: 300,
            color: '#e8e0d0',
            marginBottom: '0.75rem',
          }}>
            Ready to Bring the Santoor to Your Space?
          </h3>
          <p style={{ color: '#7a7060', fontSize: '0.9rem', marginBottom: '1.5rem', lineHeight: 1.7 }}>
            All offerings can be shaped to the specific needs of your event or space.
          </p>
          <Link to="/contact" style={{
            display: 'inline-block',
            padding: '0.7rem 2.5rem',
            border: '1px solid #c9a96e',
            color: '#c9a96e',
            textDecoration: 'none',
            fontSize: '0.75rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#c9a96e'
            ;(e.currentTarget as HTMLAnchorElement).style.color = '#000'
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'transparent'
            ;(e.currentTarget as HTMLAnchorElement).style.color = '#c9a96e'
          }}
          >
            Make an Enquiry
          </Link>
        </div>

      </div>
    </div>
  )
}
