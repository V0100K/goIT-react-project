import { useContext } from "react";
import { ThemeContext, themes } from "../../context/themeContext";
import sprite from "../../images/sprite.svg";
import s from "./ReportSwitcher.module.scss";

const ReportSwitcher = ({ change, reportTitle }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`${s.cost_incomes_wrap} ${
        theme === themes.light ? "lightTheme" : s.darkTheme
      }`}
    >
      <button
        type="button"
        onClick={() => {
          change();
        }}
        className={s.btn}
      >
        <svg viewBox="0 0 28.3 28.3" className={s.arrows}>
          <use href={`${sprite}#arrow_left`} />
        </svg>
      </button>
      <span className={s.cost_incomes}>{reportTitle}</span>
      <button
        type="button"
        onClick={() => {
          change();
        }}
        className={s.btn}
      >
        <svg viewBox="0 0 28.3 28.3" className={s.arrows}>
          <use href={`${sprite}#arrow_rigth`} />
        </svg>
      </button>
    </div>
  );
};

export default ReportSwitcher;
