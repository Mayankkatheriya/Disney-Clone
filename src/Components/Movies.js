import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { setmoviesApiData } from "../features/apiData/apiMoviesDataSlice";
import { fetchData } from "../fetchApi/fetchData";
import NowPlaying from "./NowPlaying";

const Movies = () => {
  const moviesList = useSelector(setmoviesApiData);
  const dispatch = useDispatch();

  console.log(moviesList);

  useEffect(() => {
    const commonParams = {
      language: "en-US",
      page: 1,
    };

    // Fetch all movies concurrently
    Promise.all([
      fetchData("movie/now_playing", commonParams),
      fetchData("movie/popular", commonParams),
      fetchData("movie/top_rated", commonParams),
      fetchData("movie/upcoming", commonParams),
    ])
      .then(([nowPlayingData, popularData, topRatedData, upcomingData]) => {
        // Extract results from each response
        const nowPlaying = nowPlayingData.results;
        const popular = popularData.results;
        const topRated = topRatedData.results;
        const upcoming = upcomingData.results;

        // Dispatch the data to Redux
        dispatch(
          setmoviesApiData({
            nowPlaying,
            popular,
            topRated,
            upcoming,
          })
        );
      })
      .catch((err) => console.error(err));
  }, [dispatch]);

  return (
  <Container>
    <NowPlaying />
  </Container>
  );
};

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default Movies;
