import { createSlice } from "@reduxjs/toolkit";
import authOperations from "./authOperation";

const initialState = {
  user: { email: "" },
  token: null,
  refreshToken: null,
  sid: null,
  isLoggedIn: false,
  isFetchingCurrentUser: false,
  isRefreshing: false,
  isFirstLogin: true,
};

const authSlice = createSlice({
  name: "auth",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(authOperations.register.fulfilled, (state) => {
        state.isLoggedIn = true;
        state.isFirstLogin = true;
      })
      .addCase(authOperations.register.rejected, () => {
        // alert();
      })
      .addCase(authOperations.loginIn.fulfilled, (state, action) => {
        state.user = action.payload.userData;
        state.token = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
        state.sid = action.payload.sid;
        state.isLoggedIn = true;
      })
      .addCase(authOperations.loginOut.fulfilled, (state) => {
        state.user.email = "";
        state.token = null;
        state.refreshToken = null;
        state.isLoggedIn = false;
      })
      .addCase(authOperations.fetchCurrentUser.pending, (state) => {
        state.isFetchingCurrentUser = true;
      })
      .addCase(authOperations.fetchCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isFetchingCurrentUser = false;
      })
      .addCase(authOperations.fetchCurrentUser.rejected, (state) => {
        state.isFetchingCurrentUser = false;
      })
      .addCase(authOperations.setBalance.fulfilled, (state, action) => {
        state.user.balance = action.payload;
        state.isFirstLogin = false;
      })
      .addCase(authOperations.refreshTokens.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(authOperations.refreshTokens.rejected, (state) => {
        state.isRefreshing = false;
      })
      .addCase(authOperations.refreshTokens.fulfilled, (state, action) => {
        state.token = action.payload.newAccessToken;
        state.refreshToken = action.payload.newRefreshToken;
        state.sid = action.payload.newSid;
        state.isRefreshing = false;
      })
      .addCase(authOperations.getBalance.fulfilled, (state, action) => {
        state.user.balance = action.payload;
      });
  },
});

export default authSlice.reducer;
