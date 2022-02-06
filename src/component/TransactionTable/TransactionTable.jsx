import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router";

import {
  getExpense,
  getIncome,
  deleteIncom,
  deleteExpense,
} from "../../redux/transactions/transactionsOperation";
import Modal from "../Modal/Modal";
import { ThemeContext, themes } from "../../context/themeContext";
import { authOperations } from "../../redux/auth";

import s from "./TransactionTable.module.scss";
import sprite from "../../images/sprite.svg";

const TransactionTable = () => {
  const selectedDate = useSelector((state) => state.transactions.date);
  const expenses = useSelector((state) => state.transactions.itemsExpense);
  const incomes = useSelector((state) => state.transactions.items);
  const [isOpenedModal, setisOpenedModal] = useState(false);
  const [deleteId, setDeleteId] = useState("");
  const location = useLocation();
  const dispatch = useDispatch();
  const isExpense = location.pathname === "/homepage/expense";
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    isExpense ? dispatch(getExpense()) : dispatch(getIncome());
  }, [dispatch, isExpense]);

  const onDelete = (id) => () => {
    isExpense
      ? dispatch(deleteExpense(id))
          .then(() => dispatch(getExpense()))
          .then(() => dispatch(authOperations.getBalance()))
      : dispatch(deleteIncom(id))
          .then(() => dispatch(getIncome()))
          .then(() => dispatch(authOperations.getBalance()));
    closeModal();
  };

  const closeModal = () => {
    setisOpenedModal(false);
    setDeleteId("");
  };

  const openModal = (id) => {
    setisOpenedModal(true);
    setDeleteId(id);
  };

  const filterForDate = () =>
    (isExpense ? expenses : incomes)?.filter(
      ({ _id, category, date, amount, description }) => date === selectedDate
    );

  return (
    <>
      <div
        className={`${s.table} ${
          theme === themes.light ? "lightTheme" : s.darkTheme
        }`}
      >
        <div className={s.table_header}>
          <p className={s.text}>Дата</p>
          <p className={s.text}>Описание</p>
          <p className={s.text}>Категория</p>
          <p className={s.text}>Сумма</p>
          <p></p>
        </div>
        <ul className={s.list}>
          {filterForDate().map(
            ({ _id, category, date, amount, description }) => {
              return (
                <li key={_id} className={s.item}>
                  <p className={s.item__date}>{date}</p>
                  <p className={s.item__descrip}>{description}</p>
                  <p className={s.item__category}>{category}</p>
                  <p
                    className={s.item__sum}
                    style={{ color: isExpense ? "#E7192E" : "#407946" }}
                  >
                    {isExpense ? -amount : amount} грн.
                  </p>
                  <button className={s.btn} onClick={() => openModal(_id)}>
                    <svg width="18" height="18" className={s.del}>
                      <use href={`${sprite}#del`}></use>
                    </svg>
                  </button>
                </li>
              );
            }
          )}
        </ul>
      </div>
      {isOpenedModal && (
        <Modal
          title="Вы уверены?"
          onClose={closeModal}
          onDelete={onDelete}
          deleteId={deleteId}
        />
      )}
    </>
  );
};

export default TransactionTable;
