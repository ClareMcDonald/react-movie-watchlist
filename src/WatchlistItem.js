import React from 'react';
import MovieList from './MovieList';

export default function WatchlistItem({ movie }) {
  return (
    <div>
      <h3>{movie.title}</h3>
      <h5>{movie.description}</h5>
      <img src={`https://image.tmdb.org/t/p/original${movie.poster}`} />
    </div>
  );
}
