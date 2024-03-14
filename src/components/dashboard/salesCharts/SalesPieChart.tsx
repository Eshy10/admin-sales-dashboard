import { useAppSelector } from "../../../lib/hooks";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";
import { FaArrowUpLong } from "react-icons/fa6";
import styles from "./salesCharts.module.scss";
import { Sales } from "../../../types";



const COLORS = ["#475be8", "#FF8042"];

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
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
const SalesPieChart = () => {
  const sales = useAppSelector((state) => state.saleseducer.sales);

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
  
  const calculateSaleProfitLoss = (sale: Sales): number => {
    if (sale.status === "delivered") {
      const revenue = sale.price * sale.quantity;
      const cogs = sale.cogs * sale.quantity;
      return revenue - cogs + sale.serviceCharges;
    } else {
      return 0; 
    }
  };
  
  const prepareChartData = ( sales: Sales[]): { name: string, value: number }[] => {
    const currentDate = new Date();
    const currentMonth = currentDate.toLocaleString('en-US', { month: 'short' });
  
    const monthlyProfitLoss: { [key: string]: { profit: number; loss: number } } = {};
    
    // Calculate profit and loss for the present month
     sales.forEach((sale) => {
      const date = new Date(sale.date);
      const month = date.toLocaleString('en-US', { month: 'short' });
      
      // Filter sales data for the present month
      if (date.getMonth() === currentDate.getMonth() && date.getFullYear() === currentDate.getFullYear()) {
        const profitLoss = calculateSaleProfitLoss(sale);
        
        if (!monthlyProfitLoss[month]) {
          monthlyProfitLoss[month] = {
            profit: 0,
            loss: 0,
          };
        }
  
        if (profitLoss > 0) {
          monthlyProfitLoss[month].profit += profitLoss;
        } else {
          monthlyProfitLoss[month].loss += Math.abs(profitLoss);
        }
      }
    });
  
    // Prepare chart data
    const chartData: { name: string, value: number }[] = [];
    let profitValue = 0;
    let lossValue = 0;
  
    if (monthlyProfitLoss[currentMonth]) {
      profitValue = monthlyProfitLoss[currentMonth].profit;
      lossValue = monthlyProfitLoss[currentMonth].loss;
    }
  
    chartData.push({ name: "Profit", value: profitValue });
    chartData.push({ name: "Loss", value: lossValue });
  
    return chartData;
  };

  // const monthlyProfitLoss = calculateMonthlyProfitLoss( sales);
  const data = prepareChartData( sales);

  const formatNumberToK = (number: number) => {
    if (number >= 1000000) {
        return (number / 1000000).toFixed(1) + 'M';
    } else if (number >= 1000) {
        return (number / 1000).toFixed(1) + 'k';
    } else {
        return number.toString();
    }
}

  return (
    <div className={styles["bar-chart"]}>
      <div className={styles["bar-chart-info"]}>
        <h5 className={styles["bar-chart-title"]}>Total Revenue</h5>
        <div className={styles["chart-info-data"]}>
          <div className={styles["info-data-value"]}>{`$${formatNumberToK(totalRevenueThisMonth())}`}</div>
          <div className={styles["info-data-text"]}>
            <FaArrowUpLong />
            <p>{`${calculatePercentageChange(totalRevenueThisMonth(), totalRevenueLastMonth())}% than last month.`}</p>
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
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SalesPieChart;
