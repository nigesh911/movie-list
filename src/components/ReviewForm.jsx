import React, { useState } from 'react';

const ReviewForm = ({ movie, closeForm }) => {
  const [review, setReview] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const savedList = JSON.parse(localStorage.getItem('myList')) || [];
    const updatedList = savedList.map(m => m.id === movie.id ? { ...m, review } : m);
    localStorage.setItem('myList', JSON.stringify(updatedList));
    closeForm();
  };

  return (
    <div className="review-form">
      <h2>Review for {movie.title}</h2>
      <form onSubmit={handleSubmit}>
        <textarea value={review} onChange={(e) => setReview(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
      <button onClick={closeForm}>Cancel</button>
    </div>
  );
};

export default ReviewForm;
