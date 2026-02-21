<div align="center">

# 🎶 Jake Riggs Portfolio Website 🎶

  <br/>
  https://musicalwhiskey.github.io/JakeRiggsProductions_Website/
  <br/>

**Welcome to My Website!**

[![Spotify](https://img.shields.io/badge/Listen%20on-Spotify-1DB954?style=flat&logo=spotify&logoColor=white)](https://open.spotify.com/artist/6Y9hKt4BkCnnIPIKYyypyP?si=X8WpBBaGTi-mm9zNxu2KTA)
[![YouTube](https://img.shields.io/badge/Subscribe-YouTube-ff0000?style=flat&logo=youtube&logoColor=white)](https://www.youtube.com/@JakeRiggs)
[![Instagram](https://img.shields.io/badge/Follow-Instagram-E4405F?style=flat&logo=instagram&logoColor=white)](https://www.instagram.com/musical_whiskey/)

</div>

## Hey There! 👋

Please enjoy my music. Also, feel free to learn more about me!

---

## About This Project

A modern, responsive portfolio website built with React, TypeScript, and Vite featuring a media gallery with YouTube video integration.

## Features

- **Modern React Stack**: Built with React 19, TypeScript, and Vite for fast development and optimal performance
- **Multi-Page Navigation**: Smooth client-side routing with React Router
- **Responsive Design**: Fully responsive layout that works on all devices
- **Media Gallery**: Dedicated media page showcasing YouTube videos using the TrackTile component
- **Interactive UI**: Smooth animations and transitions throughout
- **Dark Theme**: Sleek dark theme with gradient accents

## Pages

### 🏠 Home

Welcome page with hero section, social media links, and introduction

### 👤 About

Learn more about my musical journey and skills

### 🎬 Media

Video gallery featuring YouTube content with embedded players using the TrackTile component

### 📧 Contact

Contact form and social media links for reaching out

## Project Structure

```
src/
├── components/
│   ├── Navigation.tsx      # Navigation bar component
│   └── TrackTile.jsx       # Reusable media tile component
├── pages/
│   ├── Home.tsx           # Home page
│   ├── About.tsx          # About page
│   ├── Media.tsx          # Media gallery page
│   └── Contact.tsx        # Contact page
├── styles/
│   ├── Navigation.css     # Navigation styles
│   ├── Home.css          # Home page styles
│   ├── About.css         # About page styles
│   ├── Media.css         # Media page styles
│   └── Contact.css       # Contact page styles
├── App.tsx               # Main app component with routing
├── main.tsx             # App entry point
└── index.css            # Global styles
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:

```bash
cd frontend/website_portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and visit: `http://localhost:5173`

## Customization

### Adding YouTube Videos

To add your own YouTube videos to the Media page, edit `src/pages/Media.tsx`:

1. Find the `videos` array
2. Replace the `youtubeId` values with your actual YouTube video IDs
3. Update titles and descriptions

Example:

```tsx
const videos = [
  {
    id: 1,
    title: "My Latest Track",
    description: "Check out my newest release",
    youtubeId: "YOUR_VIDEO_ID_HERE", // Get this from YouTube URL
  },
  // Add more videos...
];
```

To get the YouTube video ID:

- From URL: `https://www.youtube.com/watch?v=VIDEO_ID_HERE`
- Use the `VIDEO_ID_HERE` part

### Updating Social Links

Update social media links in:

- `src/pages/Home.tsx` - Hero section links
- `src/pages/Contact.tsx` - Contact page links

### Changing Colors

The main theme colors can be modified in the CSS files:

- Primary color: `#646cff`
- Secondary color: `#c864ff`
- Background: Gradient from `#1a1a2e` to `#16213e`

## TrackTile Component

The `TrackTile` component supports multiple media types:

- **YouTube Videos**: `type="video-youtube"`
- **Self-hosted Videos**: `type="video-selfhosted"`
- **Self-hosted Audio**: `type="audio-selfhosted"`
- **SoundCloud**: `type="audio-soundcloud"`

### Usage Example

```jsx
<TrackTile
  title="Video Title"
  description="Video description"
  type="video-youtube"
  url="https://www.youtube.com/embed/VIDEO_ID?rel=0"
/>
```

## Build for Production

To create a production build:

```bash
npm run build
```

The optimized files will be in the `dist/` directory.

## Preview Production Build

```bash
npm run preview
```

## Technologies Used

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **React Router DOM** - Client-side routing
- **CSS3** - Styling with modern features
- **EmailJS** - Send in Email While Using Embedded Form (YOU MUST USE GITHUB PAGE'S SECRETS TO APPLY YOUR KEYS!!!)

## Connect With Me

<div align="center">

[![Spotify](https://img.shields.io/badge/Listen%20on-Spotify-1DB954?style=flat&logo=spotify&logoColor=white)](https://open.spotify.com/artist/6Y9hKt4BkCnnIPIKYyypyP?si=X8WpBBaGTi-mm9zNxu2KTA)
[![YouTube](https://img.shields.io/badge/Subscribe-YouTube-ff0000?style=flat&logo=youtube&logoColor=white)](https://www.youtube.com/@JakeRiggs)
[![Instagram](https://img.shields.io/badge/Follow-Instagram-E4405F?style=flat&logo=instagram&logoColor=white)](https://www.instagram.com/musical_whiskey/)

</div>

## License

© 2024 Jake Riggs. All rights reserved.

---

<div align="center">
  <i>Made with ♫ and passion</i>
</div>
