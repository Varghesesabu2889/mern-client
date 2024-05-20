// Redux user slice
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  _id:"",
  email: "",
  image: "",
  // token: "" // Include token in the initial state
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginRedux: (state, action) => {
      state.isAuthenticated = true;
      if (action.payload.data && action.payload.data._id) {
        state._id = action.payload.data._id;
      }
      state.email = action.payload.data ? action.payload.data.email : "";
      state.image = action.payload.data ? action.payload.data.image : "";
      // state.token = action.payload.data ? action.payload.data.token : ""; // Update token on login
    },
    logoutRedux: (state, action) => {
      state.isAuthenticated = false;
      state._id = "";
      state.email = "";
      state.image = "";
      // state.token = ""; // Clear token on logout
    }
  }
});

export const { loginRedux, logoutRedux } = userSlice.actions;
export default userSlice.reducer;
