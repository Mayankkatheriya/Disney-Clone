import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { setmoviesApiData } from "../features/apiData/apiDataSlice";
import { fetchData } from "../fetchApi/fetchData";

const Movies = () => {
  const moviesList = useSelector(setmoviesApiData);
  const dispatch = useDispatch();
  console.log(moviesList);
  useEffect(() => {
    const commonParams = {
      language: "en-US",
      page: 1,
    };

    //trending Movies

    fetchData("trending/movie/day", commonParams)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.error(err));
  });
  return <Container></Container>;
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
