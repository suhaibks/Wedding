# Premium Wedding Invitation

A deployment-ready Next.js wedding invitation experience designed as a cinematic, mobile-first digital card for **Ayaan Khan & Zara Sheikh**.

## Stack

- Next.js 14
- React 18
- Tailwind CSS
- Framer Motion
- TypeScript

## Local setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Open `http://localhost:3000`.

## Development commands

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Deployment

### GitHub

1. Create a new GitHub repository.
2. Commit and push this project:
   ```bash
   git init
   git add .
   git commit -m "Initial wedding invitation site"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

### Vercel

1. Import the GitHub repository into Vercel.
2. Vercel will detect Next.js automatically.
3. Use the default build command:
   ```bash
   npm run build
   ```
4. Deploy.

## Experience notes

- The landing view opens as a premium invitation card with a ceremonial first-tap animation.
- The content reveals with subtle motion and no forced navigation.
- The date is highlighted with a restrained SVG scribble animation.
- The page includes story, events, gallery, countdown, and blessing sections only.
