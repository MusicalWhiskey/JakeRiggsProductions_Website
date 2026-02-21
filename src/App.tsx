import { useEffect } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Media from './pages/Media';
import Contact from './pages/Contact';
import './App.css';
import BackgroundVideo from './assets/Website_Background.mp4';

function App() {
  // Debug code: Monitor video loading and playback events
  useEffect(() => {
    const video = document.querySelector('.background-video') as HTMLVideoElement | null;
    if (video) {
      console.log('Video element found:', video);

      video.addEventListener('loadeddata', () => {
        console.log('Video loadeddata event fired – metadata ready');
      });

      video.addEventListener('canplay', () => {
        console.log('Video canplay – ready to play');
        video.play().catch(e => console.error('Play failed:', e));
      });

      video.addEventListener('error', (e) => {
        console.error('Video error event:', e);
      });

      video.addEventListener('playing', () => {
        console.log('Video is now playing!');
      });

      // Optional: Try to force play on mount (some browsers allow after interaction)
      video.load();
      video.play().catch(e => console.log('Initial autoplay attempt failed:', e));
    } else {
      console.warn('Video element not found in DOM');
    }

    // Cleanup listeners on unmount
    return () => {
      if (video) {
        video.removeEventListener('loadeddata', () => {});
        video.removeEventListener('canplay', () => {});
        video.removeEventListener('error', () => {});
        video.removeEventListener('playing', () => {});
      }
    };
  }, []); // Empty array = run once on mount

  return (
    <BrowserRouter basename="/JakeRiggsProductions_Website/">
      <div className="app">
        {/* Full-screen background video */}
        <video
          className="background-video"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={BackgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Optional dark overlay for better text contrast */}
        <div className="video-overlay" />

        {/* All visible content sits above video/overlay */}
        <div className="content-wrapper">
          <Navigation />

          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/media" element={<Media />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>

          <footer className="footer">
            <p>© 2024 Jake Riggs. All rights reserved.</p>
          </footer>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;