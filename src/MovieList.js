import React from 'react';
import WatchlistItem from './WatchlistItem';
import Movie from './Movie';

export default function MovieList({ movies, fetchWatchlist }) {
  return (
    <div className='movie-list'>
      {
        movies.map((movie, i) => location.pathname.includes('watchlist')
          ? <WatchlistItem
            key={`${movie.title}-${i}`}
            movie={movie}
            fetchWatchlist={fetchWatchlist} />
          : <Movie
            key={`${movie.title}-${i}`}
            movie={movie}
            fetchWatchlist={fetchWatchlist} />)
      }
    </div>
  );
}
