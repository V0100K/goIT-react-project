import React, { useContext, useRef } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  LogarithmicScale,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Bar } from "react-chartjs-2";
import useResizeObserver from "./helps";
import { ThemeContext, themes } from "../../context/themeContext";
import s from "./GraphicComponent.module.scss";

ChartJS.register(
  ChartDataLabels,
  CategoryScale,
  LinearScale,
  BarElement,
  LogarithmicScale,
  Title,
  Tooltip,
  Legend
);

const accentColor = [{ accentColor: "#FF751D" }, { accentColor: "#FFDAC0" }];
const random = (accentColor) =>
  accentColor[Math.round(Math.random())].accentColor;

//   const getRandomIndex = (data) => {
//     return Math.round(data.length * Math.random());
//   };
//
// #757781 bacground night
//  #52555F text color labels and data
//
//
const GraphicComponent = ({ obj, categoryName, show }) => {
  const { theme } = useContext(ThemeContext);
  const dataObj = Object.entries(obj).map(([name, value]) => ({ name, value }));
  // if (show) {
  //   window.scrollTo({
  //     top: document.documentElement.scrollHeight,
  //     behavior: "smooth",
  //   });
  // }

  const dataGraph = dataObj.filter(({ name }) => name !== "total");
  const randomObjColor = dataGraph.map((item) => random(accentColor));

  dataGraph.sort((a, b) => b.value - a.value);

  const wrapperRef = useRef();
  const dimensions = useResizeObserver(wrapperRef);
  // console.log("dimensions :>> ", dimensions);
  const width = !dimensions ? 0 : dimensions.width;
  const labels = dataGraph.map(({ name }) => name);
  // console.log("width :>> ", width);

  const options = {
    // maintainAspectRatio: width < 635 ? false : true,
    // maintainAspectRatio: false,
    aspectRatio: width < 635 ? 0.5 : 2,
    responsive: true,
    indexAxis: width < 635 ? "y" : "x",
    // tooltips: {
    //   enabled: false,
    //   order: 0,
    // },
    layout: {
      // autoPadding: true,
      padding: 50,
    },
    plugins: {
      datalabels: {
        display: true,
        color: "#52555F",
        // labels: {
        // title: {
        //   color: "green",
        // },
        // },
        //  {
        labels: {
          value: labels,
          title: {
            color: "blue",
          },
        },

        // formatter: Math.round,
        anchor: "end",
        offset: width < 635 ? 10 : -20,
        align: width < 635 ? "top" : "start",
      },
    },
    // legend: {
    //   display: false,
    // },
    borderRadius: width < 635 ? 8 : 10,
    hoverBackgroundColor: "lightblue",
    scales: {
      xAxis: {
        // ticks: {
        //   // backdropColor: "red",
        //   color: "#52555F",
        // },
        grid: {
          color: ` ${theme === themes.light ? "#ffffff" : "#757781"}`,
          offset: true,
          // offset: true,
          // drawTicks: false,
          // display: width < 635 ? false : true,
          // display: false,
          // display: true,
        },
        display: width < 635 ? false : true,
        // display: true,
        // display: false,
      },
      yAxis: {
        // ticks: {
        // backdropColor: "red",
        // showLabelBackdrop: true,
        // },
        grid: {
          color: ` ${theme === themes.light ? "#ffffff" : "#757781"}`,
          // "#ffffff",
          drawTicks: false,
          // offset: false,
          // offset: true,
          // drawTicks: false,
          // display: width < 635 ? false : true,
          // display: false,
        },
        display: width < 635 ? true : false,
        // display: true ,
        // display: false,
      },
    },
    // elements: {
    //   bar: {},
    // },
  };

  const data = {
    labels,
    datasets: [
      {
        // grouped: false,
        // barPercentage: 0.5,
        // categoryPercentage: 0.5,
        barThickness: width < 635 ? 15 : 38,
        // maxBarThickness: 40,
        minBarLength: 5,
        label: categoryName,
        data: dataGraph.map((item) => item.value),
        backgroundColor: randomObjColor,
        datalabels: {
          labels: {
            value: labels,
          },
        },
        // {
        // yAxisID: "yAxis",
        // },
        // {
        // xAxisID: "xAxis",
        // },
        // heigth: width < 635 ? "700px" : "auto",
      },
    ],
  };

  return (
    // <div className={s.observer}>
    <div
      ref={wrapperRef}
      // style={{ marginBottom: "5rem", paddingBottom: "5rem" }}
      className={s.bar_wrap}
    >
      {show && <Bar options={options} data={data} />}
    </div>
    // </div>
  );
};

export default GraphicComponent;
