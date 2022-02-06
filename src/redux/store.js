import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import authReduser from "./auth/authSlice";
import userReducer from "./user/user-slice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import transactionsReduser from "./transactions/transactionsSlice";

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token", "refreshToken", "isFirstLogin", "sid"],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReduser),
    transactions: transactionsReduser,
    user: userReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === "development",
});

export const persistor = persistStore(store);
