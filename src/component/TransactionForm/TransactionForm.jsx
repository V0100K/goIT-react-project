import { useState, useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";

import Button from "../Button/Button";
import Calendar from "../Calendar/Calendar";
import { ThemeContext, themes } from "../../context/themeContext";
import { authOperations } from "../../redux/auth";

import {
  getExpense,
  getIncome,
  getCategories,
  addIncome,
  addExpense,
  getCategoriesExpense,
} from "../../redux/transactions/transactionsOperation";

import sprite from "../../images/sprite.svg";
import s from "./TransactionForm.module.scss";

const TransactionForm = () => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.transactions.categories);
  const categoriesExpense = useSelector(
    (state) => state.transactions.categoriesExpense
  );
  const date = useSelector((state) => state.transactions.date);

  const location = useLocation();

  const isExpense = location.pathname === "/homepage/expense";

  const { theme } = useContext(ThemeContext);

  const [disabledBtn, setDisabledBtn] = useState(true);

  useEffect(() => {
    isExpense ? dispatch(getCategoriesExpense()) : dispatch(getCategories());
    isExpense ? dispatch(getExpense()) : dispatch(getIncome());
  }, [dispatch, isExpense]);

  const handleBtnClear = (e) => {
    setAmount("");
    setDescription("");
    setCategory("");
    setDisabledBtn(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.currentTarget;
    if (description.length > 2 && category !== "" ) {
      setDisabledBtn(false);
    } else {
      setDisabledBtn(true);
    }
    switch (name) {
      case "product":
        return setDescription(value);
      case "price":
        return setAmount(value);
      default:
        return;
    }
  };

  const handleChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newOperation = {
      category,
      description,
      amount: Number(amount),
      date,
    };

    isExpense
      ? dispatch(addExpense(newOperation))
          .then(() => dispatch(getExpense()))
          .then(() => dispatch(authOperations.getBalance()))
      : dispatch(addIncome(newOperation))
          .then(() => dispatch(getIncome()))
          .then(() => dispatch(authOperations.getBalance()));
    handleBtnClear();
    setDisabledBtn(true);
  };

  return (
    <form
      className={`${s.form} ${
        theme === themes.light ? "lightTheme" : s.darkTheme
      }`}
      onSubmit={handleSubmit}
    >
      <Calendar />
      <div className={s.input_box}>
        <input
          className={`${s.input} ${s.left_input}`}
          type="text"
          name="product"
          placeholder="Описание"
          maxLength="20"
          minLength="3"
          size="20"
          required
          onChange={handleInputChange}
          value={description}
          pattern="^[a-zA-Zа-яА-ЯЁёІіЇїЄє]+(([' -][a-zA-Zа-яА-ЯЁёІіЇїЄє ])?[a-zA-Zа-яА-ЯЁёІіЇїЄє]*)*$"
        />

        <select
          className={`${s.select}`}
          onChange={handleChange}
          value={category}
          name="category"
          required
        >
          <option value="">
            {isExpense ? "Категория расходов" : "Категория доходов"}
          </option>
          {(isExpense ? categoriesExpense : categories).map((categorie) => (
            <option key={categorie} value={categorie}>
              {categorie}
            </option>
          ))}
        </select>

        <label className={s.label}>
          <input
            className={s.number}
            type="number"
            required
            min="1"
            name="price"
            onChange={handleInputChange}
            value={amount}
            onWheelCapture={(e) => {
              e.target.blur();
            }}
            placeholder="0.00"
          />
          <svg width="20px" height="20px" className={s.calc}>
            <use href={`${sprite}#calcul`}></use>
          </svg>
        </label>
      </div>

      <div className={s.wrap}>
        <Button
          text="ВВОД"
          type="submit"
          className={`${s.btn} ${disabledBtn?"":s.animation}`}
          isDisabled={disabledBtn}
        />

        <Button
          text="ОЧИCТИТЬ"
          className={s.btnClean}
          onClick={handleBtnClear}
        />
      </div>
    </form>
  );
};

export default TransactionForm;
