import { useState, useEffect } from "react";
import { getReviews } from "../utils/themovieAPI";
import PropTypes from "prop-types";

const Reviews = ({ match }) => {
  const [reviews, SetReviews] = useState([]);

  useEffect(() => {
    const { movieId } = match.params;
    getReviews(movieId).then((data) => SetReviews(data));
  }, []);
  return (
    <>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(({ author, content, id }) => (
            <li key={id}>
              <h3>{author}</h3>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have any reviews for this movies.</p>
      )}
    </>
  );
};

export default Reviews;

Reviews.propTypes = {
  match: PropTypes.object.isRequired,
};