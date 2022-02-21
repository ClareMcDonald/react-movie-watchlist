import React from 'react';
import { useState, useEffect } from 'react';
import { getWatchlistItems } from './services/fetch-utils';
import MovieList from './MovieList';

export default function WatchlistPage() {
  const [movies, setMovies] = useState([]);
   
  async function fetchWatchlist() {
    const watchList = await getWatchlistItems();
    setMovies(watchList);
      
  }

  useEffect(() => {
      
    fetchWatchlist();
        
  }, []);

  return (
    <div>
      <h3>Watchlist</h3>
      <MovieList movies={movies} fetchWatchlist={fetchWatchlist} />
    </div>
  );
}