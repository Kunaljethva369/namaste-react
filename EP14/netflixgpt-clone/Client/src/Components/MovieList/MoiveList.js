import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import './MovieList.css';

const MovieList = ({ title, allMovieData }) => {
  return (
    <div className="mt-[-200px] ml-12 bg-white p-6">
      <h2 className="text-2xl font-bold text-white mb-4">{title}</h2>
      <div className="overflow-x-auto scroll-smooth no-scrollbar relative z-20">
        <div className="flex space-x-4">
          {allMovieData.map((movie,index) => (
            <MovieCard key={index} {...movie} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieList;