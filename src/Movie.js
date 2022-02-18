import React from 'react';
import MovieList from './MovieList';

export default function Movie({ movie }) {
  return (
    <div>
      <h3>{movie.title}</h3>
      <h5>{movie.overview}</h5>
      <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} />
    </div>
  );
}
