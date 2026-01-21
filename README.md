# Future-Proof Portfolio (React)

This is a minimal React (Vite) portfolio scaffold implementing the sections from the provided slides: Hero statement, The Big Three projects, and Growth / Currently Learning.

Getting started

1. Install dependencies:

```bash
npm install
```

2. Run locally:

```bash
npm run dev
```

Open the printed local URL (usually http://localhost:5173) in your browser.

How this maps to the slides

- Hero Statement: Edit `src/components/Hero.jsx` and replace the example sentence with your own one-sentence hero statement.
- The "Big Three": Edit `src/components/Projects.jsx` and replace the example projects with your own three projects (one showing what you know, one showing what you learned, and one showing what you aspire to do).
- Growth tab: Edit `src/components/Growth.jsx` to list what you are currently learning.

Git & Deploy to Vercel (recommended)

1. Initialize a repository and push to GitHub:

```bash
git init
git add .
git commit -m "Initial portfolio setup"
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main
```

2. Deploy on Vercel:

- Go to https://vercel.com and log in with your GitHub account.
- Click "Add New" → "Project" and import your repository.
- Vercel will detect the framework (Vite/React). Click Deploy.

From then on, when you push new changes to main, Vercel will automatically rebuild and update your live URL.

Next steps / suggestions

- Add screenshots and live links for each project card.
- Add accessibility checks, tests, and TypeScript as you grow.
- For a production-ready portfolio, consider adding a contact form and a custom domain via Vercel.
