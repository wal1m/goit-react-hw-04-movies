import { useState, useEffect } from "react";
import { NavLink, Route } from "react-router-dom";
import { createUseStyles } from "react-jss";
import { getMovieDetails } from "../utils/themovieAPI";

import routes from "../routes";

import Cast from "../Cast/Cast";
import Reviews from "../Reviews/Reviews";
// import MovieCard from "../MovieCard/MovieCard";

const useStyles = createUseStyles({
  MovieCard: {
    display: "flex",
  },

  DescriptionFilm: {
    marginLeft: "10px",
  },

  ButtobBack: {
    marginBottom: "6px",
  },
});

const MovieDetailsPage = ({ match, location, history }) => {
  const [movieDetails, SetMovieDetails] = useState(null);

  useEffect(() => {
    const { movieId } = match.params;
    // console.log(movieDetails);
    getMovieDetails(movieId).then((data) => SetMovieDetails(data));
  }, []);

  const handleButonClick = () => {
    // console.log(location.state.from);
    history.push(location?.state?.from || routes.home);
    // history.push(location?.state?.from || "../");
  };

  const { url } = match;
  const classes = useStyles();
  return (
    <>
      {/* <MovieCard movieDetails={movieDetails} /> */}
      {movieDetails && (
        <div className={classes.MovieCard}>
          <div className={classes.MovieImage}>
            <button onClick={handleButonClick} className={classes.ButtobBack}>
              &#8592; Go back
            </button>
            <img
              className="film-picture"
              src={`https://image.tmdb.org/t/p/w300${movieDetails.poster_path}`}
              alt="film card"
              // className={classes.FilmGalleryItemImage}
            />
          </div>
          <div className={classes.DescriptionFilm}>
            <h3>
              {movieDetails.title}({Number.parseInt(movieDetails.release_date)})
            </h3>
            <p>User Score: {movieDetails.vote_average * 10}%</p>
            <h4>Overview</h4>
            <p>{movieDetails.overview}</p>
            <h5>Genres</h5>
            {movieDetails.genres?.map(({ name, id }) => (
              <span key={id}>{name} </span>
            ))}
          </div>
        </div>
      )}
      <ul>
        <li>
          <NavLink
            // className={classes.navLink}
            // activeClassName={classes.isActive}
            to={`${url}/cast`}
            // to={{
            // pathname: `${match.url}${routes.cast}`,
            // state: { from: location.state.from },
            // }}
          >
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink
            className={classes.navLink}
            // activeClassName={classes.isActive}
            to={`${url}/reviews`}
            // to={{
            // pathname: `${match.url}${routes.cast}`,
            // state: { from: location.state.from },
            // }}
          >
            Reviews
          </NavLink>
        </li>
      </ul>
      <Route path={`${match.path}/cast`} component={Cast} />
      <Route path={`${match.path}/reviews`} component={Reviews} />
    </>
  );
};

export default MovieDetailsPage;
