import React from 'react';
import '../styles/About.css';

const About: React.FC = () => {
  return (
    <div className="about-page">
      <div className="about-header">
        <h1>About Me</h1>
        <p className="subtitle">The Story Behind the Music</p>
      </div>

      <div className="about-content">
        <div className="about-section">
          <h2>My Journey</h2>
          <p>
            Music has always been my passion and creative outlet. From the first time I picked up 
            an instrument to producing tracks in my home studio, every step of this journey has been 
            about exploring sound and emotion.
          </p>
          <p>
            I believe music should make you feel something—whether it's nostalgia, joy, or just the 
            urge to move. That's what drives me to create.
          </p>
        </div>

        <div className="about-section">
          <h2>Musical Style</h2>
          <p>
            My sound blends various influences, creating something unique and personal. I love 
            experimenting with different genres and techniques, always pushing to create something 
            that resonates with listeners on a deeper level.
          </p>
        </div>

        <div className="about-section">
          <h2>Philosophy</h2>
          <p>
            "Music is the universal language that speaks when words fail. Every track I create is 
            a conversation, an experience, a moment captured in sound."
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
