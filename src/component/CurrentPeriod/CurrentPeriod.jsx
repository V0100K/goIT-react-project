import { useEffect, useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import sprite from "../../images/sprite.svg";
import s from "./CurrentPeriod.module.scss";
import { getPeriodData } from "../../redux/user/user-operations";
import { ThemeContext, themes } from "../../context/themeContext";
import { utils } from "../../redux/utils";

const CurrentPeriod = () => {
  const dispatch = useDispatch();
  const { theme } = useContext(ThemeContext);
  const incomes = useSelector((state) => state?.transactions?.items);
  const expenses = useSelector((state) => state?.transactions?.itemsExpense);
  const date = useSelector((state) => state.transactions.date);
  const dates = utils.convertDate(incomes, expenses);
  const startDate = utils.transDate(date);
  console.log("date :>> ", date);
  console.log("startDate :>> ", startDate);
  console.log("dates :>> ", dates);

  const dateSelected =
    dates.length > 0 ? dates.find((item) => item === date.slice(0, 7)) : null;
  const inf = dateSelected ? dates.indexOf(dateSelected) : 0;

  console.log("dateSelected :>> ", dateSelected);
  // console.log("inf :>> ", inf);
  const [i, setI] = useState(inf);

  const [currentDate, setCurrentDate] = useState(dateSelected);
  console.log("currentDate :>> ", currentDate);
  const [disabledPrev, setDisabledPrev] = useState(false);
  const [disabledNext, setDisabledNext] = useState(false);

  const convertMonths = utils.transformCurrentDate(
    dates.map((item) => item.slice(-2))
  );
  const getYears = dates.map((item) => item.slice(0, 4));

  useEffect(() => {
    if (!currentDate) {
      setCurrentDate(dates[0]);
      // return;
    }
    console.log("useEffect :>> ");
    dispatch(getPeriodData(currentDate));
  }, [currentDate, dates, dispatch]);

  const prev = () => {
    if (i === -1) {
      setI(0);
    }
    setI(i + 1);
    console.log("i prev:>> ", i);
    setCurrentDate(dates[i + 1] ? dates[i + 1] : dates[i]);
    if (i - 1 !== 0) {
      setDisabledNext(false);
    }

    if (i === dates.length - 1) {
      setI(dates.length - 1);
      setDisabledPrev(!disabledPrev);
      setCurrentDate(dates[dates.length - 1]);
    }
  };
  const next = () => {
    if (i === -1) {
      setI(dates.length - 1);
    }
    setI(i - 1);
    console.log("i next:>> ", i);
    if (i !== dates.length - 1) {
      setDisabledPrev(false);
    }

    if (i === 0) {
      setI(0);
      setCurrentDate(dates[0]);
      setDisabledNext(!disabledNext);
    }
    setCurrentDate(dates[i - 1] ? dates[i - 1] : dates[0]);
  };
  return (
    <div
      className={`${s.current_period} ${
        theme === themes.light ? "lightTheme" : s.darkTheme
      }`}
    >
      <span className={s.text}>Текущий период:</span>
      <div className={s.current_period_wrap}>
        <button
          type="button"
          onClick={() => prev(i)}
          className={s.current_period_btn}
          disabled={i < dates.length - 1 ? disabledPrev : true}
        >
          <svg viewBox="0 0 28.3 28.3" className={s.current_period_arrow}>
            <use href={`${sprite}#arrow_left`} />
          </svg>
        </button>
        <span className={s.cost_incomes}>
          {dates.length || dateSelected
            ? ` ${convertMonths[i]} ${getYears[i]}`
            : startDate}
        </span>
        <button
          type="button"
          onClick={() => next(i)}
          className={s.current_period_btn}
          disabled={i > 0 ? disabledNext : true}
        >
          <svg viewBox="0 0 28.3 28.3" className={s.current_period_arrow}>
            <use href={`${sprite}#arrow_rigth`} />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CurrentPeriod;
