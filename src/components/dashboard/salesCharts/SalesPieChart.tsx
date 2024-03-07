import { useContext } from "react";
import {
    PieChart, Pie, Cell,

  ResponsiveContainer,
} from "recharts";
import { ThemeContext } from "../../../context/themeContext";
import { FaArrowUpLong } from "react-icons/fa6";
import { LIGHT_THEME } from "../../../constants/themeConstants";
import styles from "./salesCharts.module.scss";


interface DataItem {
    name: string;
    value: number;
  }
  
  const data: DataItem[] = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
  ];
  
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  
  const RADIAN = Math.PI / 180;
  
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }: {
    cx: number;
    cy: number;
    midAngle: number;
    innerRadius: number;
    outerRadius: number;
    percent: number;
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
  
    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
const AreaBarChart = () => {
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
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AreaBarChart;
