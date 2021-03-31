import { withRouter } from "react-router-dom";
import MoviesItem from "../MoviesItem/MoviesItem";
import { createUseStyles } from "react-jss";
import PropTypes from "prop-types";

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

const MoviesList = ({ moviesList }) => {
  const classes = useStyles();
  return (
    <ul className={classes.FilmGallery}>
      {moviesList.map(({ poster_path, id, title }) => (
        <MoviesItem
          url={poster_path}
          key={id}
          title={title}
          id={id}
        />
      ))}
    </ul>
  );
};

export default withRouter(MoviesList);

MoviesList.propTypes = {
  moviesList: PropTypes.array.isRequired,
};