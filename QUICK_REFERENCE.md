# Quick Reference Card 📋

## 🚀 Common Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Install dependencies
npm install
```

## 📝 Quick Edits

### Add YouTube Video
**File:** `src/pages/Media.tsx`
```tsx
{
  id: 7,
  title: 'My New Video',
  description: 'Description here',
  youtubeId: 'VIDEO_ID', // From: youtube.com/watch?v=VIDEO_ID
}
```

### Change Navigation Brand
**File:** `src/components/Navigation.tsx` (Line ~11)
```tsx
<Link to="/" className="nav-brand">
  Your Name Here 🎶
</Link>
```

### Update Social Links
**Files:** 
- `src/pages/Home.tsx` (Lines ~28-50)
- `src/pages/Contact.tsx` (Lines ~65-75)

### Change Colors
**Search & Replace in `src/styles/*.css`:**
- `#646cff` → Your primary color
- `#c864ff` → Your secondary color
- `#1a1a2e` → Your background color

## 📂 File Locations

| What to Edit | File |
|--------------|------|
| Home page content | `src/pages/Home.tsx` |
| About page content | `src/pages/About.tsx` |
| YouTube videos | `src/pages/Media.tsx` |
| Contact form | `src/pages/Contact.tsx` |
| Navigation menu | `src/components/Navigation.tsx` |
| Home page styles | `src/styles/Home.css` |
| Media page styles | `src/styles/Media.css` |
| Footer | `src/App.tsx` (bottom) |

## 🎨 CSS Variables to Change

### Navigation Colors
**File:** `src/styles/Navigation.css`
- Line 2: `background-color: rgba(26, 26, 26, 0.95);`
- Line 3: `border-bottom: 1px solid rgba(100, 108, 255, 0.1);`

### Button Colors
**File:** `src/styles/Home.css`
- Line 61-63: `.social-button.spotify` - Spotify green
- Line 70-72: `.social-button.youtube` - YouTube red
- Line 79-81: `.social-button.instagram` - Instagram gradient

### Primary Theme Color
**Search across all CSS files for:** `#646cff`

## 🔧 Troubleshooting

### Server won't start?
```bash
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Port already in use?
```bash
npx kill-port 5173
# Or use different port
npm run dev -- --port 3000
```

### Changes not showing?
- Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
- Clear cache and reload

### Videos not loading?
- Check video ID is correct
- Verify video is public on YouTube
- Check internet connection

## 📊 Page Routes

| URL | Component | File |
|-----|-----------|------|
| `/` | Home | `src/pages/Home.tsx` |
| `/about` | About | `src/pages/About.tsx` |
| `/media` | Media | `src/pages/Media.tsx` |
| `/contact` | Contact | `src/pages/Contact.tsx` |

## 🎯 TrackTile Component Props

```jsx
<TrackTile
  title="string"           // Required
  description="string"     // Optional
  type="video-youtube"     // Required: video-youtube, video-selfhosted, 
                          //           audio-selfhosted, audio-soundcloud
  url="string"            // Required: embed URL
  thumbnail="string"      // Optional: for self-hosted videos
/>
```

## 📱 Responsive Breakpoints

- Desktop: `> 968px`
- Tablet: `768px - 968px`
- Mobile: `< 768px`

## 🌐 Important URLs

- Local dev: `http://localhost:5173`
- Spotify: [Your Spotify Link]
- YouTube: [@JakeRiggs](https://www.youtube.com/@JakeRiggs)
- Instagram: [@musical_whiskey](https://www.instagram.com/musical_whiskey/)

## 📦 Project Stats

- **Components:** 2 (Navigation, TrackTile)
- **Pages:** 4 (Home, About, Media, Contact)
- **Style Files:** 5 (Navigation, Home, About, Media, Contact)
- **Total React Files:** 8
- **Total CSS Files:** 6

## ⚡ Performance Tips

1. Optimize images before adding to `src/assets/`
2. Lazy load videos if adding many
3. Compress CSS in production build
4. Use WebP images when possible
5. Minimize custom fonts

## 🎨 Design System

### Spacing
- Small: `1rem`
- Medium: `2rem`
- Large: `3rem`
- Extra Large: `4rem`

### Border Radius
- Small: `8px`
- Medium: `12px`
- Large: `16px`
- Extra Large: `20px`

### Transitions
- Fast: `0.25s`
- Normal: `0.3s`
- Slow: `0.5s`

## 🚀 Deployment Checklist

- [ ] Replace placeholder YouTube IDs
- [ ] Update all personal information
- [ ] Test all links
- [ ] Test on mobile device
- [ ] Run `npm run build`
- [ ] Test production build with `npm run preview`
- [ ] Upload `dist/` folder to hosting service

## 📞 Support Resources

- React Docs: https://react.dev
- Vite Docs: https://vitejs.dev
- React Router: https://reactrouter.com
- TypeScript: https://www.typescriptlang.org

---

**💡 Pro Tip:** Keep this file open while developing for quick reference!
