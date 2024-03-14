import { useContext } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useAppSelector } from "../../../lib/hooks";
import { ThemeContext } from "../../../context/themeContext";
import { FaArrowUpLong } from "react-icons/fa6";
import { LIGHT_THEME } from "../../../constants/themeConstants";
import styles from "./salesCharts.module.scss";
import { Sales } from "../../../types";


const SalesBarChart = () => {
  const sales = useAppSelector((state) => state.saleseducer.sales);
  const { theme } = useContext(ThemeContext);

  const calculateSaleProfitLoss = (sale: Sales): number => {
    if (sale.status === "delivered") {
      const revenue = sale.price * sale.quantity;
      const cogs = sale.cogs * sale.quantity;
      return revenue - cogs + sale.serviceCharges;
    } else {
      return 0; 
    }
  };
  
  const calculateMonthlyProfitLoss = ( sales: Sales[]) => {
    const monthlyProfitLoss: { [key: string]: { profit: number; loss: number } } = {};
     sales.forEach((sale) => {
      const date = new Date(sale.date);
        const month = date.toLocaleString('en-US', { month: 'short' }); 
        const monthKey = `${month}`;
        const profitLoss = calculateSaleProfitLoss(sale);
        if (!monthlyProfitLoss[monthKey]) {
            monthlyProfitLoss[monthKey] = {
                profit: 0,
                loss: 0,
            };
        }
        if (profitLoss > 0) {
            monthlyProfitLoss[monthKey].profit += profitLoss;
        } else {
            monthlyProfitLoss[monthKey].loss += Math.abs(profitLoss);
        }
    });
    return monthlyProfitLoss;
  };
  
  const totalRevenueThisMonth = () => {
    // Current date
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
  
    const deliveredOrdersThisMonth =  sales.filter(sale =>
        sale.status === "delivered" &&
        sale.date.getMonth() === currentMonth &&
        sale.date.getFullYear() === currentYear
    );
  
    const totalRevenueThisMonth = deliveredOrdersThisMonth.reduce((total, sale) =>
        total + sale.serviceCharges + (sale.price * sale.quantity), 0);
  
    return totalRevenueThisMonth;
  };
  
  const totalRevenueLastMonth = () => {
    // Current date
    const currentDate = new Date();
    const lastMonth = currentDate.getMonth() === 0 ? 11 : currentDate.getMonth() - 1;
    const lastYear = lastMonth === 11 ? currentDate.getFullYear() - 1 : currentDate.getFullYear();
  
    const deliveredOrdersLastMonth =  sales.filter(sale =>
        sale.status === "delivered" &&
        sale.date.getMonth() === lastMonth &&
        sale.date.getFullYear() === lastYear
    );
  
    const totalRevenueLastMonth = deliveredOrdersLastMonth.reduce((total, sale) =>
        total + sale.serviceCharges + (sale.price * sale.quantity), 0);
  
    return totalRevenueLastMonth;
  };
  
  const calculatePercentageChange = (currentValue: number, previousValue: number) => {
    if (previousValue === 0) {
        if (currentValue === 0) {
            return 0; 
        } else {
            return 100;
        }
    }
    return Math.round(((currentValue - previousValue) / previousValue) * 100);
  };
  
  
  const prepareChartData = (monthlyProfitLoss: { [key: string]: { profit: number, loss: number } }): { month: string, profit: number, loss: number }[] => {
    const data: { month: string, profit: number, loss: number }[] = [];
    for (const monthKey in monthlyProfitLoss) {
      const  month = monthKey;
      data.push({
        month: `${month}`,
        profit: monthlyProfitLoss[monthKey].profit,
        loss: monthlyProfitLoss[monthKey].loss,
      });
    }
    return data;
  };

  const monthlyProfitLoss = calculateMonthlyProfitLoss( sales);
  const data = prepareChartData(monthlyProfitLoss);


  const formatNumberToK = (number: number) => {
    if (number >= 1000000) {
        return (number / 1000000).toFixed(1) + 'M';
    } else if (number >= 1000) {
        return (number / 1000).toFixed(1) + 'k';
    } else {
        return number.toString();
    }
}

  const formatLegendValue = (value: string) => {
    return value.charAt(0).toUpperCase() + value.slice(1);
  };

  const formatTooltipValue = (value: number) => {
    return `${formatNumberToK(value)}`;
  };
  const formatYAxisLabel = (value: number): string => `$${formatNumberToK(value)}`;



  return (
    <div className={styles["bar-chart"]}>
      <div className={styles["bar-chart-info"]}>
        <h5 className={styles["bar-chart-title"]}>Total Revenue</h5>
        <div className={styles["chart-info-data"]}>
          <div className={styles["info-data-value"]}>{`$${formatNumberToK(totalRevenueThisMonth())}`}</div>
          <div className={styles["info-data-text"]}>
            <FaArrowUpLong />
            <p>{`${calculatePercentageChange(totalRevenueThisMonth(), totalRevenueLastMonth())}%`} than last month.</p>
          </div>
        </div>
      </div>
      <div className={styles["bar-chart-wrapper"]}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={200}
            data={data}
            margin={{
              top: 5,
              right: 5,
              left: 0,
              bottom: 5,
            }}
          >
            <XAxis
              padding={{ left: 10 }}
              dataKey="month"
              tickSize={0}
              axisLine={false}
              tick={{
                fill: `${theme === LIGHT_THEME ? "#676767" : "#f3f3f3"}`,
                fontSize: 14,
              }}
            />
            <YAxis
              padding={{ bottom: 10, top: 10 }}
              tickFormatter={formatYAxisLabel}
              tickCount={6}
              axisLine={false}
              tickSize={0}
              tick={{
                fill: `${theme === LIGHT_THEME ? "#676767" : "#f3f3f3"}`,
              }}
            />
            <Tooltip
              formatter={formatTooltipValue}
              cursor={{ fill: "transparent" }}
            />
            <Legend
              iconType="circle"
              iconSize={10}
              verticalAlign="top"
              align="right"
              formatter={formatLegendValue}
            />
            <Bar
              dataKey="profit"
              fill="#475be8"
              activeBar={false}
              isAnimationActive={false}
              barSize={24}
              radius={[4, 4, 4, 4]}
            />
            <Bar
              dataKey="loss"
              fill="#304193"
              activeBar={false}
              isAnimationActive={false}
              barSize={24}
              radius={[4, 4, 4, 4]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SalesBarChart;
