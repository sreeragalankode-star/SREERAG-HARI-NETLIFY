import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/instrument')({
  component: Instrument,
})

function Instrument() {
  return (
    <div style={{ minHeight: '100vh', padding: 'clamp(3rem, 6vw, 5rem) 1.5rem' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>

        {/* Header */}
        <div className="section-fade" style={{ textAlign: 'center', marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
          <p style={{ fontSize: '0.72rem', letterSpacing: '0.35em', color: '#c9a96e', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            Ancient · Himalayan · Celestial
          </p>
          <h1 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
            fontWeight: 300,
            color: '#e8e0d0',
            margin: '0 0 0.5rem',
            letterSpacing: '0.04em',
          }}>
            The Santoor
          </h1>
          <div className="gold-divider" />
          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            fontStyle: 'italic',
            color: '#9a8f7e',
            maxWidth: '550px',
            margin: '0 auto',
            lineHeight: 1.8,
          }}>
            An ancient instrument of a hundred strings — creating a shimmering soundscape that gently guides the body into stillness and the mind into clarity.
          </p>
        </div>

        {/* Image + text */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 'clamp(2rem, 4vw, 4rem)',
          alignItems: 'center',
          marginBottom: 'clamp(3rem, 6vw, 5rem)',
        }}>
          <div>
            <img
              src="/santoor1.png"
              alt="The Santoor instrument"
              style={{
                width: '100%',
                display: 'block',
                filter: 'brightness(0.9) contrast(1.05)',
                border: '1px solid rgba(201,169,110,0.2)',
              }}
            />
          </div>
          <div>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(1.4rem, 3vw, 2rem)',
              fontWeight: 400,
              color: '#c9a96e',
              marginBottom: '1.25rem',
              letterSpacing: '0.04em',
            }}>
              Originating from the Valleys of Kashmir
            </h2>
            <p style={{ color: '#9a8f7e', lineHeight: 1.9, fontSize: '0.97rem', marginBottom: '1.25rem' }}>
              The Santoor is known for its celestial, water-like resonance. Its cascading tones resemble flowing streams, soft rainfall, and temple bells carried by the wind. A trapezoidal wooden instrument, it is played with light walnut mallets that dance across its strings — producing sustained, shimmering vibrations that seem to dissolve the boundary between sound and silence.
            </p>
            <p style={{ color: '#9a8f7e', lineHeight: 1.9, fontSize: '0.97rem' }}>
              Unlike recorded music, the live Santoor responds to the energy of the room — creating a one-time, unrepeatable soundscape for each session. No two performances are ever the same.
            </p>
          </div>
        </div>

        {/* Qualities */}
        <div style={{ borderTop: '1px solid rgba(201,169,110,0.15)', paddingTop: 'clamp(2rem, 4vw, 3rem)' }}>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(1.3rem, 3vw, 1.8rem)',
            fontWeight: 400,
            color: '#e8e0d0',
            marginBottom: '2rem',
            textAlign: 'center',
            letterSpacing: '0.04em',
          }}>
            Why the Santoor?
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
            {[
              { quality: 'Sustained Resonance', desc: 'Each struck string rings and fades slowly, creating a continuous wash of tone.' },
              { quality: 'Harmonic Richness', desc: 'One hundred strings tuned across multiple octaves produce a full, layered sonic field.' },
              { quality: 'Living Presence', desc: 'The instrument breathes with the room — its tone shaped by acoustics, space, and silence.' },
              { quality: 'Ancient Lineage', desc: 'Rooted in Kashmiri folk tradition and elevated into the classical by Pt Shivkumar Sharma.' },
            ].map(item => (
              <div key={item.quality} style={{
                padding: '1.5rem',
                border: '1px solid rgba(201,169,110,0.12)',
                textAlign: 'center',
              }}>
                <div style={{ width: '30px', height: '1px', background: '#c9a96e', margin: '0 auto 1rem' }} />
                <h3 style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '1.05rem',
                  color: '#c9a96e',
                  marginBottom: '0.6rem',
                  fontWeight: 500,
                }}>
                  {item.quality}
                </h3>
                <p style={{ color: '#6a6050', fontSize: '0.85rem', lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
