import { useEffect, useRef } from 'react';

interface TrackTileProps {
  id: number;
  title: string;
  type: string;
  url: string;
  thumbnail?: string;
  description?: string;
  isActive?: boolean;
  onPlay?: () => void;
}

const TrackTile = ({ title, type, url, thumbnail, description, isActive, onPlay }: TrackTileProps) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (!isActive && iframeRef.current) {
      const src = iframeRef.current.src;
      iframeRef.current.src = '';
      iframeRef.current.src = src;
    }
  }, [isActive]);

  return (
    <div className="tile" style={{ border: '1px solid #444', padding: '1rem', borderRadius: '8px', textAlign: 'center' }}>
      <h3>{title}</h3>
      {description && <p>{description}</p>}

      {type === 'video-youtube' && (
        <iframe
          ref={iframeRef}
          width="100%"
          height="200"
          src={url}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          onMouseDown={onPlay}
        ></iframe>
      )}

      {type === 'video-selfhosted' && (
        <video
          controls
          width="100%"
          height="auto"
          poster={thumbnail}
        >
          <source src={url} type="video/mp4" />
          Your browser doesn't support the video tag.
        </video>
      )}

      {type === 'audio-selfhosted' && (
        <audio controls style={{ width: '100%' }}>
          <source src={url} type="audio/mpeg" />
          Your browser doesn't support the audio element.
        </audio>
      )}

      {type === 'audio-soundcloud' && (
        <iframe
          width="100%"
          height="166"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src={url}
        ></iframe>
      )}
    </div>
  );
};

export default TrackTile;