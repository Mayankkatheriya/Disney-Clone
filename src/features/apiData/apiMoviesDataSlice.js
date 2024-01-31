import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  nowPlaying: null,
  popular: null,
  topRated: null,
  upcoming: null,
};
const moviesApiData = createSlice({
  name: "apiMoviesData",
  initialState,
  reducers: {
    setmoviesApiData: (state, action) => {
        state.nowPlaying = action.payload.nowPlaying;
        state.popular = action.payload.popular;
        state.topRated = action.payload.topRated;
        state.upcoming = action.payload.upcoming;
    },
  },
});

export const { setmoviesApiData } = moviesApiData.actions

export const selectnowPlaying = (state) => state.moviesApiData.nowPlaying;
export const selectpopular = (state) => state.moviesApiData.popular;
export const selecttopRated = (state) => state.moviesApiData.topRated;
export const selectupcoming = (state) => state.moviesApiData.upcoming;

export default moviesApiData.reducer
