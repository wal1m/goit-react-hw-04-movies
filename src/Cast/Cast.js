import { useState, useEffect } from "react";
import { getCast } from "../utils/themovieAPI";
import PropTypes from "prop-types";

const Cast = ({ match }) => {
  const [сast, SetСast] = useState([]);

  useEffect(() => {
    const { movieId } = match.params;
    getCast(movieId).then((data) => SetСast(data.cast));
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

Cast.propTypes = {
  match: PropTypes.object.isRequired,
};