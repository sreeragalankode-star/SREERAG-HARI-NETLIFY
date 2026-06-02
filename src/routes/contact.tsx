import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/contact')({
  component: Contact,
})

function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  if (submitted) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
        <div style={{ textAlign: 'center', maxWidth: '480px' }}>
          <div style={{ width: '50px', height: '1px', background: '#c9a96e', margin: '0 auto 2rem' }} />
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '2rem',
            fontWeight: 300,
            color: '#c9a96e',
            marginBottom: '1rem',
          }}>
            Thank You
          </h2>
          <p style={{ color: '#7a7060', lineHeight: 1.8, marginBottom: '2rem', fontSize: '0.97rem' }}>
            Your message has been received. Sreerag will be in touch with you shortly.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            style={{
              background: 'none',
              border: '1px solid rgba(201,169,110,0.4)',
              color: '#c9a96e',
              cursor: 'pointer',
              padding: '0.6rem 1.8rem',
              fontSize: '0.72rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
            }}
          >
            Send Another Message
          </button>
        </div>
      </div>
    )
  }

  return (
    <div style={{ minHeight: '100vh', padding: 'clamp(3rem, 6vw, 5rem) 1.5rem' }}>
      <div style={{ maxWidth: '780px', margin: '0 auto' }}>

        {/* Header */}
        <div className="section-fade" style={{ textAlign: 'center', marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
          <p style={{ fontSize: '0.72rem', letterSpacing: '0.35em', color: '#c9a96e', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            Enquiries & Bookings
          </p>
          <h1 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
            fontWeight: 300,
            color: '#e8e0d0',
            margin: '0 0 0.5rem',
            letterSpacing: '0.04em',
          }}>
            Get in Touch
          </h1>
          <div className="gold-divider" />
          <p style={{ color: '#7a7060', fontSize: '0.95rem', maxWidth: '480px', margin: '0 auto', lineHeight: 1.8 }}>
            For concert bookings, sound meditation sessions, or bespoke collaborations — Sreerag welcomes your enquiry.
          </p>
        </div>

        {/* Direct contact */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1rem',
          marginBottom: 'clamp(2.5rem, 4vw, 3.5rem)',
        }}>
          <a
            href="mailto:Sreeragalankode@gmail.com"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '1.5rem',
              border: '1px solid rgba(201,169,110,0.15)',
              textDecoration: 'none',
              transition: 'border-color 0.3s ease',
              textAlign: 'center',
            }}
            onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(201,169,110,0.4)'}
            onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(201,169,110,0.15)'}
          >
            <span style={{ fontSize: '1.2rem', color: '#c9a96e' }}>✉</span>
            <span style={{ fontSize: '0.68rem', letterSpacing: '0.2em', color: '#5a5040', textTransform: 'uppercase' }}>Email</span>
            <span style={{ color: '#9a8f7e', fontSize: '0.87rem' }}>Sreeragalankode@gmail.com</span>
          </a>
          <a
            href="tel:+447824047060"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '1.5rem',
              border: '1px solid rgba(201,169,110,0.15)',
              textDecoration: 'none',
              transition: 'border-color 0.3s ease',
              textAlign: 'center',
            }}
            onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(201,169,110,0.4)'}
            onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(201,169,110,0.15)'}
          >
            <span style={{ fontSize: '1.2rem', color: '#c9a96e' }}>✆</span>
            <span style={{ fontSize: '0.68rem', letterSpacing: '0.2em', color: '#5a5040', textTransform: 'uppercase' }}>Phone</span>
            <span style={{ color: '#9a8f7e', fontSize: '0.87rem' }}>+44 7824 047060</span>
          </a>
        </div>

        {/* Form */}
        <div style={{ border: '1px solid rgba(201,169,110,0.15)', padding: 'clamp(1.5rem, 4vw, 2.5rem)' }}>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '1.3rem',
            fontWeight: 400,
            color: '#c9a96e',
            marginBottom: '1.75rem',
            textAlign: 'center',
            letterSpacing: '0.06em',
          }}>
            Send a Message
          </h2>

          <form
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={(e) => {
              e.preventDefault()
              setLoading(true)
              const form = e.currentTarget
              const formData = new FormData(form)
              fetch('/contact.html', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
              })
                .then(() => { setLoading(false); setSubmitted(true) })
                .catch(() => setLoading(false))
            }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
          >
            <input type="hidden" name="form-name" value="contact" />
            <p hidden><label>Do not fill: <input name="bot-field" /></label></p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem' }}>
              <div>
                <label htmlFor="name" style={labelStyle}>Name</label>
                <input type="text" id="name" name="name" required placeholder="Your name" style={inputStyle}
                  onFocus={e => (e.currentTarget.style.borderColor = 'rgba(201,169,110,0.5)')}
                  onBlur={e => (e.currentTarget.style.borderColor = 'rgba(201,169,110,0.2)')}
                />
              </div>
              <div>
                <label htmlFor="email" style={labelStyle}>Email</label>
                <input type="email" id="email" name="email" required placeholder="your@email.com" style={inputStyle}
                  onFocus={e => (e.currentTarget.style.borderColor = 'rgba(201,169,110,0.5)')}
                  onBlur={e => (e.currentTarget.style.borderColor = 'rgba(201,169,110,0.2)')}
                />
              </div>
            </div>

            <div>
              <label htmlFor="enquiry" style={labelStyle}>Type of Enquiry</label>
              <select id="enquiry" name="enquiry" style={{ ...inputStyle, appearance: 'none' }}>
                <option value="">Select an option</option>
                <option value="Classical Concert">Santoor Classical Concert</option>
                <option value="Sound Meditation">Live Sound Meditation</option>
                <option value="Collaboration">Bespoke Collaboration</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" style={labelStyle}>Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                placeholder="Tell Sreerag about your event, venue, or vision..."
                style={{ ...inputStyle, resize: 'vertical' }}
                onFocus={e => (e.currentTarget.style.borderColor = 'rgba(201,169,110,0.5)')}
                onBlur={e => (e.currentTarget.style.borderColor = 'rgba(201,169,110,0.2)')}
              />
            </div>

            <div style={{ textAlign: 'center', paddingTop: '0.5rem' }}>
              <button
                type="submit"
                disabled={loading}
                style={{
                  padding: '0.75rem 3rem',
                  border: '1px solid #c9a96e',
                  background: 'transparent',
                  color: '#c9a96e',
                  cursor: loading ? 'not-allowed' : 'pointer',
                  fontSize: '0.72rem',
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  transition: 'all 0.3s ease',
                  opacity: loading ? 0.5 : 1,
                }}
                onMouseEnter={e => {
                  if (!loading) {
                    (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#c9a96e'
                    ;(e.currentTarget as HTMLButtonElement).style.color = '#000'
                  }
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'transparent'
                  ;(e.currentTarget as HTMLButtonElement).style.color = '#c9a96e'
                }}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
        </div>

      </div>
    </div>
  )
}

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: '0.7rem',
  letterSpacing: '0.15em',
  color: '#5a5040',
  textTransform: 'uppercase',
  marginBottom: '0.4rem',
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '0.65rem 0.9rem',
  background: 'rgba(255,255,255,0.03)',
  border: '1px solid rgba(201,169,110,0.2)',
  color: '#e8e0d0',
  fontSize: '0.92rem',
  outline: 'none',
  transition: 'border-color 0.2s ease',
  fontFamily: "'Cormorant Garamond', serif",
  boxSizing: 'border-box',
}
