const normalizeDate = (dateToFormat) => {
  const padNum = (num) => String(num).padStart(2, 0);
  const day = padNum(dateToFormat.getDate());
  const month = padNum(dateToFormat.getMonth() + 1);
  const year = padNum(dateToFormat.getFullYear());
  const date = `${year}-${month}-${day}`;
  // const dateShow = `${day}.${month}.${year}`;
  // const date = { dateOperation, dateShow };
  return date;
};
const months = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
];
const transDate = (date = null) => {
  // const currentYear = new Date().getFullYear().toString();
  // const newDateMonth = new Date().getMonth();
  const currentYear = new Date(date).getFullYear().toString();
  const newDateMonth = new Date(date).getMonth();

  const transMonts = months.find((item, i) => {
    return i === newDateMonth;
  });

  return `${transMonts} ${currentYear}`;
};
const transformCurrentDate = (dates = null) => {
  if (dates === null) return;
  const mas = dates.flatMap((date, index, arr) =>
    months.filter((month, i) => {
      const indexTransform = (i + 1).toString().padStart(2, 0);
      return date.includes(indexTransform);
    })
  );
  return mas;
};
const convertDate = (incomes, expenses) => {
  const incomesDates = incomes
    .map(({ date }) => date.slice(0, 7))
    .filter((date, i, arr) => arr.indexOf(date) === i);
  const expensesDates = expenses
    .map(({ date }, i) => date.slice(0, 7))
    .filter((date, i, arr) => arr.indexOf(date) === i);
  const dates = [...incomesDates, ...expensesDates];

  const datesConverted = dates
    .filter((date, i, arr) => arr.indexOf(date) === i)
    .sort((a, b) => new Date(b) - new Date(a));

  return datesConverted;
};

const utils = {
  normalizeDate,
  months,
  transDate,
  transformCurrentDate,
  convertDate,
};
export default utils;
//
