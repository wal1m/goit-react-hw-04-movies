import { useState, useEffect } from "react";
import { getCast } from "../utils/themovieAPI";

const Cast = ({ match }) => {
  const [сast, SetСast] = useState([]);

  useEffect(() => {
    const { movieId } = match.params;
    // console.log(movieId);
    getCast(movieId).then((data) => SetСast(data.cast));
    // console.log(сast);
  }, []);
  return (
    <>
      <ul>
        {сast?.map(({ name, profile_path, id }) => (
          <li key={id}>
            {profile_path && (
              <img
                className="film-picture"
                src={`https://image.tmdb.org/t/p/w200${profile_path}`}
                alt={`foto ${name}`}
                // className={classes.FilmGalleryItemImage}
              />
            )}
            <h3>{name}</h3>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Cast;
