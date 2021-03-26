const MovieCard = ({ movieDetails }) => {
  return (
    <>
      <h2>card movie</h2>;
      <img
        className="film-picture"
        src={`https://image.tmdb.org/t/p/w300${movieDetails.poster_path}`}
        alt="film card"
        // className={classes.FilmGalleryItemImage}
      />
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
    </>
  );
};

export default MovieCard;
