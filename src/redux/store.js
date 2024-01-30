// Import the necessary functions from the Redux Toolkit
import { configureStore } from "@reduxjs/toolkit";

// Import the userReducer from the Slice files
import userReducer from "../features/user/userSlice";
import movieReducer from '../features/movie/movieSlice';
import moviesApiDataReducer from '../features/apiData/apiDataSlice'

// Configure the Redux store with the userReducer as part of the state
export default configureStore({
  reducer: {
    user: userReducer, // userReducer manages the state for user-related information
    movie: movieReducer, // userReducer manages the state for movies related information
    moviesApiData: moviesApiDataReducer,
  },
  middleware: (getDefaultMiddleware) => {
    // Disable the serializableCheck middleware to allow non-serializable values in the Redux state
    const middleware = getDefaultMiddleware({
      serializableCheck: false,
    });

    // Add any additional middleware here if needed

    // Return the modified middleware
    return middleware;
  },
});