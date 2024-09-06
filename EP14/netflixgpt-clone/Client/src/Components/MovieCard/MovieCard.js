import React from 'react'

function MovieCard({ title,poster_path,tag }) {
  return (
    <div className="min-w-[220px] bg-gray-800 rounded-lg shadow-md overflow-hidden mx-2">
        <img src={`https://image.tmdb.org/t/p/original${poster_path}`} alt={title} className="w-full h-40 object-cover" />
        <div className="p-3">
            <h3 className="text-white text-sm font-semibold">{title}</h3>
            <p className="text-red-500 text-xs mt-1">{tag}</p>
        </div>
    </div>
  )
}

export default MovieCard;