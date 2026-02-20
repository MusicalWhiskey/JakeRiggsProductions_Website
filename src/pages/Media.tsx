import React, { useState } from 'react';
import TrackTile from '../components/TrackTile.tsx';
import '../styles/Media.css';

const Media: React.FC = () => {
  const [activeVideoId, setActiveVideoId] = useState<number | null>(null);

  const videos = [
    {
      id: 1,
      title: 'Bunky Kart',
      description: 'Need Some Nostalgic Racing Music?',
      youtubeId: 'iRJkVeCir9k',
    },
    {
      id: 2,
      title: 'Unchosen',
      description: 'Hybrid Orchestral track with electronic and modern elements to carve out a unique sound',
      youtubeId: 'DuqKdva-ppg',
    },
    {
      id: 3,
      title: `A Warrior's Love`,
      description: 'We can bring more life to the tracks with real strings',
      youtubeId: 'G9D9iiiAKFM',
    },
    {
      id: 4,
      title: 'Bassically Piano Funk',
      description: 'Loops to transport you to a funky time',
      youtubeId: 'ZdY977duoUc',
    },
    {
      id: 5,
      title: 'Breathless',
      description: 'Ethereal and atmospheric track with haunting melodies, peculiar meters, and lush soundscapes',
      youtubeId: 'ZtoIlhj39bU',
    },
    {
      id: 6,
      title: 'Galactic Desert Games',
      description: 'How about some spacey desert vibes?',
      youtubeId: 'k8sI7CUciR4',
    },
  ];

  return (
    <div className="media-page">
      <div className="media-header">
        <h1>Media Gallery</h1>
        <p className="subtitle">Watch my latest videos and performances</p>
      </div>
      <div className="video-grid">
        {videos.map((video) => (
          <TrackTile
            key={video.id}
            id={video.id}
            title={video.title}
            description={video.description}
            type="video-youtube"
            url={`https://www.youtube.com/embed/${video.youtubeId}?rel=0&enablejsapi=1`}
            isActive={activeVideoId === video.id}
            onPlay={() => setActiveVideoId(video.id)}
          />
        ))}
      </div>
      <div className="media-footer">
        <p>Want to see more?</p>
        <a
          href="https://www.youtube.com/@JakeRiggs"
          target="_blank"
          rel="noopener noreferrer"
          className="youtube-link"
        >
          Visit My YouTube Channel →
        </a>
      </div>
    </div>
  );
};

export default Media;