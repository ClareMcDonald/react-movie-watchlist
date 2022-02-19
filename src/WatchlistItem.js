import React from 'react';
import { watchMovie } from './services/fetch-utils';

export default function WatchlistItem({ movie, fetchWatchlist }) {
  
  async function handleClick() {

    await watchMovie(movie.id);

    fetchWatchlist();
  }

  return (
    <div onClick={handleClick} className="watchlist-item">
      <h1>{movie.watched ? '✔️' : '👀'}</h1>
      <h3>{movie.title}</h3>
      <h5>{movie.description}</h5>
      <img src={`https://image.tmdb.org/t/p/original${movie.poster}`} />
    </div>
  );
}
