import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { token } from "../auth/authOperation";

const getPeriodData = createAsyncThunk(
  "user/getUserDataStatus",
  async (currentDate, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.get(
        `transaction/period-data?date=${currentDate}`
      );
      // console.log("data :>> ", data);
      return data;
    } catch (error) {
      // return error;
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export { getPeriodData };
