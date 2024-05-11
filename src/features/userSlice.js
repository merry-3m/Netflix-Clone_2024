import { createSlice } from "@reduxjs/toolkit";




export const userSlice = createSlice({
  name: "user",
  initialState:{
    user : null,

  },
  reducers: {
    // * logIn, logOut specify how the  state should be updated when certain actions are dispatched.
    login : (state, action) => {
      state.user = action.payload;
    },
    logout : (state, action) => {
      state.user = null;
    }
  },
});

export const { login,logout } = userSlice.actions;

// * selectUser this will help us to access the user from userSlice
export const selectUser = (state) => state.user.user;

export default userSlice.reducer;


// ` By exporting the reducer function and action creators (login and logout), this code allows other parts of the application to interact with the Redux store's user slice, such as dispatching actions to log in or log out users and retrieving the user state using the selectUser selector.