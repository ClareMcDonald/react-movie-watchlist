import React from 'react';
import MovieList from './MovieList';
import { addToWatchlist } from './services/fetch-utils';

export default function Movie({ movie }) {
  async function handleClick() {
    const watchlistItem = {
      title: movie.title,
      api_id: movie.id,
      description: movie.overview,
      poster: movie.poster_path,
    };
      
    await addToWatchlist(watchlistItem);
  }
    
  return (
    <div title="movie-item" onClick={handleClick}>
      <h3>{movie.title}</h3>
      <h5>{movie.overview}</h5>
      <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} />
    </div>
  );
}
