import PopularMoviesItem from "../PopularMoviesItem/PopularMoviesItem";
import { createUseStyles } from "react-jss";
// import PropTypes from "prop-types";

const useStyles = createUseStyles({
  FilmGallery: {
    display: "grid",
    maxWidth: "calc(100vw - 48px)",
    gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
    gridGap: "16px",
    marginTop: 0,
    marginBottom: 0,
    padding: 0,
    listStyle: "none",
    marginLeft: "auto",
    marginRight: "auto",
  },
});

const PopularMoviesList = ({ moviesList }) => {
  const classes = useStyles();
  return (
    <ul className={classes.FilmGallery}>
      {moviesList.map(({ poster_path, id, title }) => (
        <PopularMoviesItem url={poster_path} key={id} title={title} id={id} />
      ))}
    </ul>
  );
};

export default PopularMoviesList;
