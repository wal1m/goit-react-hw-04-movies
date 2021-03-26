import { useState, useEffect } from "react";
import { getPopularMovies } from "../utils/themovieAPI";

// import PopularMoviesList from "../PopularMoviesItem.js/PopularMoviesItem";
import MoviesList from "../MoviesList/MoviesList";

const HomePage = () => {
  const [popularMovies, SetPopularMovies] = useState([]);

  useEffect(() => {
    getPopularMovies().then((data) => SetPopularMovies(data));
    // console.log(popularMovies);
  }, []);
  return (
    <>
      <h2>HomePage</h2>
      <MoviesList moviesList={popularMovies} />
     </>
  );
};

export default HomePage;
