# Setup Guide - Jake Riggs Portfolio Website

## Quick Start Guide

### Step 1: Install Dependencies
```bash
cd frontend/website_portfolio
npm install
```

### Step 2: Run Development Server
```bash
npm run dev
```

The website will be available at `http://localhost:5173`

## Customizing Your Content

### 1. Update YouTube Videos in Media Page

Open `src/pages/Media.tsx` and find the `videos` array:

```tsx
const videos = [
  {
    id: 1,
    title: 'Latest Release',
    description: 'Check out my newest track',
    youtubeId: 'dQw4w9WgXcQ', // ← REPLACE THIS
  },
  // Add more videos...
];
```

**How to get YouTube Video ID:**
- Go to your YouTube video
- Copy the URL: `https://www.youtube.com/watch?v=ABC123XYZ`
- The video ID is the part after `v=`: `ABC123XYZ`

### 2. Update Social Media Links

#### Home Page (`src/pages/Home.tsx`)
Look for the social links section:
```tsx
<a href="YOUR_SPOTIFY_LINK" ...>
<a href="YOUR_YOUTUBE_LINK" ...>
<a href="YOUR_INSTAGRAM_LINK" ...>
```

#### Contact Page (`src/pages/Contact.tsx`)
Update the social media links in the contact methods section.

### 3. Update Personal Information

#### About Page (`src/pages/About.tsx`)
- Update the journey section with your story
- Modify the skills list
- Change the philosophy quote

#### Contact Page (`src/pages/Contact.tsx`)
- Update the email address
- Modify contact methods

### 4. Customize Colors and Theme

All color schemes can be changed in the CSS files located in `src/styles/`:

**Main Colors:**
- Primary: `#646cff` (Blue)
- Secondary: `#c864ff` (Purple)
- Background: `#1a1a2e` → `#16213e` (Dark gradient)

**Where to change:**
- Navigation: `src/styles/Navigation.css`
- Home: `src/styles/Home.css`
- About: `src/styles/About.css`
- Media: `src/styles/Media.css`
- Contact: `src/styles/Contact.css`

## File Structure Overview

```
frontend/website_portfolio/
├── src/
│   ├── components/
│   │   ├── Navigation.tsx      # Top navigation bar
│   │   └── TrackTile.jsx       # Video/Audio tile component
│   ├── pages/
│   │   ├── Home.tsx           # Landing page
│   │   ├── About.tsx          # About page
│   │   ├── Media.tsx          # Video gallery
│   │   └── Contact.tsx        # Contact form
│   ├── styles/
│   │   └── *.css              # All styling files
│   ├── App.tsx                # Main app with routing
│   └── main.tsx               # Entry point
├── public/                     # Static assets
└── package.json               # Dependencies
```

## Common Tasks

### Adding a New Page

1. Create new file: `src/pages/NewPage.tsx`
2. Add route in `src/App.tsx`:
```tsx
<Route path="/newpage" element={<NewPage />} />
```
3. Add navigation link in `src/components/Navigation.tsx`
4. Create CSS file: `src/styles/NewPage.css`

### Adding More Videos

In `src/pages/Media.tsx`, just add more objects to the videos array:
```tsx
{
  id: 7,
  title: 'Your New Video',
  description: 'Description here',
  youtubeId: 'YOUR_VIDEO_ID',
},
```

### Changing the Logo/Brand Name

In `src/components/Navigation.tsx`, update:
```tsx
<Link to="/" className="nav-brand">
  Jake Riggs 🎶  {/* ← Change this */}
</Link>
```

### Updating Footer

In `src/App.tsx`, find the footer section:
```tsx
<footer className="footer">
  <p>© 2024 Jake Riggs. All rights reserved.</p>
  <p>Made with ♫ and passion</p>
</footer>
```

## Building for Production

### Create Production Build
```bash
npm run build
```

This creates optimized files in the `dist/` folder.

### Preview Production Build
```bash
npm run preview
```

### Deploy to Hosting

After building, upload the contents of the `dist/` folder to:
- Netlify
- Vercel
- GitHub Pages
- Any static hosting service

## Troubleshooting

### Development Server Won't Start
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Port Already in Use
```bash
# Kill process on port 5173
npx kill-port 5173
# Or use a different port
npm run dev -- --port 3000
```

### Videos Not Loading
- Check that the YouTube video ID is correct
- Ensure the video is not private or age-restricted
- Verify the embed URL format: `https://www.youtube.com/embed/VIDEO_ID?rel=0`

### Styling Issues
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Check browser console for CSS errors
- Verify CSS file imports in component files

## Tips for Success

1. **Test on Multiple Devices**: Use browser dev tools to test responsive design
2. **Optimize Images**: Compress images before adding to `src/assets/`
3. **Use Real Content**: Replace placeholder text with your actual content
4. **Check Links**: Verify all social media and external links work
5. **Update Regularly**: Keep adding new videos and content to keep site fresh

## Need Help?

- Check the main README.md for more information
- Review React documentation: https://react.dev
- Review Vite documentation: https://vitejs.dev

---

**Remember:** After making changes, save the file and the dev server will automatically reload! 🎉
