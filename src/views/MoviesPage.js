import { useState, useEffect } from "react";
import { createUseStyles } from "react-jss";
import queryString from "query-string";
import PropTypes from "prop-types";

import { getQueryMovies } from "../utils/themovieAPI";
import MoviesList from "../MoviesList/MoviesList";

const useStyles = createUseStyles({
  SearchForm: {
    marginTop: "6px",
    marginBottom: "6px",
    display: "flex",
    textAlign: "center",
    alignItems: "center",
    width: "100%",
    maxWidth: "600px",
    backgroundColor: "#fff",
    border: "solid 1px",
    borderRadius: "3px",
    overflow: "hidden",
  },

  SearchFormButton: {
    display: "inlineBlock",
    width: "34px",
    height: "34px",
    border: "0",
    backgroundImage:
      "url('https://image.flaticon.com/icons/svg/149/149852.svg')",
    backgroundSize: "40%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    opacity: "0.6",
    transition: "opacity 250ms cubic-bezier(0.4, 0, 0.2, 1)",
    cursor: "pointer",
    outline: "none",
    "&:hover": { opacity: "1" },
  },

  SearchFormButtonLabel: {
    position: "absolute",
    width: "1px",
    height: "1px",
    padding: "0",
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    clipPath: "inset(50%)",
    border: "0",
  },

  SearchFormInput: {
    display: "inline-block",
    width: "100%",
    font: "inherit",
    fontSize: "20px",
    border: "none",
    outline: "none",
    paddingLeft: "4px",
    paddingRight: "4px",
    "&::placeholder": {
      font: "inherit",
      fontSize: "18px",
    },
  },
});

const MoviesPage = ({ history, location }) => {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const [queryMovies, SetQueryMovies] = useState([]);

  const classes = useStyles();

  const handleSearc = (e) => setSearch(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search !== "") {
      setQuery(search);
    }
  };

  useEffect(() => {
    if (query === "") return;
    history.push({
      ...location,
      search: `?query=${query}`,
    });
  }, [query]);

  useEffect(() => {
    if (location.search !== "") {
      const parse = queryString.parse(location.search);
      getQueryMovies(parse.query).then((data) => SetQueryMovies(data));
    }
  }, [location.search]);

  return (
    <>
      <form className={classes.SearchForm} onSubmit={handleSubmit}>
        <input
          className={classes.SearchFormInput}
          type="text"
          autocomplete="off"
          // autofocus
          placeholder="Search movie"
          onChange={handleSearc}
          value={search}
        />

        <button type="submit" className={classes.SearchFormButton}>
          <span className={classes.SearchFormButtonLabel}>Search</span>
        </button>
      </form>
      <MoviesList moviesList={queryMovies} location={location} />
    </>
  );
};

export default MoviesPage;

MoviesPage.propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};
