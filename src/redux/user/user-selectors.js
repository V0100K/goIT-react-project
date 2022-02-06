const incomesTotal = (state) => state.user.periodData?.incomes?.incomeTotal;
const expenseTotal = (state) => state.user.periodData?.expenses?.expenseTotal;
const payment = (state) => state.user.periodData?.incomes?.incomesData;
const expenses = (state) => state.user.periodData?.expenses?.expensesData;
export const isLoad = (state) => state.user.load;
const amount = { incomesTotal, expenseTotal, payment, expenses };
export default amount;
