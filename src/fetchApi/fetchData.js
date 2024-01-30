import axios from "axios";

export const fetchData = async (url, params) => {
    const fetchUrl = "https://api.themoviedb.org/3/" + url
  try {
    const response = await axios.get(fetchUrl, {
      params,
      headers:{
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMGUzYTMyOTgxZmYxN2I0M2VlZDcwM2FiMjBmMmEyMyIsInN1YiI6IjY1YWZkNDlkYmQ1ODhiMDBlYmFlY2RkYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0wkysMPvP0dTnpBiTgUoyNxoCl3_APki_cAVjnAEzGI",
    }
    });
    return response.data;
  } catch (err) {
    console.log(err);
  }
};