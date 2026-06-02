import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/gallery')({
  component: Gallery,
})

const photos = [
  { src: '/sree1.jpg', alt: 'Sreerag Hari performing' },
  { src: '/sree2.jpg', alt: 'Sreerag Hari with the Santoor' },
  { src: '/sree3.jpg', alt: 'Sreerag Hari in concert' },
  { src: '/sree4.jpg', alt: 'Santoor performance' },
  { src: '/sree5.jpeg', alt: 'Sreerag Hari artist portrait' },
  { src: '/sree6.jpg', alt: 'Sreerag Hari performance' },
]

const videos = [
  {
    url: 'https://www.youtube.com/watch?v=yYqs6a3JA2Y&t=1s',
    embedId: 'yYqs6a3JA2Y',
    title: 'Sreerag Hari — Santoor Performance',
  },
  {
    url: 'https://www.youtube.com/watch?v=1xnMLsTUi4g',
    embedId: '1xnMLsTUi4g',
    title: 'Sreerag Hari — Santoor Concert',
  },
]

function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null)

  return (
    <div style={{ minHeight: '100vh', padding: 'clamp(3rem, 6vw, 5rem) 1.5rem' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* Header */}
        <div className="section-fade" style={{ textAlign: 'center', marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
          <p style={{ fontSize: '0.72rem', letterSpacing: '0.35em', color: '#c9a96e', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            Photos & Videos
          </p>
          <h1 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
            fontWeight: 300,
            color: '#e8e0d0',
            margin: '0 0 0.5rem',
            letterSpacing: '0.04em',
          }}>
            Gallery
          </h1>
          <div className="gold-divider" />
        </div>

        {/* Photos grid */}
        <section style={{ marginBottom: 'clamp(3rem, 6vw, 5rem)' }}>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '1.3rem',
            fontWeight: 400,
            color: '#c9a96e',
            marginBottom: '1.5rem',
            letterSpacing: '0.08em',
            textAlign: 'center',
          }}>
            Photography
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '0.75rem',
          }}>
            {photos.map((photo, i) => (
              <div
                key={photo.src}
                onClick={() => setLightbox(i)}
                style={{
                  cursor: 'pointer',
                  overflow: 'hidden',
                  aspectRatio: '4/3',
                  position: 'relative',
                  border: '1px solid rgba(201,169,110,0.1)',
                }}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 0.5s ease, filter 0.3s ease',
                    filter: 'brightness(0.8) sepia(0.1)',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.05)'
                    ;(e.currentTarget as HTMLImageElement).style.filter = 'brightness(0.95) sepia(0)'
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)'
                    ;(e.currentTarget as HTMLImageElement).style.filter = 'brightness(0.8) sepia(0.1)'
                  }}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Videos */}
        <section>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '1.3rem',
            fontWeight: 400,
            color: '#c9a96e',
            marginBottom: '1.5rem',
            letterSpacing: '0.08em',
            textAlign: 'center',
          }}>
            Performances
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(440px, 1fr))',
            gap: '1.5rem',
          }}>
            {videos.map(video => (
              <div key={video.embedId} style={{ border: '1px solid rgba(201,169,110,0.15)' }}>
                <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
                  <iframe
                    src={`https://www.youtube.com/embed/${video.embedId}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      border: 'none',
                    }}
                  />
                </div>
                <div style={{ padding: '0.75rem 1rem', borderTop: '1px solid rgba(201,169,110,0.1)' }}>
                  <p style={{ color: '#7a7060', fontSize: '0.82rem', margin: 0, letterSpacing: '0.04em' }}>{video.title}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          onClick={() => setLightbox(null)}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.95)',
            zIndex: 200,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
          }}
        >
          <button
            onClick={() => setLightbox(null)}
            style={{
              position: 'absolute',
              top: '1.5rem',
              right: '1.5rem',
              background: 'none',
              border: '1px solid rgba(201,169,110,0.4)',
              color: '#c9a96e',
              cursor: 'pointer',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.2rem',
            }}
            aria-label="Close"
          >
            ✕
          </button>
          {lightbox > 0 && (
            <button
              onClick={e => { e.stopPropagation(); setLightbox(lightbox - 1) }}
              style={{
                position: 'absolute',
                left: '1rem',
                background: 'none',
                border: '1px solid rgba(201,169,110,0.3)',
                color: '#c9a96e',
                cursor: 'pointer',
                width: '44px',
                height: '44px',
                fontSize: '1.2rem',
              }}
            >
              ‹
            </button>
          )}
          <img
            src={photos[lightbox].src}
            alt={photos[lightbox].alt}
            onClick={e => e.stopPropagation()}
            style={{
              maxWidth: '90vw',
              maxHeight: '85vh',
              objectFit: 'contain',
              border: '1px solid rgba(201,169,110,0.2)',
            }}
          />
          {lightbox < photos.length - 1 && (
            <button
              onClick={e => { e.stopPropagation(); setLightbox(lightbox + 1) }}
              style={{
                position: 'absolute',
                right: '1rem',
                background: 'none',
                border: '1px solid rgba(201,169,110,0.3)',
                color: '#c9a96e',
                cursor: 'pointer',
                width: '44px',
                height: '44px',
                fontSize: '1.2rem',
              }}
            >
              ›
            </button>
          )}
          <p style={{ position: 'absolute', bottom: '1.5rem', color: '#5a5040', fontSize: '0.8rem', letterSpacing: '0.1em' }}>
            {lightbox + 1} / {photos.length}
          </p>
        </div>
      )}
    </div>
  )
}
