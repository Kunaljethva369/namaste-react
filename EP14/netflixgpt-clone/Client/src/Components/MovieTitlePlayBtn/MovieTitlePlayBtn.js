import React from 'react'

function MovieTitlePlayBtn({original_title,overview}) {
    if(window.innerWidth < 767){
        overview = overview.slice(0,20) + "...";
    }
    return (
        <div className="absolute sm:top-[30%] top-20 left-0 sm:left-20 right-0 flex flex-col justify-between z-10">
            <div className="sm:p-4 p-2">
                <h1 className="text-white sm:text-6xl text-2xl font-bold">{original_title}</h1>
                <h4 className='text-white sm:text-md text-sm font-bold max-w-lg sm:mt-5 mt-2'>{overview}</h4>
                <div className="sm:mt-4 mt-2">
                    <button className="bg-white text-black sm:py-2 sm:px-6 py-1 px-3 rounded-lg sm:mr-4 mr-2">
                        Play
                    </button>
                    <button className="bg-gray-800 text-white sm:py-2 sm:px-6 py-1 px-3 rounded-lg">
                        More Info
                    </button>
                </div>
            </div>
        </div>
    )
}

export default MovieTitlePlayBtn;