import React from 'react';

const MovieCard = ({ movie, onAddReview }) => {
  return (
    <div className="movie-card">
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      <h2>{movie.title}</h2>
      <button onClick={onAddReview}>Add Review</button>
    </div>
  );
};

export default MovieCard;
