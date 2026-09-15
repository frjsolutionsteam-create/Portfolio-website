# Rashiq — Portfolio Site

A plain HTML/CSS/JS site — no build step, no framework. You can open
`index.html` directly in a browser to preview it.

## Adding your real content

- **Photo**: replace `images/portfolio/brand-01.svg` referenced in the
  hero section of `index.html` with your own portrait (update the `src`
  in the `.hero-frame img` tag).
- **Resume PDF**: put your resume file in the project folder (e.g.
  `resume.pdf`) and update the two `download` links' `href` in
  `index.html` to point to it.
- **Bio / experience / education**: edit the text directly inside
  `index.html` — it's plain readable HTML, organized into labeled
  sections (`<!-- ROOM 1 — HERO -->`, etc.).
- **Contact links**: update the email address and social links in the
  sidebar, footer, and contact section.

## Adding a new Portfolio piece (no code required beyond this)

1. Drop your image file into `images/portfolio/` (jpg, png, or webp).
2. Open `data/works.js` and copy one of the existing entries, then
   edit the `title`, `category`, `image` path, `description`, `year`,
   and optional `link`.
3. Save. The gallery, filters, and lightbox on the live site update
   automatically — no other file needs to change.

You can remove the six sample placeholder entries once you've added
your own real work.

## Deploying to Vercel

**Option A — drag and drop**
1. Go to vercel.com → Add New → Project → "Deploy" and drag this
   whole folder in (or zip it and upload).
2. Framework preset: choose "Other" / static site. No build command
   needed.

**Option B — GitHub (recommended for future edits)**
1. Create a new GitHub repository and push this folder to it.
2. In Vercel, "Import Project" → select the repo → deploy.
3. From then on, any change you push to GitHub redeploys automatically.
