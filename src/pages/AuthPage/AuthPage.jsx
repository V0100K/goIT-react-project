import { useState, useContext, useEffect } from "react";
import { useDispatch } from "react-redux";
import { authOperations } from "../../redux/auth";
import { ThemeContext, themes } from "../../context/themeContext";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";

import s from "./AuthPage.module.scss";
import sprite from "../../images/sprite.svg";
import GoogleAuthorization from "../../component/AuthGoogle/GoogleAuth";

const AuthPage = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const { theme } = useContext(ThemeContext);

  const location = useLocation();
  const refreshToken = new URLSearchParams(location.search).get("refreshToken");
  const sid = new URLSearchParams(location.search).get("sid");

  // const validation = () => {
  //   email.trim().length === 0 ? setIsEmailValid(false) : setIsEmailValid(true);
  //   password.trim().length === 0 ? setIsPasswordValid(false) : setIsPasswordValid(true);

  //   console.log('isEmailValid', !isEmailValid);
  //   console.log('isPasswordValid', !isPasswordValid);

  //   if (!isEmailValid || !isPasswordValid) {
  //     return true
  //   } else {
  //     return false
  //   }
  // }

  const validation = () => {
    const isEmailError = email.trim().length === 0;
    const isPasswordError = password.trim().length === 0;

    setIsEmailValid(!isEmailError);
    setIsPasswordValid(!isPasswordError);

    return isEmailError || isPasswordError;
  };

  useEffect(() => {
    if (!refreshToken) return;
    dispatch(authOperations.refreshGoogleTokens({ refreshToken, sid })).then(
      () => dispatch(authOperations.fetchCurrentUser())
    );
  }, [dispatch, refreshToken, sid]);

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);
      default:
        return;
    }
  };

  const alphanumericEmail = () => {
    const regex = /^[a-zA-Z0-9@_.-]*$/;
    if (email.match(regex)) {
      return;
    } else {
      return false;
    }
  };

  const alphanumericPassword = () => {
    const regex = "^[A-Za-z0-9]*$";
    if (password.match(regex)) {
      return;
    } else {
      return false;
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    console.log("validation", validation());
    if (validation()) {
      return;
    }

    if (alphanumericPassword() === false) {
      return toast.warning(
        "Ваш пароль может включать в себя только буквы и цифры"
      );
    }

    if (alphanumericEmail() === false) {
      return toast.warning(
        "Ваш email может включать в себя только латиницу, цифры, знаки `-`"
      );
    }

    if (email.trim().length < 10) {
      return toast.warning(
        "Ваш email должен содержать минимум 10 символов включая @ ...etc"
      );
    }

    if (email.trim().length > 63) {
      return toast.warning(
        "Длина вашего email`а не может превышать 63 символа"
      );
    }

    if (!email.trim().includes("@") && !email.includes(".")) {
      return toast.warning(
        "Ваш email обязательно должен содержать знак `@` и точку `.`"
      );
    }

    if (email.trim().indexOf("@") < 2) {
      return toast.warning(
        "Перед символом `@` должно стоять минимум 2 символа"
      );
    }

    if (email.trim().indexOf("-") === 0) {
      return toast.warning(
        "Дефис не может находиться вначале или в конце (перед знаком `@`) вашего email"
      );
    }

    if (email.trim().indexOf("-") === email.indexOf("@") - 1) {
      return toast.warning(
        "Дефис не может находиться вначале или в конце (перед знаком `@`) вашего email"
      );
    }

    await dispatch(authOperations.register({ email, password }));
    dispatch(authOperations.loginIn({ email, password }));
    // setEmail("");
    // setPassword("");
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("validation", validation());
    if (validation()) {
      return;
    }

    dispatch(authOperations.loginIn({ email, password }));
    // setEmail("");
    // setPassword("");
  };

  return (
    <section
      className={`${s.authSection} background ${
        theme === themes.light ? "lightTheme" : s.darkTheme
      }`}
    >
      <div className="container">
        <div className={s.authSectionWrapper}>
          <div className={s.heroTitleWrapper}>
            <svg width="183px" height="46px" className={s.heroTitle}>
              <use href={`${sprite}#mobile-title`}></use>
            </svg>
            <h1 className="visually-hidden">Kapusta</h1>
            <p className={s.heroText}>Smart Finance</p>
          </div>
          <div className={s.authBox}>
            <p className={s.googleAuthText}>
              Вы можете авторизоваться с помощью Google Account:
            </p>
            <GoogleAuthorization />
            <p className={s.authText}>
              Или зайти с помощью e-mail и пароля, предварительно
              зарегистрировавшись:
            </p>
            <form
              onSubmit={handleRegister}
              autoComplete="off"
              className={s.authForm}
            >
              <label htmlFor="user-email" className={s.authLabel}>
                <span className={`${!isEmailValid && "error"}`}>
                  Электронная почта:
                </span>
              </label>
              <input
                id="user-email"
                type="text"
                className={s.authInput}
                placeholder="your@email.com"
                name="email"
                value={email}
                onChange={handleChange}
              />
              <label htmlFor="user-password" className={s.authLabel}>
                <span className={`${!isPasswordValid && "error"}`}>
                  Пароль:
                </span>
              </label>
              <input
                id="user-password"
                type="password"
                className={s.authInput}
                placeholder="Пароль"
                name="password"
                value={password}
                onChange={handleChange}
              />
              <div className={s.btnWrapper}>
                <button onClick={handleLogin} type="button" className={s.btn}>
                  Войти
                </button>
                <button type="submit" className={s.btn}>
                  Регистрация
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthPage;
