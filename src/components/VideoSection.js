import React from 'react';
import '../styles/VideoSection.css';
import websiteVideo from '../assets/videos/finished vid.mp4';

const VideoSection = () => {
  return (
    <section className="video-section">
      <div className="container">
        <div className="video-header">
          <h2 className="video-title">See Our Work in Action</h2>
          <div className="title-underline"></div>
          <p className="video-description">
            Watch how we transform businesses through strategic digital marketing
          </p>
        </div>
        <div className="video-container">
          <video 
            className="showcase-video" 
            controls 
            preload="metadata"
            poster=""
          >
            <source src={websiteVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;

