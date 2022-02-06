const getUserEmail = (state) => state.auth.user.email;
const getIsLoggedIn = (state) => state.auth.isLoggedIn;
const getIsFetchingCurrent = (state) => state.auth.isFetchingCurrentUser;
const isFirstLogin = (state) => state.auth.isFirstLogin;
const getBalance = (state) => state.auth.user.balance;
const getRefreshToken = (state) => state.refreshToken;
const getUserSid = (state) => state.auth.sid;
const getIsRefreshing = (state) => state.auth.isRefreshing;

const authSelectors = {
  getUserEmail,
  getIsLoggedIn,
  getIsFetchingCurrent,
  isFirstLogin,
  getBalance,
  getRefreshToken,
  getUserSid,
  getIsRefreshing,
};
export default authSelectors;
