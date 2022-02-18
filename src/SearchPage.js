import React from 'react';
import { useState, useEffect } from 'react';

export default function SearchPage() {
  const [searchTitle, setSearchTitle] = useState();
  const [movies, setMovies] = useState([]);
  
    handleSearch(e) {
        e.preventDefault();

        const movieResults = await searchMovies(searchTitle);

        setMovies(movieResults);
    }
    
  return (
    <div>SearchPage</div>
  );
}
