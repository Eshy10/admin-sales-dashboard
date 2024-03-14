import { useAppSelector } from "../../../lib/hooks";
import AreaTableAction from "./salesTableAction";
import styles from "./salesTable.module.scss";

const TABLE_HEADS = [
  "Products",
  "Order ID",
  "Date",
  "Customer name",
  "Status",
  "Amount",
  "Action",
];

const SalesTable = () => {
  const sales = useAppSelector((state) => state.saleseducer.sales);

  const formatDate = (val: Date) => {
    const date = new Date(val);
    const formattedDate = `${date.toLocaleString('default', { month: 'short' })} ${date.getDate()}, ${date.getFullYear()}`;
    return formattedDate;
  }

  return (
    <section className={styles["content-area-table"]}>
      <div className={styles["data-table-info"]}>
        <h4 className={styles["data-table-title"]}>Latest Orders</h4>
      </div>
      <div className={styles["data-table-diagram"]}>
        <table>
          <thead>
            <tr>
              {TABLE_HEADS?.map((th, index) => (
                <th key={index}>{th}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            { sales?.slice(7).map((dataItem) => {
              return (
                <tr key={dataItem.id}>
                  <td>{dataItem.productName}</td>
                  <td>{dataItem.orderID}</td>
                  <td>{formatDate(dataItem.date)}</td>
                  <td>{dataItem.customer}</td>
                  <td>
                    <div className={styles["dt-status"]}>
                      <span
                        className={
                          styles[`dt-status-dot dot-${dataItem.status}`]
                        }
                      ></span>
                      <span className={styles["dt-status-text"]}>
                        {dataItem.status}
                      </span>
                    </div>
                  </td>
                  <td>${dataItem.price.toFixed(2)}</td>
                  <td className={styles["dt-cell-action"]}>
                    <AreaTableAction />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default SalesTable;
