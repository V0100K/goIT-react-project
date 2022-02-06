import { createSlice } from "@reduxjs/toolkit";
//import { getContacts, addContact, deleteContact } from "./contactsOperations";
import {
  getIncome,
  addIncome,
  deleteIncom,
  getCategories,
  getExpense,
  addExpense,
  deleteExpense,
  getCategoriesExpense,
} from "./transactionsOperation";

const initialState = {
  items: [],
  itemsExpense: [],
  categories: [],
  categoriesExpense: [],
  month: {},
  date: null,

  // filter: "",
};

const transactionSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    setDate: (state, action) => ({ ...state, date: action.payload }),
  },

  extraReducers: (builder) => {
    builder
      .addCase(getIncome.fulfilled, (state, { payload }) => {
        state.month = { ...payload.monthsStats };
        state.items = payload.incomes;
      })
      .addCase(addIncome.fulfilled, (state, action) => ({
        ...state,
        items: [...state.items, action.payload.transaction],
      }))

      .addCase(getCategories.fulfilled, (state, action) => ({
        ...state,
        categories: [...action.payload],
      }))
      .addCase(deleteIncom.fulfilled, (state, { payload }) => {
        const idx = state.items.findIndex((contact) => contact._id === payload);

        state.items.splice(idx, 1);
      })
      //////////////////////////////////////////////////////////////
      .addCase(getExpense.fulfilled, (state, { payload }) => {
        state.month = { ...payload.monthsStats };
        state.itemsExpense = payload.expenses;
      })
      .addCase(addExpense.fulfilled, (state, action) => ({
        ...state,
        itemsExpense: [...state.itemsExpense, action.payload.transaction],
      }))

      .addCase(getCategoriesExpense.fulfilled, (state, action) => ({
        ...state,
        categoriesExpense: [...action.payload],
      }))
      .addCase(deleteExpense.fulfilled, (state, { payload }) => {
        const idx = state.itemsExpense.findIndex(
          (contact) => contact._id === payload
        );
        state.itemsExpense.splice(idx, 1);
      });
  },
});

export const { setDate } = transactionSlice.actions;

export default transactionSlice.reducer;
