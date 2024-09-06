import { useEffect } from "react";

const useNowPlayingMovie = () => {
    const getMovies = async () => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNjgzZTc0ZDIyOTkzNDE2ZmJkZjM0N2JlNjQwYzBmZSIsIm5iZiI6MTcyNTE5OTczMy4yMzQ4NTEsInN1YiI6IjY2ZDIwYzE1Mjk0ZjkzM2RkOTAxYjllMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.07XalCeJiwdVtcRmnS6OdDqx4hLWp54Sjr5pfJSrzGY'
            }
        };

        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?&page=1',options)
        const json = await data.json();
        return json.results;
    }
    useEffect(() => {
        getMovies();
    },[]);
}


export default useNowPlayingMovie;
