# 🚀 Portfolio Deployment Guide

## Quick Start - 5 Minutes to Live

### Option 1: Using GitHub Pages (Recommended)

#### Step 1: Add GitHub Pages Deployment Package
```bash
npm install --save-dev gh-pages
```

#### Step 2: Update `package.json`
Replace your scripts section with:
```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "deploy": "npm run build && gh-pages -d dist"
}
```

And add this at the root level:
```json
"homepage": "https://thanuja0911.github.io",
```

#### Step 3: Deploy
```bash
npm run deploy
```

Your portfolio will be live at: `https://thanuja0911.github.io`

---

### Option 2: Manual GitHub Pages Setup (No extra package)

#### Step 1: Build locally
```bash
npm install
npm run build
```

#### Step 2: Copy dist folder to docs folder
```bash
cp -r dist docs
git add docs/
git commit -m "deploy: portfolio update"
git push
```

#### Step 3: Enable GitHub Pages
1. Go to repo Settings → Pages
2. Select `Deploy from a branch`
3. Choose `main` branch and `/docs` folder
4. Save

---

### Option 3: Deploy to Vercel (Even Easier!)

Vercel auto-deploys from Git with zero config:

1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Click "Deploy"
4. **Done!** Updates deploy automatically on push

---

## Project Structure

```
thanuja-portfolio/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx
│   │   ├── Hero.jsx
│   │   ├── Projects.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── Experience.jsx
│   │   ├── Skills.jsx
│   │   ├── Education.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

---

## Development

### Install Dependencies
```bash
npm install
```

### Start Dev Server
```bash
npm run dev
```
Visit: `http://localhost:5173`

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

---

## Tech Stack Used

✨ **Frontend Framework**: React 18  
⚡ **Build Tool**: Vite  
🎨 **Styling**: Tailwind CSS  
✨ **Animations**: Framer Motion  
🎯 **Icons**: Lucide React  

---

## Key Features

### ✅ Performance
- Fast Vite builds
- Optimized Tailwind CSS
- Lazy-loaded components
- Minimal bundle size (~50KB gzipped)

### ✅ Design
- Dark theme with gradients
- Smooth animations and transitions
- Responsive mobile design
- Accessibility-friendly

### ✅ SEO
- Semantic HTML
- Meta tags
- Open Graph support
- Sitemap ready

### ✅ Mobile Optimized
- Touch-friendly buttons
- Responsive grid layouts
- Smooth scrolling
- Mobile navigation menu

---

## Customization

### Update Personal Info
Edit `src/components/Hero.jsx`:
```jsx
<h1>Your Name</h1>
<p className="text-xl sm:text-2xl text-slate-300">Your Title</p>
```

### Add/Edit Projects
Edit `src/components/Projects.jsx` - add to the projects array:
```jsx
{
  id: 7,
  title: 'New Project',
  description: 'Your description',
  icon: '🚀',
  tags: ['Tech1', 'Tech2'],
  github: 'https://github.com/...',
  metrics: ['Metric 1', 'Metric 2'],
  color: 'from-blue-500 to-cyan-500'
}
```

### Change Color Scheme
Edit `tailwind.config.js`:
```js
colors: {
  primary: {
    500: '#YOUR-COLOR',
    600: '#YOUR-COLOR-DARKER',
  }
}
```

### Modify Skills
Edit `src/components/Skills.jsx` - update `skillCategories` array

---

## Troubleshooting

### Build fails
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Port already in use
```bash
npm run dev -- --port 3000
```

### Deployment issues
- Ensure `vite.config.js` has correct `base` path
- Check that `dist` folder is created after build
- Verify GitHub Pages settings in repository

---

## Next Steps

1. **Update Resume Link** - Add link to your PDF resume
2. **Add Blog Section** - Create a blog/articles section
3. **Add Video Demo** - Embed demo videos of projects
4. **Form Submission** - Add Formspree or Netlify forms for contact
5. **Analytics** - Add Google Analytics or Plausible
6. **PWA** - Make it installable with service worker
7. **Blog** - Markdown-based blog with MDX

---

## Deployment Status Badge

Add this to your README:

```markdown
[![Deployed to GitHub Pages](https://img.shields.io/badge/deployed-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://thanuja0911.github.io)
```

---

## Performance Tips

1. **Image Optimization**
   - Use WebP format
   - Compress images to < 100KB
   - Lazy load images

2. **Code Splitting**
   - Vite does this automatically
   - Check network tab in DevTools

3. **Caching**
   - GitHub Pages caches aggressively
   - Add cache-busting headers if needed

---

## Support & Help

- **Vite Docs**: https://vitejs.dev
- **React Docs**: https://react.dev
- **Tailwind Docs**: https://tailwindcss.com/docs
- **Framer Motion**: https://www.framer.com/motion
- **GitHub Pages**: https://pages.github.com

---

## License

Personal portfolio - use as template for your own site.

---

Built with ❤️ using React, Vite, Tailwind CSS & Framer Motion
