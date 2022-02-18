import React from 'react';
import { useState, useEffect } from 'react';
import { searchMovies } from './services/fetch-utils.js';
import MovieList from './MovieList.js';

export default function SearchPage() {
  const [searchTitle, setSearchTitle] = useState();
  const [movies, setMovies] = useState([]);
  
  async function handleSearch(e) {
    e.preventDefault();

    const movieResults = await searchMovies(searchTitle);

    setMovies(movieResults);
  }
    
  return (
    <div>
      <form onSubmit={handleSearch}>
        <input value={searchTitle} onChange={e => setSearchTitle(e.target.value)} />
        <button>Search</button>
      </form>
      <section>
        Movie results:
        <MovieList movies={movies} />
      </section>
    </div>
      
  );
}
