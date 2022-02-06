import { useSelector } from "react-redux";
import { useContext } from "react";
import s from "./Summary.module.scss";
import { ThemeContext, themes } from "../../context/themeContext";

const Summary = () => {
  // dispatch(getIncome());
  const userMonth = useSelector((state) => state.transactions.month);

  const date = new Date();
  const monthNow = date.getMonth() + 1;

  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`${s.summary} ${
        theme === themes.light ? "lightTheme" : s.darkTheme
      }`}
    >
      <h3 className={s.summary__title}>Сводка</h3>
      <ul className={s.summary__list}>
        {Object.keys(userMonth)
          .splice(0, monthNow)
          .map((month) => {
            return (
              <li key={month} className={s.summary__item}>
                <p className={s.summary__text}>
                  {month}
                  <span>
                    {userMonth[month] === "N/A" ? "00.00" : userMonth[month]}
                  </span>
                </p>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Summary;
