import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectpopular } from "../features/apiData/apiMoviesDataSlice";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Popular = () => {
  const movies = useSelector(selectpopular);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <Container>
      <h4>Popular</h4>
      <Carousel {...settings}>
        {movies &&
          movies.map((movie) => (
            <Wrap key={movie.id}>
              <Link to={`/detail/` + movie.id}>
                <img
                  src={
                    "https://image.tmdb.org/t/p/original" + movie.poster_path
                  }
                  alt={movie.title}
                />
              </Link>
            </Wrap>
          ))}
      </Carousel>
    </Container>
  );
};

const Container = styled.div`
  padding: 0 0 26px;
`;

const Carousel = styled(Slider)`
  margin-top: 20px;
  height: 280px;
  /* overflow-y: hidden; */

  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;

    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease 0s;
    }
  }

  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }

  li.slick-active button:before {
    color: white;
  }

  .slick-list {
    overflow: initial;
  }

  .slick-prev {
    left: -75px;
  }

  .slick-next {
    right: -75px;
  }
`;

const Wrap = styled.div`
  height: 280px;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);

  a {
    width: 100%;
    height: 280px;
  }

  img {
    inset: 0px;
    display: block;
    height: 100%;
    /* object-fit: cover; */
    opacity: 1;
    /* position: absolute; */
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
    /* top: 0; */
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
    z-index: 2;
  }
`;

export default Popular;
