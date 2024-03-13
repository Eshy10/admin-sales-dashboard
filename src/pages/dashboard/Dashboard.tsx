import {
  SalesTopCard,
  SalesCard,
  SalesChart,
  SalesTable,
} from "../../components/dashboard";
import './dashboard.scss';

const Dashboard = () => {
  return (
    <section className="content-area">
      <SalesTopCard />
      <SalesCard />
      <SalesChart />
      <SalesTable />
    </section>
  );
};

export default Dashboard;
