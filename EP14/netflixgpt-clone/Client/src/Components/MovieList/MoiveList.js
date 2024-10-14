import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import './MovieList.css';

const MovieList = ({ title,allMovieData }) => {
  console.log(allMovieData);
  return (
    <div className="sm:mt-[-15rem] mt-0 sm:ml-6 bg-black p-6 movie-card">
      <h2 className="sm:text-2xl sm:relative z-10 text-md font-bold text-white sm:mb-4 mb-2 mt-4">{title}</h2>
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