import { useQuery } from '@tanstack/react-query';
import React from 'react';

const BgPlayingMoive = ({ id }) => {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNjgzZTc0ZDIyOTkzNDE2ZmJkZjM0N2JlNjQwYzBmZSIsIm5iZiI6MTcyNTYxMDc3OS4zOTI2NzUsInN1YiI6IjY2ZDIwYzE1Mjk0ZjkzM2RkOTAxYjllMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CBOJLYsCaUF6F7wXcCVyyHJ9kHghXQg3sdo6teN_TvQ'
        }
    };

    const { isPending,error,data } = useQuery({
        queryKey: ['bgMovieData'],
        queryFn: () => {
            return fetch(`https://api.themoviedb.org/3/movie/${id}/videos`,options).then((res) =>
                res.json()
            )
        }
    })

    const trailerVideo = data?.results?.filter((ele) => {
        if (ele.type == "Trailer") {
            return ele;
        }
    })
    return (
        <div className="sm:absolute relative sm:top-[-10rem] top-10 left-0 right-0 bottom-0 aspect-video">
            <iframe
                src={`https://www.youtube.com/embed/${trailerVideo?.[0]?.key}?autoplay=1&mute=1&controls=0&modestbranding=1&fs=0&rel=0&loop=1`}
                width="100%"
                height="100%"
                className="absolute top-0 left-0"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="Background Video"
            ></iframe>
            <div className="absolute top-0 left-0 w-full h-full z-10"></div>
        </div >
    );
}

export default BgPlayingMoive;
