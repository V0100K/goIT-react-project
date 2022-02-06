import { useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authOperations } from "../../redux/auth";
import { authSelectors } from "../../redux/auth";
import { ThemeContext, themes } from "../../context/themeContext";
import ModalBalance from "../ModalBalance/ModalBalance";

import s from "./Balance.module.scss";

const Balance = () => {
  const mustBeShown = useSelector(authSelectors.isFirstLogin);
  const balance = useSelector(authSelectors.getBalance);

  const dispatch = useDispatch();
  const [newBalance, setBalance] = useState(null);

  const { theme } = useContext(ThemeContext);

  const handleChange = ({ target: { value } }) => {
    return setBalance(+value);
  };

  const clickHandle = async (e) => {
    e.preventDefault();
    await dispatch(authOperations.setBalance({ newBalance }));
  };

  const shuldBeVisible = balance === 0 && mustBeShown;
    
  

  return (
    <div
      className={`${s.balance} ${
        theme === themes.light ? "lightTheme" : s.darkTheme
      }`}
    >
      <p className={s.balance__title}>Баланс:</p>
      

      <form className={s.balance__form}>
        {mustBeShown ? (
          <input
            className={s.balance__input}
            type="text"
            placeholder={`${balance || "00.00"} UAH`}
            onChange={handleChange}
          />
        ) : (
          <input
            disabled
            className={s.balance__input}
            type="text"
            placeholder={`${balance || "00.00"} UAH`}
          />
        )}
        {mustBeShown ? (
          <button
            onClick={clickHandle}
            type="button"
            className={s.balance__activebtn}
          >
            Подтвердить
          </button>
        ) : (
          <button
            onClick={clickHandle}
            type="button"
            className={s.balance__disabledbtn}
            disabled
          >
            Подтвердить
          </button>
        )}
      </form>
      
      {shuldBeVisible && <ModalBalance/>}
    </div>
  );
};

export default Balance;
