// import { NavLink, Route } from "react-router-dom";
// import { createUseStyles } from "react-jss";

// const useStyles = createUseStyles({
//   MovieCard: {
//     display: "flex",
//   },

//   DescriptionFilm: {
//     marginLeft: "10px",
//   },
// });

// const MovieCard = ({ movieDetails }) => {
//   const classes = useStyles();

//   return (
//     <>
//       <div className={classes.MovieCard}>
//         <div className={classes.MovieImage}>
//           <img
//             className="film-picture"
//             src={`https://image.tmdb.org/t/p/w300${movieDetails.poster_path}`}
//             alt="film card"
//             // className={classes.FilmGalleryItemImage}
//           />
//         </div>
//         <div className={classes.DescriptionFilm}>
//           <h3>
//             {movieDetails.title}({Number.parseInt(movieDetails.release_date)})
//           </h3>
//           <p>User Score: {movieDetails.vote_average * 10}%</p>
//           <h4>Overview</h4>
//           <p>{movieDetails.overview}</p>
//           <h5>Genres</h5>
//           {movieDetails.genres?.map(({ name, id }) => (
//             <span key={id}>{name} </span>
//           ))}
//         </div>
//       </div>
//       <div>
//         <NavLink
//           // className={classes.navLink}
//           // activeClassName={classes.isActive}
//           to="/movies/cast"
//           // to={{
//           // pathname: `${match.url}${routes.cast}`,
//           // state: { from: location.state.from },
//           // }}
//         >
//           Cast
//         </NavLink>
//       </div>
//     </>
//   );
// };

// export default MovieCard;
