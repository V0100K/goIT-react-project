import { NavLink } from "react-router-dom";
import { useContext } from "react";
import s from "./HeaderTransaction.module.scss";
import { ThemeContext, themes } from "../../context/themeContext";

const HeaderTransaction = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <div
        className={`${s.header} ${
          theme === themes.light ? "lightTheme" : s.darkTheme
        }`}
      >
        <NavLink
          to="expense"
          className={({ isActive }) =>
            isActive ? `${s.link} ${s.active}` : `${s.link}`
          }
        >
          РАСХОД
        </NavLink>
        <NavLink
          to="income"
          className={({ isActive }) =>
            isActive ? `${s.link} ${s.active}` : `${s.link}`
          }
        >
          ДОХОД
        </NavLink>
      </div>
      {/* <Outlet /> */}
    </>
  );
};

export default HeaderTransaction;
