import React, { useState, useContext } from "react";

import { useSelector } from "react-redux";
// import { useDispatch, useSelector } from "react-redux";
import { authSelectors } from "../../redux/auth";
// import { authSelectors, authOperations } from "../../redux/auth";

import Modal from "../Modal/Modal";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import { ThemeContext, themes } from "../../context/themeContext";

import sprite from "../../images/svg/symbol-defs.svg";
import s from "./Header.module.scss";

const Header = () => {
  // const dispatch = useDispatch();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const email = useSelector(authSelectors.getUserEmail);
  const avatarText = email.slice(0, 1).toUpperCase();
  const { theme } = useContext(ThemeContext);

  const [isOpenedModal, setisOpenedModal] = useState(false);

  const closeModal = () => {
    setisOpenedModal(false);
  };

  const openModal = (id) => {
    setisOpenedModal(true);
  };

  // const logOutHandler = () => {
  //   return dispatch(authOperations.loginOut());
  // };

  return (
    <>
      <header
        className={`${s.header} ${
          theme === themes.light ? "lightTheme" : s.darkTheme
        }`}
      >
        <div className="container">
          <div className={s.headerWrapper}>
            <a href="./" className={s.headerLink}>
              <svg width="90px" height="31px" className={s.logo}>
                <use href={`${sprite}#logo`}></use>
              </svg>
            </a>
            <ThemeSwitcher />
            {isLoggedIn && (
              <div className={s.userMenu}>
                <div className={s.userAvatar}>
                  <p className={s.avatarText}>{avatarText}</p>
                </div>
                <p className={s.userName}>{email}</p>
                <button type="button" className={s.btn}>
                  <svg
                    width="16px"
                    height="16px"
                    className={s.logoutIcon}
                    onClick={() => openModal()}
                    // onClick={() => dispatch(authOperations.loginOut())}
                  >
                    <use href={`${sprite}#logout`}></use>
                  </svg>
                  <p
                    // onClick={() => dispatch(authOperations.loginOut())}
                    onClick={() => openModal()}
                    className={s.logoutText}
                  >
                    Выйти
                  </p>
                </button>
              </div>
            )}
          </div>
        </div>
      </header>
      {isOpenedModal && (
        <Modal
          title="Вы действительно хотите выйти?"
          onClose={closeModal}
          shouldLogOut={true}
        />
      )}
    </>
  );
};

export default Header;
