import { useState, useEffect } from "react";
import { createUseStyles } from "react-jss";
import { getQueryMovies } from "../utils/themovieAPI";
import MoviesList from "../MoviesList/MoviesList";
import PropTypes from "prop-types";

// const MoviesPage = () => {
//   return <h2>MoviesPage</h2>;
// };

// export default MoviesPage;

const useStyles = createUseStyles({
  Searchbar: {
    top: "0",
    left: "0",
    position: "sticky",
    zIndex: "1100",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "64px",
    paddingRight: "24px",
    paddingLeft: "24px",
    paddingTop: "12px",
    paddingBottom: "12px",
    color: "#fff",
    backgroundColor: "#3f51b5",
    boxShadow:
      "0px 2px 4px -1px rgba(0, 0, 0, 0.2) 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)",
  },

  SearchForm: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    maxWidth: "600px",
    backgroundColor: "#fff",
    borderRadius: "3px",
    overflow: "hidden",
  },

  SearchFormButton: {
    display: "inlineBlock",
    width: "48px",
    height: "48px",
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

const MoviesPage = ({}) => {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const [queryMovies, SetQueryMovies] = useState([]);

  const classes = useStyles();

  const handleSearc = (e) => setSearch(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(search);
  };

  useEffect(() => {
    if (query !== "") {
      getQueryMovies(query).then((data) => SetQueryMovies(data));
      // console.log(query);
    }
  }, [query]);
  return (
    <>
      <header className={classes.Searchbar}>
        <form className={classes.SearchForm} onSubmit={handleSubmit}>
          <button type="submit" className={classes.SearchFormButton}>
            <span className={classes.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={classes.SearchFormInput}
            type="text"
            // autocomplete="off"
            // autofocus
            placeholder="Search images and photos"
            onChange={handleSearc}
            value={search}
          />
        </form>
      </header>
      <MoviesList moviesList={queryMovies} />
    </>
  );
};

export default MoviesPage;

// MoviesPage.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };
