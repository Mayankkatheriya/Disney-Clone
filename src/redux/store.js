// Import the necessary functions from the Redux Toolkit
import { configureStore } from "@reduxjs/toolkit";

// Import the userReducer from the userSlice file
import userReducer from "../features/user/userSlice";

// Configure the Redux store with the userReducer as part of the state
export default configureStore({
  reducer: {
    user: userReducer, // userReducer manages the state for user-related information
    // Add other reducers here if needed
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