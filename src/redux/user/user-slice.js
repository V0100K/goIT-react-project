import { createSlice } from "@reduxjs/toolkit";
import { getPeriodData } from "./user-operations";

const initialState = {
  periodData: {},
  load: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: {
    [getPeriodData.pending](state, { payload }) {
      state.load = true;
    },
    [getPeriodData.fulfilled](state, { payload }) {
      state.periodData = payload;
      state.load = false;
    },
    [getPeriodData.error](state, { payload }) {
      state.error = payload;
      state.load = false;
    },
  },
});
export default userSlice.reducer;
