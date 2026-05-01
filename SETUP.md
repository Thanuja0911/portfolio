# 🚀 Complete Portfolio Setup Guide

## Option A: Quick Setup (5 minutes)

### 1. Download All Files
All files are in the `thanuja-portfolio/` folder. You can:
- Download as ZIP
- Clone if you fork it
- Copy files to your repo

### 2. Navigate to Project
```bash
cd thanuja-portfolio
```

### 3. Install & Run
```bash
npm install
npm run dev
```

Visit: `http://localhost:5173`

---

## Option B: GitHub Pages Deployment (Recommended)

### Step 1: Setup Repository Structure
Your repo should look like:
```
thanuja0911.github.io/  (or thanuja-portfolio)
├── src/
├── package.json
├── vite.config.js
├── index.html
└── ...other files
```

### Step 2: Update vite.config.js
For root domain (thanuja0911.github.io), keep:
```js
base: '/',
```

For subdomain (github.com/thanuja0911/thanuja-portfolio):
```js
base: '/thanuja-portfolio/',
```

### Step 3: Install gh-pages
```bash
npm install --save-dev gh-pages
```

### Step 4: Update package.json
```json
{
  "homepage": "https://thanuja0911.github.io",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "deploy": "npm run build && gh-pages -d dist"
  }
}
```

### Step 5: Deploy
```bash
npm run deploy
```

✅ Live at: `https://thanuja0911.github.io`

---

## Option C: Deploy to Vercel (Easiest!)

### Step 1: Push to GitHub
```bash
git add .
git commit -m "initial commit"
git push origin main
```

### Step 2: Go to Vercel
Visit: https://vercel.com

### Step 3: Import Repository
1. Click "New Project"
2. Select your GitHub repository
3. Click "Import"

### Step 4: Deploy
1. Framework: Vite
2. Build Command: `npm run build`
3. Output Directory: `dist`
4. Click "Deploy"

✅ Auto-deploys on every push!

---

## Option D: Deploy to Netlify

### Step 1: Connect GitHub
Visit: https://app.netlify.com

### Step 2: New Site from Git
1. Click "Add new site"
2. Choose "Connect to Git"
3. Select GitHub & your repo

### Step 3: Configure
- Build command: `npm run build`
- Publish directory: `dist`

### Step 4: Deploy
Click "Deploy site"

✅ Auto-deploys on push!

---

## File Organization

```
thanuja-portfolio/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx      # Top navbar
│   │   ├── Hero.jsx            # Hero section
│   │   ├── Projects.jsx        # Projects grid
│   │   ├── ProjectCard.jsx     # Project card
│   │   ├── Experience.jsx      # Timeline
│   │   ├── Skills.jsx          # Skills grid
│   │   ├── Education.jsx       # Education section
│   │   └── Contact.jsx         # Contact CTA
│   ├── App.jsx                 # Main component
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles
│
├── index.html                  # HTML template
├── package.json                # Dependencies
├── vite.config.js              # Vite config
├── tailwind.config.js          # Tailwind theme
├── postcss.config.js           # CSS processing
├── .gitignore                  # Git ignore
│
├── README.md                   # Project README
├── DEPLOYMENT.md               # Deployment guide
└── LICENSE                     # MIT License
```

---

## First-Time Setup Checklist

- [ ] Clone/download repository
- [ ] Run `npm install`
- [ ] Run `npm run dev` and test locally
- [ ] Update your name in `src/components/Hero.jsx`
- [ ] Update projects in `src/components/Projects.jsx`
- [ ] Update skills in `src/components/Skills.jsx`
- [ ] Update education in `src/components/Education.jsx`
- [ ] Update contact info in `src/components/Contact.jsx`
- [ ] Run `npm run build` to test production build
- [ ] Deploy using your chosen method (GitHub Pages/Vercel/Netlify)
- [ ] Test live site
- [ ] Share with recruiters! 🎉

---

## Customization Guide

### 1. Update Hero Section
**File**: `src/components/Hero.jsx`

```jsx
// Line ~20
<h1>Your Name Here</h1>

// Line ~25  
<p className="text-2xl text-slate-300">Your Title</p>

// Line ~26
<p>Your bio/description</p>
```

### 2. Add Your Projects
**File**: `src/components/Projects.jsx`

```jsx
// Add to projects array (around line 10)
{
  id: 7,
  title: 'Your Project Name',
  description: 'A brief description of your amazing project...',
  icon: '🚀',  // Any emoji
  tags: ['React', 'Node.js', 'MongoDB'],
  github: 'https://github.com/yourusername/yourproject',
  metrics: ['Key metric 1', 'Key metric 2', 'Key metric 3'],
  color: 'from-blue-500 to-cyan-500'  // Gradient colors
}
```

**Color options:**
```
from-blue-500 to-cyan-500
from-purple-500 to-pink-500
from-green-500 to-emerald-500
from-orange-500 to-red-500
from-yellow-500 to-orange-500
```

### 3. Update Your Skills
**File**: `src/components/Skills.jsx`

```jsx
// Add/edit skill categories (around line 4)
{
  category: 'Your Skill Category',
  icon: '💬',
  skills: ['Skill1', 'Skill2', 'Skill3'],
  color: 'from-blue-500 to-cyan-500'
}
```

### 4. Update Education
**File**: `src/components/Education.jsx`

```jsx
// Update education array (around line 4)
{
  degree: 'Your Degree',
  institution: 'Your University',
  period: 'Aug 2024 – May 2026',
  gpa: '3.91/4.0',
  location: 'City, State',
  cohort: 'Your Cohort',
  courses: ['Course1', 'Course2', 'Course3'],
  color: 'from-blue-500 to-cyan-500'
}
```

### 5. Change Color Theme
**File**: `tailwind.config.js`

```js
// Around line 9
colors: {
  primary: {
    50: '#eef2ff',
    500: '#6366f1',  // Change this
    600: '#4f46e5',  // Change this
    700: '#4338ca',  // Change this
    900: '#312e81',  // Change this
  },
  secondary: {
    400: '#22d3ee',  // Change this
    500: '#06b6d4',  // Change this
    600: '#0891b2',  // Change this
  }
}
```

---

## Development Commands

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Deploy to GitHub Pages
npm run deploy

# Format code (if prettier installed)
npm run format
```

---

## Troubleshooting

### Port already in use
```bash
npm run dev -- --port 3000
```

### Build fails
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Changes not showing in production
```bash
npm run build
# Clear browser cache (Ctrl+Shift+Delete)
npm run deploy
```

### GitHub Pages not updating
1. Wait 1-2 minutes for deployment
2. Hard refresh: Ctrl+Shift+R
3. Check GitHub Actions for errors
4. Verify `base` in vite.config.js

---

## Performance Tips

1. **Optimize Images**
   - Use WebP format
   - Compress to < 100KB
   - Use appropriate dimensions

2. **Code Splitting**
   - Vite does this automatically
   - Check Network tab in DevTools

3. **Minimize Bundle**
   - Remove unused packages
   - Tree-shake unused code

---

## Next Level Enhancements

After launch, consider adding:

1. **Blog Section**
   - Write about your projects
   - Share technical insights

2. **Contact Form**
   - Formspree, Netlify Forms, or Backend

3. **Analytics**
   - Google Analytics or Plausible
   - Track visitors

4. **Search**
   - Add search functionality
   - Index blog posts

5. **Comments**
   - Disqus or GitHub Discussions
   - Engage with readers

6. **Dark Mode Toggle**
   - Switch between light/dark
   - User preference

---

## Deployment Checklist

Before going live:

- [ ] All personal info updated
- [ ] Projects list complete
- [ ] Skills accurate
- [ ] Contact info correct
- [ ] No broken links
- [ ] Tested on mobile
- [ ] Performance optimized
- [ ] SEO tags added
- [ ] Social links working
- [ ] Build succeeds

---

## Support Resources

- **React**: https://react.dev
- **Vite**: https://vitejs.dev
- **Tailwind**: https://tailwindcss.com
- **Framer Motion**: https://www.framer.com/motion
- **Lucide Icons**: https://lucide.dev

---

## Quick Links

- **Live Portfolio**: https://thanuja0911.github.io
- **GitHub Repo**: https://github.com/Thanuja0911
- **Email**: mthanuja1120@gmail.com
- **LinkedIn**: https://linkedin.com/in/thanuja-thanu-20

---

## Questions?

If anything is unclear:
1. Check the component files - they're well commented
2. Refer to official docs (links above)
3. Ask in GitHub Issues
4. Email: mthanuja1120@gmail.com

---

**You're all set! 🎉 Deploy and show your amazing portfolio to the world!**
