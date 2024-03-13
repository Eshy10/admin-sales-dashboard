import SalesBarChart from "./SalesBarChart";
import SalesProgressChart from "./SalesProgressChart";
import SalesLineChart from "./SalesLineChart";
import SalesPieChart from "./SalesPieChart";
import styles from "./salesCharts.module.scss";

const SalesAreaCharts = () => {
  return (
    <section>
      <div className={styles["content-area-charts"]}>
        <SalesBarChart />
        <SalesProgressChart />
      </div>
      <div className={styles["content-area-charts"]}>
        <SalesLineChart />
        <SalesPieChart />
      </div>
    </section>
  );
};

export default SalesAreaCharts;
