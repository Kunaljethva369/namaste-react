import React from 'react';
import BgPlayingMoive from '../BgPlayingMoive/BgPlayingMoive';
import MovieTitlePlayBtn from '../MovieTitlePlayBtn/MovieTitlePlayBtn';
import { useQuery } from '@tanstack/react-query';
import MovieList from '../MovieList/MoiveList';

function Browse() {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNjgzZTc0ZDIyOTkzNDE2ZmJkZjM0N2JlNjQwYzBmZSIsIm5iZiI6MTcyNTE5OTczMy4yMzQ4NTEsInN1YiI6IjY2ZDIwYzE1Mjk0ZjkzM2RkOTAxYjllMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.07XalCeJiwdVtcRmnS6OdDqx4hLWp54Sjr5pfJSrzGY'
    }
  };
  const { isPending,error,data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      fetch('https://api.themoviedb.org/3/movie/now_playing?&page=1',options).then((res) =>
        res.json(),
      ),
  });


  if (isPending) {
    return (
      <div className="flex flex-col space-y-4 p-4">
        <div className="w-full h-60 bg-gray-300 animate-pulse"></div>
        <div className="h-6 bg-gray-300 animate-pulse"></div>
        <div className="h-6 bg-gray-300 animate-pulse w-3/4"></div>
        <div className="h-6 bg-gray-300 animate-pulse w-1/2"></div>
      </div>
    )
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data || !data.results || data.results.length === 0) {
    return <div>No data available</div>
  }
  console.log(data?.results);
  const { original_title,overview,id } = data?.results[0];
  return (
    <>
      <div className='sm:pt-[30%] bg-black md:pt-0 relative sm:h-svh'>
        <BgPlayingMoive id={id} />
        <MovieTitlePlayBtn original_title={original_title} overview={overview} />
      </div>
      <MovieList title={"Top Playing"} allMovieData={data?.results.splice(1)} marginTop={'-15rem'} />
    </>
  )
}

export default Browse;