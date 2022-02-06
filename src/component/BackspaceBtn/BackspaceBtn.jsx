import { useNavigate } from "react-router-dom";
import { useContext } from "react";

import { ThemeContext, themes } from "../../context/themeContext";

import sprite from "../../images/sprite.svg";
import s from "./BackspaceBtn.module.scss";

const BackspaceBtn = () => {
  const navigate = useNavigate();

  const { theme } = useContext(ThemeContext);

  const clickBackBtn = () => {
    navigate("/homepage/expense");
  };
  return (
    <div
      className={`${s.btnBackspace_wrap} ${
        theme === themes.light ? "lightTheme" : s.darkTheme
      }`}
    >
      <button className={s.btn_backspace} type="button" onClick={clickBackBtn}>
        <svg viewBox="0 0 28.3 28.3" className={s.img}>
          <use href={`${sprite}#backspace`} />
        </svg>
        <span className={s.text + " " + s.hidden_text}>
          Вернуться на главную
        </span>
      </button>
    </div>
  );
};

export default BackspaceBtn;
