import { NavLink, withRouter } from "react-router-dom";
import { createUseStyles } from "react-jss";
import PropTypes from "prop-types";

const useStyles = createUseStyles({
  FilmGalleryItem: {
    borderRadius: "2px",
    boxShadow: [
      "0px 1px 3px 0px rgba(0, 0, 0, 0.2)",
      "0px 1px 1px 0px rgba(0, 0, 0, 0.14)",
      "0px 2px 1px -1px rgba(0, 0, 0, 0.12)",
    ],
  },

  FilmGalleryItemImage: {
    // width: "100%",
    // height: "260px",
    objectFit: "cover",
    transition: "transform 250ms cubic-bezier(0.4, 0, 0.2, 1)",
    "&:hover": {
      transform: "scale(1.03)",
      cursor: "zoom-in",
    },
  },
});

const MoviesItem = ({ url, title, id, location }) => {
  const classes = useStyles();
  // console.log(search);
  return (
    <>
      <li className={classes.FilmGalleryItem}>
        <NavLink
          to={{
            pathname: `/movies/${id}`,
            state: {
              from: location,
            },
          }}
        >
          {url && (
            <img
              className="film-picture"
              src={`https://image.tmdb.org/t/p/w300${url}`}
              alt="film card"
              className={classes.FilmGalleryItemImage}
            />
          )}
          <h3>{title}</h3>
          {/* {console.log(location)} */}
        </NavLink>
      </li>
    </>
  );
};

export default withRouter(MoviesItem);
