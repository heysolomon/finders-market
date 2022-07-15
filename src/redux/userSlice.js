import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: null,
    loggingIn: false,
    error: false,
  },
  reducers: {
    loginStart: (state) => {
      state.loggingIn = true;
    },
    loginSuccess: (state, action) => {
      state.loggingIn = false;
      state.userInfo = action.payload;
    },
    loginFailure: (state) => {
      state.loggingIn = false;
      state.error = true;
    },
  },
});

export default userSlice.reducer;
export const { loginStart, loginSuccess, loginFailure } = userSlice.actions;
