// import PropTypes from 'prop-types';
import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import s from "./CategoryList.module.scss";
import { categories, incomes } from "./categoriesIcons";
import amount from "../../redux/user/user-selectors";
import { ThemeContext, themes } from "../../context/themeContext";
import { useDispatch } from "react-redux";
import { getPeriodData } from "../../redux/user/user-operations";

const CategoryList = ({
  reportTitle,
  setGraphObj,
  date,
  onChageReportTitle,
}) => {
  const activeHandler = (i) => {
    console.log('"click" :>> ', "click");

    // setActiveId(true);
  };

  const dispatch = useDispatch();
  const incomesObj = useSelector(amount.payment);
  const expenseObj = useSelector(amount.expenses);
  const { theme } = useContext(ThemeContext);
  const [activeId, setActiveId] = useState(false);
  // console.log("incomesObj :>> ", incomesObj);
  // console.log("expenseObj :>> ", expenseObj);

  // incomesObj === undefined ? [] : Object.values(incomesObj);
  const incomesListTitles =
    incomesObj === undefined ? [] : Object.keys(incomesObj);
  // const incomesFunc = (incomesObj) => {
  //   if (incomesObj === undefined) {
  //     onChageReportTitle();
  //     return [];
  //   }
  //   return Object.values(incomesObj);
  // };
  const incomesListValues =
    incomesObj === undefined ? [] : Object.values(incomesObj);

  const expenseListTitles =
    expenseObj === undefined ? [] : Object.keys(expenseObj);
  const expenseListValues =
    expenseObj === undefined ? [] : Object.values(expenseObj);
  // expenseObj === undefined ? [] : Object.values(expenseObj);
  // const expensesFunc = (expenseObj) => {
  //   if (expenseObj === undefined) {
  //     onChageReportTitle();
  //     return [];
  //   }
  //   return Object.values(expenseObj);
  // };

  // console.log("expenseListValues :>> ", expenseListValues);

  useEffect(() => {
    dispatch(getPeriodData(date));
  }, [date, dispatch]);

  const handleClick = (e, id) => {
    setActiveId(id);
    // setActiveId(e.target.closest("LI").dataset.id);
    // if (e.currentTarget.class === "active") {
    //   e.currentTarget.className = "item";
    //   console.log("remove");
    // } else {
    //   e.currentTarget.className = "active";
    //   console.log("add class");
    // }
  };

  return (
    <ul
      className={`${s.list} ${
        theme === themes.light ? "lightTheme" : s.darkTheme
      }`}
    >
      {reportTitle === "доходы"
        ? // || incomesListTitles.length !== 0
          // incomesObj
          incomesListValues
            .sort((a, b) => b.total - a.total)
            .map((item, index) => {
              const filteredIcon = incomes.find(
                ({ name }) =>
                  incomesListTitles[index].toString() === name.toString()
              );
              return (
                <li
                  key={index}
                  id={index}
                  className={`${s.item} ${activeId === index ? s.active : ""}`}
                  onClick={(e) => {
                    handleClick(e, index);
                    activeHandler(e);
                    setGraphObj(item, incomesListTitles[index]);
                  }}
                >
                  <span>{`${item.total}.00`}</span>
                  <div className={s.link}>
                    <svg viewBox="0 0 32 32" className={s.img}>
                      <use href={filteredIcon.svg} />
                    </svg>
                    <div className={s.rectangle_icon}></div>
                  </div>
                  <span>{incomesListTitles[index]}</span>
                </li>
              );
            })
        : expenseListValues
            .sort((a, b) => b.total - a.total)
            .map((item, index) => {
              const filteredIcon = categories.find(
                ({ name }) =>
                  expenseListTitles[index].toString() === name.toString()
              );
              return (
                <li
                  key={index}
                  id={index + 1}
                  className={`${s.item} ${
                    activeId === index + 1 ? s.active : ""
                  }`}
                  onClick={(e) => {
                    handleClick(e, index + 1);
                    activeHandler(e);
                    setGraphObj(item, expenseListTitles[index]);
                  }}
                >
                  <span>{`${item.total}.00`}</span>
                  <div className={s.link}>
                    <svg viewBox="0 0 32 32" className={s.img}>
                      <use href={filteredIcon.svg} />
                    </svg>
                    <div className={s.rectangle_icon}></div>
                  </div>
                  <span>{expenseListTitles[index]}</span>
                </li>
              );
            })}
    </ul>
  );
};

export default CategoryList;
