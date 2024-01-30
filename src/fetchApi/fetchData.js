import axios from "axios";

export const fetchData = async (url, params) => {
  const fetchUrl = "https://api.themoviedb.org/3/" + url;
  const movieDbApiKey = process.env.REACT_APP_MOVIE_DB_API_KEY;
  try {
    const response = await axios.get(fetchUrl, {
      params,
      headers: {
        Authorization: movieDbApiKey,
      },
    });
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
