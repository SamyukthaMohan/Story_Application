import React, { useState } from 'react';
import './PodcastEpisode.css'; 
import { IconButton } from '@mui/material';
import { Favorite, FavoriteBorder } from '@mui/icons-material';

function PodcastEpisode({ episode }) {
  const { title, description, audioUrl, imageUrl } = episode;
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="episode">
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <audio controls>
        <source src={audioUrl} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <IconButton className={`favorite-button ${isFavorite ? 'favorite' : ''}`} onClick={toggleFavorite}>
        {isFavorite ? <Favorite color="error" /> : <FavoriteBorder />}
      </IconButton>
    </div>
  );
}

export default PodcastEpisode;
