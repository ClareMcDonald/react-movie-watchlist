import React from 'react';
import { addToWatchlist } from './services/fetch-utils';

export default function Movie({ movie, isOnWatchlist, fetchWatchlist }) {
  const haveWatched = isOnWatchlist(movie.id);
  async function handleClick() {
    if (!haveWatched) {
      const watchlistItem = {
        title: movie.title,
        api_id: movie.id,
        description: movie.overview,
        poster: movie.poster_path,
      };
      
      await addToWatchlist(watchlistItem);
      await fetchWatchlist();
    }
  }
    
  return (
    <div title="movie-item" onClick={handleClick} className={`movie-item ${haveWatched} ? 'watched' : ''}`}>
      <h1>{haveWatched && '❤️'}</h1>
      <h3>{movie.title}</h3>
      <h5>{movie.overview}</h5>
      <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} />
    </div>
  );
}
