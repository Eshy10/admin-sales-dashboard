import { useContext, useEffect } from "react";
import { useAppDispatch } from "../../lib/hooks";
import { setSales } from "../../lib/features/sales";
import { ThemeContext } from "../../context/themeContext";
import { DARK_THEME, LIGHT_THEME } from "../../constants/themeConstants";

import {
  SalesTopCard,
  SalesCard,
  SalesChart,
  SalesTable,
} from "../../components/dashboard";
import MoonIcon from "../../assets/icons/moon.svg";
import SunIcon from "../../assets/icons/sun.svg";
import "./dashboard.scss";
import { SalesData } from "../../data/sales";

const Dashboard = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setSales(SalesData));
  }, [dispatch]);

  // adding dark-mode class if the dark mode is set on to the body tag
  useEffect(() => {
    if (theme === DARK_THEME) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [theme]);

  return (
    <section className="content-area">
      <SalesTopCard />
      <SalesCard />
      <SalesChart />
      <SalesTable />
      <button type="button" className="theme-toggle-btn" onClick={toggleTheme}>
        <img
          className="theme-icon"
          src={theme === LIGHT_THEME ? SunIcon : MoonIcon}
        />
      </button>
    </section>
  );
};

export default Dashboard;
