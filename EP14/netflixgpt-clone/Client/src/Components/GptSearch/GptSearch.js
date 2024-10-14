// import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "../GptSearchBar/GptSearchBar";

const GPTSearch = () => {
  return (
    <>
      <div className="relative h-screen text-white flex pt-28 items-start justify-center">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/36a4db5b-dec2-458a-a1c0-662fa60e7473/1115a02b-3062-4dcc-aae0-94028a0dcdff/IN-en-20240820-TRIFECTA-perspective_WEB_eeff8a6e-0384-4791-a703-31368aeac39f_large.jpg"
          alt="background"
          className="absolute inset-0 object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 ">
          <GptSearchBar />
          {/* <GptMovieSuggestions /> */}
        </div>
      </div>
    </>
  );
};
export default GPTSearch;
