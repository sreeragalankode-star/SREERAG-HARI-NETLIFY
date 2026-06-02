import { HeadContent, Outlet, Scripts, createRootRoute } from '@tanstack/react-router'
import { Link, useRouterState } from '@tanstack/react-router'
import { useState } from 'react'
import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Sreerag Hari — Santoor Artist' },
      { name: 'description', content: 'Sreerag Hari — Indian Santoor artist. Sound, Stillness, Santoor. Classical concerts and live sound meditation in London and beyond.' },
    ],
    links: [
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=EB+Garamond:ital,wght@0,400;0,500;1,400&display=swap' },
    ],
  }),
  shellComponent: RootDocument,
})

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/instrument', label: 'The Santoor' },
  { to: '/about', label: 'About' },
  { to: '/offerings', label: 'Offerings' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
]

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const routerState = useRouterState()
  const currentPath = routerState.location.pathname

  return (
    <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, backgroundColor: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(201,169,110,0.15)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <span style={{ fontFamily: "'Cormorant Garamond', serif", color: '#c9a96e', fontSize: '1.15rem', fontWeight: 400, letterSpacing: '0.08em' }}>
            Sreerag Hari
          </span>
        </Link>

        {/* Desktop nav */}
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }} className="hidden-mobile">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`nav-link${currentPath === link.to ? ' active' : ''}`}
              style={{ textDecoration: 'none' }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(v => !v)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#c9a96e', padding: '0.5rem', display: 'none' }}
          className="show-mobile"
          aria-label="Menu"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            {menuOpen
              ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
              : <><line x1="3" y1="7" x2="21" y2="7"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="17" x2="21" y2="17"/></>
            }
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ backgroundColor: 'rgba(0,0,0,0.97)', padding: '1rem 1.5rem 1.5rem', borderTop: '1px solid rgba(201,169,110,0.1)' }}>
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className="nav-link"
              style={{ display: 'block', padding: '0.75rem 0', textDecoration: 'none', borderBottom: '1px solid rgba(201,169,110,0.08)' }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" style={{ backgroundColor: '#000' }}>
      <head>
        <HeadContent />
        <style>{`
          @media (max-width: 768px) {
            .hidden-mobile { display: none !important; }
            .show-mobile { display: block !important; }
          }
          @media (min-width: 769px) {
            .show-mobile { display: none !important; }
            .hidden-mobile { display: flex !important; }
          }
        `}</style>
      </head>
      <body style={{ backgroundColor: '#000', color: '#e8e0d0', margin: 0, minHeight: '100vh' }}>
        <div className="page-bg" aria-hidden="true" />
        <Nav />
        <main style={{ paddingTop: '64px', position: 'relative', zIndex: 1 }}>
          <Outlet />
        </main>
        <footer style={{ borderTop: '1px solid rgba(201,169,110,0.15)', padding: '2rem 1.5rem', textAlign: 'center', color: '#5a5040', fontSize: '0.8rem', letterSpacing: '0.08em', position: 'relative', zIndex: 1 }}>
          <p>© 2025 Sreerag Hari · <a href="mailto:Sreeragalankode@gmail.com" style={{ color: '#8a6d3e', textDecoration: 'none' }}>Sreeragalankode@gmail.com</a></p>
        </footer>
        <Scripts />
      </body>
    </html>
  )
}
