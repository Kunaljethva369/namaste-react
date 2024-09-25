import React from 'react'

function MovieCard({ title,poster_path,tag }) {
  return (
    <div className="sm:min-w-[220px] min-w-[180px] bg-gray-800 rounded-lg shadow-md overflow-hidden sm:mx-2 mx-0">
        <img src={`https://image.tmdb.org/t/p/original${poster_path}`} alt={title} className="w-full h-40 object-cover" />
        <div className="p-3">
            <h3 className="text-white text-sm font-semibold">{title.length > 20 ? title.slice(0,20) + "..." : title }</h3>
            <p className="text-red-500 text-xs mt-1">{tag}</p>
        </div>
    </div>
  )
}

export default MovieCard;