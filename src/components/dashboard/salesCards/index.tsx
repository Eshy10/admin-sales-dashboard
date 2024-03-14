import { useAppSelector } from "../../../lib/hooks";
import SalesCard from "./salesCard";
import styles from "./salesCards.module.scss";

const SalesCards = () => {
  const sales = useAppSelector((state) => state.saleseducer.sales);

  const salesTarget = 79000000;
  const revenueTarget = 80000000;
  const escrowTarget = 5000;

  const formatNumberToK = (number: number) => {
    if (number >= 1000000) {
      return (number / 1000000).toFixed(1) + "M";
    } else if (number >= 1000) {
      return (number / 1000).toFixed(1) + "k";
    } else {
      return number.toString();
    }
  };
  const todaysTotals = (metric: string) => {
    const todayTimestamp = new Date();

    const totalSalesToday = sales?.reduce((total, sale) => {
      if (
        new Date(sale?.date).toDateString() === todayTimestamp.toDateString()
      ) {
        let amount = 0;
        const sales = sale?.price * sale?.quantity;
        if (metric === "sales") {
          amount += sales;
        } else if (metric === "revenue") {
          amount += sales + sale?.serviceCharges;
        } else {
          amount += sale?.escrow;
        }
        return total + amount;
      } else {
        return total;
      }
    }, 0);

    return totalSalesToday;
  };

  const sumSalesToday = () => {
    const today = new Date();

    const salesToday = sales?.filter(({ date }) => {
      const saleDate = new Date(date);
      return saleDate.toDateString() === today.toDateString();
    });

    const totalSalesToday = salesToday.reduce(
      (total, { quantity }) => total + quantity,
      0
    );

    return totalSalesToday;
  };

  return (
    <section className={styles["content-area-cards"]}>
      <SalesCard
        colors={["#e4e8ef", "#475be8"]}
        percentFillValue={Math.round(
          (todaysTotals("sales") / salesTarget) * 100
        )}
        cardInfo={{
          title: "Todays Sales",
          value: `$${formatNumberToK(todaysTotals("sales"))}`,
          text: `We have sold ${sumSalesToday()} items.`,
        }}
      />
      <SalesCard
        colors={["#e4e8ef", "#4ce13f"]}
        percentFillValue={Math.round(
          (todaysTotals("sales") / revenueTarget) * 100
        )}
        cardInfo={{
          title: "Todays Revenue",
          value: `$${formatNumberToK(todaysTotals("revenue"))}`,
          text: "Available to payout",
        }}
      />
      <SalesCard
        colors={["#e4e8ef", "#f29a2e"]}
        percentFillValue={Math.round(
          (todaysTotals("escrow") / escrowTarget) * 100
        )}
        cardInfo={{
          title: "In Escrow",
          value: `$${formatNumberToK(todaysTotals("escrow"))}`,
          text: "Available to payout",
        }}
      />
    </section>
  );
};

export default SalesCards;
