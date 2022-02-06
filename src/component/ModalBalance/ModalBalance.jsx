import { createPortal } from "react-dom";
import { useLockBodyScroll } from "react-use";
import styles from "./ModalBalance.module.scss";

const modalRootRef = document.querySelector("#modal-root");

const ModalBalance = () => {
  useLockBodyScroll(false);

  return createPortal(
    <>
      <div className={styles.backdrop}></div>
      <div className={styles.modal}>
        {/* <div className={styles.modalTriangle}>
        <img src={Polygon} alt="" width="30" height="16"  className={styles.modalPolygon}/>
      </div> */}
        <div className={styles.modalText}>
          <p className={styles.modalText_1}>
            Привет! Для начала работы внеси текущий баланс своего счета!
          </p>
          <p className={styles.modalText_2}>
            Ты не можешь тратить деньги пока их у тебя нет :)
          </p>
        </div>
      </div>
    </>,
    modalRootRef
  );
};

export default ModalBalance;
