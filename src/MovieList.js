import React from 'react';
import WatchlistItem from './WatchlistItem';

export default function MovieList() {
  return (
    <div>
      {movies.map((movie, i) => <WatchlistItem key={`${movie.title}-${i}`} movie={movie}/>)}
    </div>
  );
}
