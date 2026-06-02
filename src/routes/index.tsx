import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <div style={{ minHeight: '100vh' }}>
      {/* Hero Section */}
      <section style={{
        minHeight: 'calc(100vh - 64px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Hero image */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: "url('/sreerag-home.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          opacity: 0.45,
        }} />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 60%, rgba(0,0,0,0.95) 100%)',
        }} />

        {/* Hero content */}
        <div style={{ position: 'relative', textAlign: 'center', padding: '2rem 1.5rem', maxWidth: '700px' }} className="section-fade">
          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(0.7rem, 1.5vw, 0.85rem)',
            letterSpacing: '0.35em',
            color: '#c9a96e',
            textTransform: 'uppercase',
            marginBottom: '1.5rem',
            opacity: 0.9,
          }}>
            Indian Santoor Artist
          </p>
          <h1 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(2.5rem, 7vw, 5rem)',
            fontWeight: 300,
            color: '#e8e0d0',
            lineHeight: 1.1,
            margin: '0 0 1rem',
            letterSpacing: '0.02em',
          }}>
            Sreerag Hari
          </h1>
          <div className="gold-divider" />
          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(1.1rem, 3vw, 1.6rem)',
            fontStyle: 'italic',
            color: '#c9a96e',
            letterSpacing: '0.12em',
            margin: '0 0 2.5rem',
            fontWeight: 300,
          }}>
            Sound, Stillness, Santoor...
          </p>
          <p style={{
            color: '#9a8f7e',
            fontSize: 'clamp(0.85rem, 1.8vw, 1rem)',
            lineHeight: 1.9,
            maxWidth: '480px',
            margin: '0 auto 3rem',
            letterSpacing: '0.03em',
          }}>
            Rooted in the Hindustani classical tradition — bringing the timeless resonance of the Santoor to concert stages, meditation spaces, and healing gatherings across London and beyond.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/offerings" style={{
              display: 'inline-block',
              padding: '0.7rem 2rem',
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
              Explore Offerings
            </Link>
            <Link to="/contact" style={{
              display: 'inline-block',
              padding: '0.7rem 2rem',
              backgroundColor: 'transparent',
              border: '1px solid rgba(201,169,110,0.3)',
              color: '#9a8f7e',
              textDecoration: 'none',
              fontSize: '0.75rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = '#c9a96e'
              ;(e.currentTarget as HTMLAnchorElement).style.color = '#c9a96e'
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(201,169,110,0.3)'
              ;(e.currentTarget as HTMLAnchorElement).style.color = '#9a8f7e'
            }}
            >
              Make an Enquiry
            </Link>
          </div>
        </div>
      </section>

      {/* Three pillars */}
      <section style={{ padding: 'clamp(3rem, 8vw, 6rem) 1.5rem', maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
          {[
            {
              title: 'Classical Concerts',
              desc: 'Formal recitals in the Hindustani tradition, featuring ragas performed across the arc of time and season.',
              link: '/offerings',
            },
            {
              title: 'Sound Meditation',
              desc: 'Live Santoor sessions accompanying meditation, yoga, and breathwork — inviting deep rest and inner stillness.',
              link: '/offerings',
            },
            {
              title: 'Collaborations',
              desc: 'Bespoke partnerships with visual artists, choreographers, filmmakers, and cultural organisations.',
              link: '/offerings',
            },
          ].map(item => (
            <Link key={item.title} to={item.link} style={{ textDecoration: 'none' }}>
              <div style={{
                border: '1px solid rgba(201,169,110,0.15)',
                padding: '2rem',
                textAlign: 'center',
                transition: 'border-color 0.3s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(201,169,110,0.4)'}
              onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(201,169,110,0.15)'}
              >
                <div className="gold-divider" style={{ margin: '0 auto 1.25rem' }} />
                <h3 style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '1.25rem',
                  fontWeight: 400,
                  color: '#c9a96e',
                  marginBottom: '0.75rem',
                  letterSpacing: '0.05em',
                }}>
                  {item.title}
                </h3>
                <p style={{ color: '#7a7060', fontSize: '0.9rem', lineHeight: 1.75, margin: 0 }}>{item.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Quote */}
      <section style={{ padding: 'clamp(2rem, 6vw, 4rem) 1.5rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <div className="gold-divider" />
          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
            fontStyle: 'italic',
            color: '#9a8f7e',
            lineHeight: 1.8,
            letterSpacing: '0.03em',
          }}>
            "The live Santoor responds to the energy of the room — creating a one-time, unrepeatable soundscape for each session."
          </p>
          <div className="gold-divider" />
        </div>
      </section>
    </div>
  )
}
