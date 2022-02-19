import React from 'react';
import { useState, useEffect } from 'react';
import { searchMovies, getWatchlistItems } from './services/fetch-utils.js';
import MovieList from './MovieList.js';

export default function SearchPage() {
  const [searchTitle, setSearchTitle] = useState('');
  const [movies, setMovies] = useState([]);
  const [watchlist, setWatchlist] = useState([]);
  
  async function handleSearch(e) {
    e.preventDefault();

    const movieResults = await searchMovies(searchTitle);

    setMovies(movieResults);
  }
   
  async function fetchWatchlist() {
    const watchList = await getWatchlistItems();
    setWatchlist(watchList);
      
  }
    
  function isOnWatchlist(api_id) {
    const match = watchlist.find(movie => Number(movie.api_id) === Number(api_id));

    return Boolean(match);
  }

  useEffect(() => {
    fetchWatchlist();
  }, []);

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input value={searchTitle} onChange={e => setSearchTitle(e.target.value)} />
        <button>Search</button>
      </form>
      <section>
        Movie results:
        <MovieList movies={movies} isOnWatchlist={isOnWatchlist} fetchWatchlist={fetchWatchlist} />
      </section>
    </div>
      
  );
}
