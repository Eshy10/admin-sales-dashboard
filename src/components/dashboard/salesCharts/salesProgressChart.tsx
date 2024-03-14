import { useAppSelector } from "../../../lib/hooks";
import styles from "./salesCharts.module.scss";

const AreaProgressChart = () => {
  const sales = useAppSelector((state) => state.saleseducer.sales);
  const totalQuantity = sales?.reduce(
    (total, sale) => total + sale.quantity,
    0
  );

  const getMostSoldItems = () => {
    const productSales = [...sales];
    const uniquItems = [...new Map(productSales.map(prod => [prod.productName, prod])).values()]
    const sortedsales = uniquItems?.sort((a, b) => b.quantity - a.quantity);
    const topFourItems = sortedsales.slice(0,5);

    return [
      ...topFourItems.map(({ productName, quantity }) => ({
        productName,
        saleQuantity: quantity,
      })),
    ];
  };

  const mostSoldItems = getMostSoldItems();

  return (
    <div className={styles["progress-bar"]}>
      <div className={styles["progress-bar-info"]}>
        <h4 className={styles["progress-bar-title"]}>Most Sold Items</h4>
      </div>
      <div className={styles["progress-bar-list"]}>
        {mostSoldItems?.map(({ productName, saleQuantity }, key) => {
          return (
            <div className={styles["progress-bar-item"]} key={key}>
              <div className={styles["bar-item-info"]}>
                <p className={styles["bar-item-info-name"]}>{productName}</p>
                <p className={styles["bar-item-info-value"]}>
                  {Math.round((saleQuantity / totalQuantity) * 100)}
                </p>
              </div>
              <div className={styles["bar-item-full"]}>
                <div
                  className={styles["bar-item-filled"]}
                  style={{
                    width: `${Math.round(
                      (saleQuantity / totalQuantity) * 100
                    )}%`,
                  }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AreaProgressChart;
