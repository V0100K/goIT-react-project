import { useSelector } from "react-redux";
import s from "./ReportInfo.module.scss";
import amount from "../../redux/user/user-selectors";
import { useContext } from "react";
import { ThemeContext, themes } from "../../context/themeContext";

const ReportInfo = () => {
  const incomeTotal = useSelector(amount.incomesTotal);
  const expenseTotal = useSelector(amount.expenseTotal);
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`${s.reportInfo_wrap} ${
        theme === themes.light ? "lightTheme" : s.darkTheme
      }`}
    >
      <div className={s.costIncomes_report}>
        <div className={s.report_item + " " + s.line}>
          <p className={s.text}>Расходы:</p>
          <span className={s.numberCosts}>
            - {expenseTotal ? `${expenseTotal}.00` : "0.00"} грн.
          </span>
        </div>
        <div className={s.report_item}>
          <p className={s.text}>Доходы:</p>
          <span className={s.numberIncomes}>
            + {incomeTotal ? `${incomeTotal}.00` : "0.00"} грн.
          </span>
        </div>
      </div>
    </div>
  );
};

export default ReportInfo;
