import { useContext, useEffect } from "react";
import { Decstop } from "./Decstop/Decstop";
import { useMediaQuery } from "react-responsive";

import { Mobile } from "./Mobile/Mobile";
import { ThemeContext, themes } from "../../context/themeContext";

import s from "./HomePage.module.scss";
import { useDispatch } from "react-redux";
import { authOperations } from "../../redux/auth";

const HomePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authOperations.getBalance());
  }, [dispatch]);

  const isMobile = useMediaQuery({ minWidth: 320, maxWidth: 767 });
  const { theme } = useContext(ThemeContext);

  return (
    <section
      className={`background ${s.home} ${
        theme === themes.light ? "lightTheme" : s.darkTheme
      }`}
    >
      <div className="container">{isMobile ? <Mobile /> : <Decstop />}</div>
    </section>
  );
};

export default HomePage;
