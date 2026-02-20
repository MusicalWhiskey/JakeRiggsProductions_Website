import React from 'react';
import '../styles/Home.css';
import headshot from '../assets/headshot.jpg';

const Home: React.FC = () => {
  return (
    <div className="home-page">
      <div className="hero-section">
        <h1 className="hero-title">Jake Riggs</h1>
        <img src={headshot} alt="Jake Riggs" className="hero-image" />
        <p className="hero-subtitle">Composer | Sound Designer | Producer 
          <br/>Programmer | Developer</p>
        <p className="hero-tagline">
          "Learn something new everyday, and never stop creating."
        </p>
        
        <div className="social-links">
          <a 
            href="https://open.spotify.com/artist/6Y9hKt4BkCnnIPIKYyypyP?si=X8WpBBaGTi-mm9zNxu2KTA" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-button spotify"
          >
            <span className="icon">🎵</span> Listen on Spotify
          </a>
          <a 
            href="https://www.youtube.com/@JakeRiggs" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-button youtube"
          >
            <span className="icon">▶️</span> Subscribe on YouTube
          </a>
          <a 
            href="https://www.instagram.com/musical_whiskey/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-button instagram"
          >
            <span className="icon">📸</span> Follow on Instagram
          </a>
        </div>
      </div>

      <div className="welcome-section">
        <h2>Welcome! 👋</h2>
        <p>
          Thanks for stopping by. I'm passionate about creating music that connects with people. 
          Whether you're here to discover new tracks, learn more about my journey, or just vibe out 
          to some tunes, I'm glad you're here.
        </p>
        <p>
          Explore my media page to check out my latest videos, learn more about me in the about section, 
          or get in touch if you'd like to collaborate or just say hi!
        </p>
      </div>
    </div>
  );
};

export default Home;
