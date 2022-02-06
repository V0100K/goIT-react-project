import { useEffect, useContext } from "react";
import { createPortal } from "react-dom";
import { useLockBodyScroll } from "react-use";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { authOperations } from "../../redux/auth";
import styles from "./Modal.module.scss";
import Close from "./Close.svg";
import { ThemeContext, themes } from "../../context/themeContext";

const modalRootRef = document.querySelector("#modal-root");

const Modal = ({
  onClose,
  title,
  onDelete,
  deleteId,
  shouldLogOut = false,
}) => {
  useLockBodyScroll(true);
  const dispatch = useDispatch();

  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    const onEscPress = (e) => {
      if (e.code === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", onEscPress);
    return () => {
      window.removeEventListener("keydown", onEscPress);
    };
  }, [onClose]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const logOut = () => {
    onClose();
    return dispatch(authOperations.loginOut());
  };

  return createPortal(
    <div
      className={`${styles.backdrop} ${
        theme === themes.light ? "lightTheme" : styles.darkTheme
      }`}
      onClick={handleBackdropClick}
    >
      <div className={styles.modal}>
        <img
          src={Close}
          alt=""
          width="12"
          onClick={onClose}
          className={styles.imgClose}
        />
        <h3 className={styles.content}>{title}</h3>
        <div className={styles.modalBtm}>
          <button
            type="button"
            className={styles.btn}
            onClick={shouldLogOut ? () => logOut() : onDelete(deleteId)}
            //onClick={() => onDelete(deleteId)}
            //onClick={() => console.log(onDelete)}
          >
            ДА
          </button>
          <button type="button" className={styles.btn} onClick={onClose}>
            НЕТ
          </button>
        </div>
      </div>
    </div>,
    modalRootRef
  );
};

Modal.propTypes = {
  onClose: PropTypes.func,
  title: PropTypes.string.isRequired,
  onDelete: PropTypes.func,
  deleteId: PropTypes.string,
};

export default Modal;
