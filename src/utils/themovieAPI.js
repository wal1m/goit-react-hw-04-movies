import axios from "axios";
// import PropTypes from 'prop-types';

const BASE_URL = `https://api.themoviedb.org/3`;
const API_KEY = "a3867b171279032324720d9cfd8ec944";

// https://api.themoviedb.org/3/trending/movie/day?api_key=a3867b171279032324720d9cfd8ec944

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  api_key: API_KEY,
};

const getPopularMovies = async () => {
  try {
    const { data } = await axios.get("/trending/movie/day");
    // .then(({data}) => console.log(data));

    return data.results;
  } catch (error) {
    console.log(error);
    return [];
  }
};

const getQueryMovies = async (query) => {
  try {
    const { data } = await axios.get(`/search/movie?query=${query}`);
    // .then(( data ) => console.log(data));

    return data.results;
  } catch (error) {
    console.log(error);
    return [];
  }
};

const getMovieDetails = async (movieId) => {
  try {
    // https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
    const { data } = await axios.get(`/movie/${movieId}`);

    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

const getCast = async (movieId) => {
  try {
    // https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>&language=en-US
    const { data } = await axios.get(`/movie/${movieId}/credits`);
    // .then((data) => console.log(data));
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

const getReviews = async (movieId) => {
  try {
    const { data } = await axios.get(`/movie/${movieId}/reviews`);
    // .then((data) => console.log(data));
    return data.results;
  } catch (error) {
    console.log(error);
    return [];
  }
};

// export const getPopularMovies = () =>
//   axios.get(`/trending/movie/day`).then(({ data }) => data);

export {
  getPopularMovies,
  getQueryMovies,
  getMovieDetails,
  getCast,
  getReviews,
};
