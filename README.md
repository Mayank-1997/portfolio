# Mayank Aggarwal AI Portfolio

Production-ready Next.js portfolio for Mayank Aggarwal, Backend & Agentic AI Engineer.

## Tech Stack

- Next.js 14 App Router
- TypeScript
- TailwindCSS
- Framer Motion
- Three.js / React Three Fiber
- ShadCN-style UI primitives
- Lucide Icons

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production Build

```bash
npm run build
npm run start
```

## Render Deployment

This repo includes `render.yaml`.

1. Push the repository to GitHub.
2. Create a new Render Blueprint.
3. Select the repository.
4. Render will use:
   - Build command: `npm install && npm run build`
   - Start command: `npm run start`
   - Node version: `20`

No environment variables are required.
