import React from 'react';
import { useState, useEffect } from 'react';
import { getWatchlistItems } from './services/fetch-utils';
import WatchlistItem from './WatchlistItem';

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
      {movies.map((movie, i) => <WatchlistItem key={`${movie.title}-${i}`} movie={movie}/>)}
    </div>
  );
}
