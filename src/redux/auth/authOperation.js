import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

axios.defaults.baseURL = "https://kapusta-backend.goit.global/";

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

const register = createAsyncThunk(
  "auth/register",
  async (credentials, { rejectWithValue, getState }) => {
    try {
      const { data } = await axios.post("/auth/register", credentials);
      toast.success("Успешно зарегистрирован");
      return data;
    } catch (error) {
      toast.error("Ошибка, возможно пользователь с таким email уже существует");
      return rejectWithValue(error);
    }
  }
);

const loginIn = createAsyncThunk(
  "auth/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/auth/login", credentials);
      token.set(data.accessToken);
      return data;
    } catch (error) {
      toast.error("Ошибка, возможно пароль или email неправильный");
      return rejectWithValue(error);
    }
  }
);

const loginOut = createAsyncThunk(
  "auth/logout",
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/auth/logout", credentials);
      token.unset();
      toast.success("Успешно розлогинени");
      return data;
    } catch (error) {
      toast.error("Упсс.... Что то пошло не так!");
      return rejectWithValue(error);
    }
  }
);

const fetchCurrentUser = createAsyncThunk(
  "auth/refreshUserData",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }
    token.set(persistedToken);
    try {
      const { data } = await axios.get("/user");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const setBalance = createAsyncThunk(
  "auth/setBalance",
  async (balance, { rejectWithValue }) => {
    try {
      const data = await axios.patch("/user/balance", balance);
      return data.newBalance;
    } catch (error) {
      return rejectWithValue("error");
    }
  }
);

const refreshTokens = createAsyncThunk(
  "auth/refreshTokens",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const oldRefreshToken = state.auth.refreshToken;
    const sid = state.auth.sid;

    axios.defaults.headers.common.Authorization = `Bearer ${oldRefreshToken}`;
    try {
      const { data } = await axios.post("/auth/refresh", { sid });
      axios.defaults.headers.common.Authorization = `Bearer ${data.newAccessToken}`;
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const refreshGoogleTokens = createAsyncThunk(
  "auth/refreshTokens",
  async ({ refreshToken, sid }, thunkAPI) => {
    axios.defaults.headers.common.Authorization = `Bearer ${refreshToken}`;
    try {
      const { data } = await axios.post("/auth/refresh", { sid });
      axios.defaults.headers.common.Authorization = `Bearer ${data.newAccessToken}`;
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const getBalance = createAsyncThunk("auth/getBalance", async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.auth.token;

  if (persistedToken === null) {
    return thunkAPI.rejectWithValue();
  }
  token.set(persistedToken);
  try {
    const { data } = await axios.get("/user");
    return data.balance;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

const authOperations = {
  register,
  loginIn,
  loginOut,
  fetchCurrentUser,
  setBalance,
  refreshTokens,
  getBalance,
  refreshGoogleTokens,
};

export default authOperations;
