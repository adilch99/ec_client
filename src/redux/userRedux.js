import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    isFetching: false,
    error: false,
    errorMsg: "",
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.user = action.payload.user;
      localStorage.setItem("user", JSON.stringify(action.payload.user));
    },
    loginFailure: (state, action) => {
      state.isFetching = false;
      state.error = true;
      state.errorMsg = action.payload.msg;
    },
    resetError: (state) => {
      state.error = false;
    },
    resetUser: (state) => {
      state.user = null;
    },
  },
});

export const { resetUser, loginFailure, loginStart, loginSuccess, resetError } =
  userSlice.actions;
export default userSlice.reducer;
