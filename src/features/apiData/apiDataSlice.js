import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  nowPlaying: null,
  popular: null,
  topRated: null,
  upcoming: null,
};
const moviesApiData = createSlice({
  name: "apiData",
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

export const selectnowPlaying = (state) => state.movie.nowPlaying;
export const selectpopular = (state) => state.movie.popular;
export const selecttopRated = (state) => state.movie.topRated;
export const selectupcoming = (state) => state.movie.upcoming;

export default moviesApiData.reducer
