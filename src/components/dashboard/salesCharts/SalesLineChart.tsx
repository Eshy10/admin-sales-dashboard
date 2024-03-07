import { useContext } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ThemeContext } from "../../../context/themeContext";
import { FaArrowUpLong } from "react-icons/fa6";
import { LIGHT_THEME } from "../../../constants/themeConstants";
import styles from "./salesCharts.module.scss";

const data = [
  {
    month: "Jan",
    loss: 70,
    profit: 100,
  },
  {
    month: "Feb",
    loss: 55,
    profit: 85,
  },
  {
    month: "Mar",
    loss: 35,
    profit: 90,
  },
  {
    month: "April",
    loss: 90,
    profit: 70,
  },
  {
    month: "May",
    loss: 55,
    profit: 80,
  },
  {
    month: "Jun",
    loss: 30,
    profit: 50,
  },
  {
    month: "Jul",
    loss: 32,
    profit: 75,
  },
  {
    month: "Aug",
    loss: 62,
    profit: 86,
  },
  {
    month: "Sep",
    loss: 55,
    profit: 78,
  },
];

const SalesLineChart = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={styles["bar-chart"]}>
      <div className={styles["bar-chart-info"]}>
        <h5 className={styles["bar-chart-title"]}>Total Revenue</h5>
        <div className={styles["chart-info-data"]}>
          <div className={styles["info-data-value"]}>$50.4K</div>
          <div className={styles["info-data-text"]}>
            <FaArrowUpLong />
            <p>5% than last month.</p>
          </div>
        </div>
      </div>
      <div className={styles["bar-chart-wrapper"]}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart width={500} height={300} data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="profit" stroke="#8884d8" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SalesLineChart;
