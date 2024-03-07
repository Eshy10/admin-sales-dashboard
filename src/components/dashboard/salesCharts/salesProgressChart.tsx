import styles from "./salesCharts.module.scss";

const data = [
  {
    id: 1,
    name: "Jeans",
    percentValues: 70,
  },
  {
    id: 2,
    name: "Shirts",
    percentValues: 40,
  },
  {
    id: 3,
    name: "Belts",
    percentValues: 60,
  },
  {
    id: 4,
    name: "Caps",
    percentValues: 80,
  },
  {
    id: 5,
    name: "Others",
    percentValues: 20,
  },
];

const AreaProgressChart = () => {
  return (
    <div className={styles["progress-bar"]}>
      <div className={styles["progress-bar-info"]}>
        <h4 className={styles["progress-bar-title"]}>Most Sold Items</h4>
      </div>
      <div className={styles["progress-bar-list"]}>
        {data?.map((progressbar) => {
          return (
            <div className={styles["progress-bar-item"]} key={progressbar.id}>
              <div className={styles["bar-item-info"]}>
                <p className={styles["bar-item-info-name"]}>
                  {progressbar.name}
                </p>
                <p className={styles["bar-item-info-value"]}>
                  {progressbar.percentValues}
                </p>
              </div>
              <div className={styles["bar-item-full"]}>
                <div
                  className={styles["bar-item-filled"]}
                  style={{
                    width: `${progressbar.percentValues}%`,
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
