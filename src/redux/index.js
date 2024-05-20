import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "./userSlice"; // Assuming there's a user slice reducer
import toursliceReducer from "./tourSlice";

export const store = configureStore({
  reducer: {
    user: userSliceReducer,
    tour: toursliceReducer
  },
});
