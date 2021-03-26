import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getMovieDetails } from "../utils/themovieAPI";
import MovieCard from '../MovieCard/MovieCard'

const MovieDetailsPage = (props) => {
  const [movieDetails, SetMovieDetails] = useState({});

  useEffect(() => {
    const { movieId } = props.match.params;
    // console.log(movieDetails);
       getMovieDetails(movieId).then((data) => SetMovieDetails(data));
  }, []);

  return  (
    <>
      <h2>MovieDetailsPage</h2>
      <MovieCard movieDetails={movieDetails} />
    </>
  );
};

export default MovieDetailsPage;
