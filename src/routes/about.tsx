import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: About,
})

function About() {
  return (
    <div style={{ minHeight: '100vh', padding: 'clamp(3rem, 6vw, 5rem) 1.5rem' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>

        {/* Header */}
        <div className="section-fade" style={{ textAlign: 'center', marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
          <p style={{ fontSize: '0.72rem', letterSpacing: '0.35em', color: '#c9a96e', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            Artist · Performer · Teacher
          </p>
          <h1 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
            fontWeight: 300,
            color: '#e8e0d0',
            margin: '0 0 0.5rem',
            letterSpacing: '0.04em',
          }}>
            Sreerag Hari
          </h1>
          <div className="gold-divider" />
        </div>

        {/* Portrait + bio */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
          gap: 'clamp(2rem, 4vw, 4rem)',
          alignItems: 'start',
          marginBottom: 'clamp(3rem, 6vw, 5rem)',
        }}>
          <div style={{ position: 'relative' }}>
            <img
              src="/sreerag-home.jpg"
              alt="Sreerag Hari — Santoor Artist"
              style={{
                width: '100%',
                display: 'block',
                filter: 'brightness(0.85) contrast(1.05) sepia(0.15)',
                border: '1px solid rgba(201,169,110,0.2)',
              }}
            />
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '40%',
              background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)',
            }} />
          </div>
          <div>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(1.3rem, 2.5vw, 1.7rem)',
              fontWeight: 400,
              color: '#c9a96e',
              marginBottom: '1.25rem',
              letterSpacing: '0.04em',
            }}>
              Rooted in Tradition
            </h2>
            <p style={{ color: '#9a8f7e', lineHeight: 1.9, fontSize: '0.97rem', marginBottom: '1.25rem' }}>
              Sreerag Hari is an Indian Santoor artist rooted in the rich tradition of Hindustani classical music, trained under his father and guru Sri Hari Alankode, a disciple of the legendary Pt Shivkumar Sharma. Through this lineage, he carries forward the timeless voice of the Santoor with depth, sensitivity, and respect for tradition.
            </p>
            <p style={{ color: '#9a8f7e', lineHeight: 1.9, fontSize: '0.97rem', marginBottom: '1.25rem' }}>
              His musical journey spans classical concert performances as well as intimate meditative settings across India, UAE and UK, where the Santoor's gentle resonance naturally supports stillness, breath, and inner awareness.
            </p>
            <p style={{ color: '#9a8f7e', lineHeight: 1.9, fontSize: '0.97rem' }}>
              Sreerag's approach is intuitive and spacious, allowing the music to unfold in harmony with the energy of the space — whether on a concert stage or within a yoga and meditation session.
            </p>
          </div>
        </div>

        {/* London presence */}
        <div style={{
          borderTop: '1px solid rgba(201,169,110,0.15)',
          borderBottom: '1px solid rgba(201,169,110,0.15)',
          padding: 'clamp(2rem, 4vw, 3rem) 0',
          textAlign: 'center',
          marginBottom: 'clamp(3rem, 6vw, 5rem)',
        }}>
          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(1rem, 2.2vw, 1.3rem)',
            fontStyle: 'italic',
            color: '#9a8f7e',
            lineHeight: 1.8,
            maxWidth: '600px',
            margin: '0 auto',
          }}>
            Now based in London, he collaborates with yoga centres, wellness studios, cultural organisations, and retreat spaces — bringing ancient strings into contemporary spaces of listening and healing.
          </p>
        </div>

        {/* Lineage */}
        <div>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(1.3rem, 3vw, 1.8rem)',
            fontWeight: 400,
            color: '#e8e0d0',
            marginBottom: '2rem',
            textAlign: 'center',
            letterSpacing: '0.04em',
          }}>
            Musical Lineage
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', maxWidth: '500px', margin: '0 auto' }}>
            {[
              { name: 'Pt Shivkumar Sharma', role: 'Grandmaster — Father of the Modern Santoor' },
              { name: 'Sri Hari Alankode', role: 'Guru & Father — Disciple of Pt Shivkumar Sharma' },
              { name: 'Sreerag Hari', role: 'Artist — Carrying the lineage forward in London' },
            ].map((person, i) => (
              <div key={person.name} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '1.25rem 1.5rem',
                border: '1px solid rgba(201,169,110,0.15)',
                backgroundColor: i === 2 ? 'rgba(201,169,110,0.04)' : 'transparent',
              }}>
                <div style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  border: `1px solid ${i === 2 ? '#c9a96e' : 'rgba(201,169,110,0.3)'}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  color: '#c9a96e',
                  fontSize: '0.75rem',
                }}>
                  {i + 1}
                </div>
                <div>
                  <p style={{ margin: 0, color: i === 2 ? '#c9a96e' : '#c0b090', fontFamily: "'Cormorant Garamond', serif", fontSize: '1.05rem' }}>
                    {person.name}
                  </p>
                  <p style={{ margin: 0, color: '#5a5040', fontSize: '0.8rem', letterSpacing: '0.02em' }}>{person.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
