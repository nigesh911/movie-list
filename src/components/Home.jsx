import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';

const API_KEY = 'YOUR_TMDB_API_KEY'; // Replace with your TMDB API key

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`);
        setTrendingMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching trending movies", error);
      }
    };

    fetchTrendingMovies();
  }, []);

  return (
    <div className="home">
      <h1>Trending Movies</h1>
      <div className="movie-grid">
        {trendingMovies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Home;
