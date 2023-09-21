import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './endpart.css';

const YouTubeChannel = () => {
  const [channelInfo, setChannelInfo] = useState({});
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    // Your YouTube Data API key
    const apiKey = 'AIzaSyBDJWWPgSap_YzmLHQ-93slHptX8cnBH7U';

    // The channel ID for Total Chess
    const channelId = 'UCkx8EaS4ENETB1c782UCVaw';

    // Fetch channel information
    axios.get(`https://www.googleapis.com/youtube/v3/channels?key=${apiKey}&id=${channelId}&part=snippet,liveStreamingDetails`)
      .then(response => {
        setChannelInfo(response.data.items[0]);
      })
      .catch(error => {
        console.error('Error fetching channel information:', error);
      });

    // Fetch the list of videos from the channel using the YouTube Data API
    axios.get(`https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=100`)
      .then(response => {
        setVideos(response.data.items);
      })
      .catch(error => {
        console.error('Error fetching videos:', error);
      });
  }, []);

  return (
    <div className="youtube-channel">
      <div className="channel-header">
        <div className="channel-banner">
          <img src={channelInfo.snippet?.thumbnails.banner.url} alt="Channel Banner" />
        </div>
        <div className="channel-info">
          <img src={channelInfo.snippet?.thumbnails.medium.url} alt="Channel Logo" className="channel-logo" />
          <h1 className="channel-title">{channelInfo.snippet?.title}</h1>
          <p className="channel-description">{channelInfo.snippet?.description}</p>
          {channelInfo.liveStreamingDetails && channelInfo.liveStreamingDetails.activeLiveChatId && (
            <p className="live-status">Live Now!</p>
          )}
        </div>
      </div>

      <div className="video-list">
        {videos.map(video => (
          <div className="video" key={video.id.videoId}>
            <a
              href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="video-thumbnail">
                <img src={video.snippet?.thumbnails.medium.url} alt={video.snippet?.title} />
              </div>
              <div className="video-details">
                <h2 className="video-title">{video.snippet?.title}</h2>
                <p className="video-published">{new Date(video.snippet?.publishedAt).toLocaleDateString()}</p>
                <p className="video-description">{video.snippet?.description}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YouTubeChannel;
