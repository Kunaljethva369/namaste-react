import { useRef } from "react";
import GptOpenAi from '../../utils/GptOpenAi';

function GptSearchBar() {
    const searchText = useRef(null);

    const searchMovieTMDB = async (movie) => {
        const data = await fetch(
            "https://api.themoviedb.org/3/search/movie?query=" +
            movie +
            "&include_adult=false&language=en-US&page=1",
            "Bearer " + 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNjgzZTc0ZDIyOTkzNDE2ZmJkZjM0N2JlNjQwYzBmZSIsIm5iZiI6MTcyNTYxMDc3OS4zOTI2NzUsInN1YiI6IjY2ZDIwYzE1Mjk0ZjkzM2RkOTAxYjllMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CBOJLYsCaUF6F7wXcCVyyHJ9kHghXQg3sdo6teN_TvQ'
        );
        const json = await data.json();

        return json.results;
    };

    const handleGptSearchClick = async () => {
        console.log(searchText.current.value);
        // Make an API call to GPT API and get Movie Results

        const gptQuery =
            "Act as a Movie Recommendation system and suggest some movies for the query : " +
            searchText.current.value +
            ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

        const gptResults = await GptOpenAi.chat.completions.create({
            messages: [{ role: "user",content: gptQuery }],
            model: "gpt-3.5-turbo",
        });

        if (!gptResults.choices) {
            // TODO: Write Error Handling
        }

        console.log(gptResults.choices?.[0]?.message?.content);

        // Andaz Apna Apna, Hera Pheri, Chupke Chupke, Jaane Bhi Do Yaaro, Padosan
        const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");

        // ["Andaz Apna Apna", "Hera Pheri", "Chupke Chupke", "Jaane Bhi Do Yaaro", "Padosan"]

        // For each movie I will search TMDB API

        const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
        // [Promise, Promise, Promise, Promise, Promise]

        const tmdbResults = await Promise.all(promiseArray);

        console.log(tmdbResults);
    };

    return (
        <div>
            <form
                className="w-full flex"
                onSubmit={(e) => e.preventDefault()}
            >
                <input
                    ref={searchText}
                    type="text"
                    className=" p-4 m-2 text-black"
                    placeholder="What would you like to watch today?"
                />
                <button
                    className="m-2 py-2 px-4 bg-red-700 text-white rounded-lg"
                    onClick={handleGptSearchClick}
                >
                    search
                </button>
            </form>
        </div>
    )
}

export default GptSearchBar