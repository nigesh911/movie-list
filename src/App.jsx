import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import MovieList from './components/MovieList';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './styles.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/my-list" element={<MovieList />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
