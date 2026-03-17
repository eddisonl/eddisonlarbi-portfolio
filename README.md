# Eddison Anim-Larbi — Portfolio

Personal portfolio website built with React.js.

## Tech Stack
- React 18
- CSS Modules (component-scoped)
- JetBrains Mono + Syne fonts
- Deployed on Netlify

## Getting Started

```bash
npm install
npm start
```

## Build for Production

```bash
npm run build
```

## Deploy to Netlify

1. Push this repo to GitHub
2. Go to [Netlify](https://app.netlify.com) → **Add new site** → **Import from Git**
3. Select your repo
4. Build command: `npm run build`
5. Publish directory: `build`
6. Click **Deploy site**

Or drag-and-drop the `build/` folder directly into Netlify.

## Project Structure

```
src/
  components/
    Navbar.jsx / .css
    Hero.jsx / .css
    About.jsx / .css
    Skills.jsx / .css
    Experience.jsx / .css
    Projects.jsx / .css
    Certifications.jsx / .css
    Contact.jsx / .css
    Footer.jsx / .css
    ScrollProgress.jsx / .css
  styles/
    global.css
  App.jsx
  index.js
public/
  index.html
```
