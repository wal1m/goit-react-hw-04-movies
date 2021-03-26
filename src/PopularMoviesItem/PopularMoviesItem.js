import { Link } from "react-router-dom";
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

const PopularMoviesItem = ({ url, title, id }) => {
  const classes = useStyles();
  // console.log(props)
  return (
    <li className={classes.FilmGalleryItem}>
      <Link to={`/movies/${id}`}>
        <img
          className="film-picture"
          src={`https://image.tmdb.org/t/p/w300${url}`}
          alt="film card"
          className={classes.FilmGalleryItemImage}
        />
        <h3>{title}</h3>
      </Link>
      {/* <Link to={`/movies/${key}`}><h3> </h3></Link> */}

      {/* // onClick={onClick} */}
      {/* // urlBigImage={image.largeImageURL} */}
      {/* // onUrlImageModal={onUrlImageModal} */}
    </li>
  );
};

export default PopularMoviesItem;
