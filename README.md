# Sreerag Hari — Santoor Artist Website

A personal artist website for Sreerag Hari, an Indian Santoor artist based in London. The site presents his musical journey, performance offerings, and contact information with a calm, elegant dark aesthetic that mirrors the meditative quality of Santoor music.

## Tech Stack

- **Framework**: TanStack Start (React 19 + TanStack Router v1)
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS 4 + inline styles (dark gold-on-black theme)
- **Language**: TypeScript 5.7 (strict mode)
- **Deployment**: Netlify (with Netlify Forms for contact)
- **Fonts**: Cormorant Garamond (Google Fonts)

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero with artist photo, caption, three offering pillars |
| `/instrument` | About the Santoor — history, image, qualities |
| `/about` | Artist biography — lineage, journey, London presence |
| `/offerings` | Three offerings: Classical Concert, Sound Meditation, Collaborations |
| `/gallery` | Photo grid with lightbox + YouTube video embeds |
| `/contact` | Contact form (Netlify Forms) + direct email/phone |

## Running Locally

```bash
npm install
npm run dev
```

The dev server starts at `http://localhost:3000` (via Netlify CLI on port 8888 for full platform feature emulation).

## Building for Production

```bash
npm run build
```

Output is written to `dist/client`. Netlify handles deployment automatically on push.

## Environment Variables

No environment variables are required for the base site. AI features (if enabled) require one of: `ANTHROPIC_API_KEY`, `OPENAI_API_KEY`, `GEMINI_API_KEY`, or `OLLAMA_BASE_URL`.
