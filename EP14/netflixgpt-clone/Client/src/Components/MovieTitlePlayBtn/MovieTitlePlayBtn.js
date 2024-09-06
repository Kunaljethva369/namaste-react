import React from 'react'

function MovieTitlePlayBtn({original_title,overview}) {
    return (
        <div className="absolute top-[30%] left-20 right-0 bottom-0 flex flex-col justify-between z-10">
            <div className="p-4">
                <h1 className="text-white text-6xl font-bold">{original_title}</h1>
                <h4 className='text-white text-md font-bold max-w-lg mt-5'>{overview}</h4>
                <div className="mt-4">
                    <button className="bg-white text-black py-2 px-6 rounded-lg mr-4">
                        Play
                    </button>
                    <button className="bg-gray-800 text-white py-2 px-6 rounded-lg">
                        More Info
                    </button>
                </div>
            </div>
        </div>
    )
}

export default MovieTitlePlayBtn;