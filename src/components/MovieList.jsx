import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import ReviewForm from './ReviewForm';

const MovieList = () => {
  const [myList, setMyList] = useState([]);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    const fetchMyList = async () => {
      const savedList = JSON.parse(localStorage.getItem('myList')) || [];
      setMyList(savedList);
    };

    fetchMyList();
  }, []);

  const handleAddReview = (movie) => {
    setSelectedMovie(movie);
    setShowReviewForm(true);
  };

  return (
    <div className="movie-list">
      <h1>My Movie List</h1>
      <div className="movie-grid">
        {myList.map(movie => (
          <MovieCard key={movie.id} movie={movie} onAddReview={() => handleAddReview(movie)} />
        ))}
      </div>
      {showReviewForm && selectedMovie && (
        <ReviewForm movie={selectedMovie} closeForm={() => setShowReviewForm(false)} />
      )}
    </div>
  );
};

export default MovieList;
