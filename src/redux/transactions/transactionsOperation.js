import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { token } from "../auth/authOperation";
import { toast } from "react-toastify";

const getIncome = createAsyncThunk(
  "transaction/getTransactionStatus",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }
    try {
      const { data } = await axios.get("/transaction/income");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const addIncome = createAsyncThunk(
  "transaction/addTransactionStatus",
  async (transaction, thunkAPI) => {
    try {
      const { data } = await axios.post("/transaction/income", transaction);
      toast.success("Успешно добавлен доход");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const deleteIncom = createAsyncThunk(
  "transaction/deleteIncomStatus",
  async (id, thunkAPI) => {
    try {
      await axios.delete(`/transaction/${id}`);
      toast.success("Успешно удален доход");
      return id; // + newBalance
    } catch (error) {
      toast.error("Упсс.... Что то пошло не так!");
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const getCategories = createAsyncThunk(
  "transaction/getCategoriesStatus",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    token.set(persistedToken);
    try {
      const { data } = await axios.get("/transaction/income-categories");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

/////////////////////////////////
const getExpense = createAsyncThunk(
  "transaction/getExpenseStatus",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }
    try {
      const { data } = await axios.get("/transaction/expense");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const addExpense = createAsyncThunk(
  "transaction/addExpenseStatus",
  async (transaction, thunkAPI) => {
    try {
      const { data } = await axios.post("/transaction/expense", transaction);
      toast.success("Успешно добавлен расход");
      return data;
    } catch (error) {
      toast.error("Упсс.... Что то пошло не так!");
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const deleteExpense = createAsyncThunk(
  "transaction/deleteExpenseStatus",
  async (id, thunkAPI) => {
    try {
      await axios.delete(`/transaction/${id}`);
      toast.success("Успешно удален расход");
      return id;
    } catch (error) {
      toast.error("Упсс.... Что то пошло не так!");
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const getCategoriesExpense = createAsyncThunk(
  "transaction/getCategoriesExpenseStatus",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    token.set(persistedToken);
    try {
      const { data } = await axios.get("/transaction/expense-categories");

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export {
  getIncome,
  addIncome,
  deleteIncom,
  getCategories,
  getExpense,
  addExpense,
  deleteExpense,
  getCategoriesExpense,
};
