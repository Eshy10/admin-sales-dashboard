import SalesBarChart from "./SalesBarChart"
import SalesProgressChart from "./salesProgressChart"
import styles from './salesCharts.module.scss'

const SalesAreaCharts = () => {
  return (
    <section className={styles["content-area-charts"]}>
      <SalesBarChart />
      <SalesProgressChart />
    </section>
  )
}

export default SalesAreaCharts
