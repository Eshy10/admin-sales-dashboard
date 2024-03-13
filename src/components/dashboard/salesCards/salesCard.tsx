import PropTypes from "prop-types";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import styles from './salesCards.module.scss'

interface AreaCardProps {
  colors: string[];
  percentFillValue: number;
  cardInfo: {
    title: string;
    value: string;
    text: string;
  };
}

const AreaCard = ({ colors, percentFillValue, cardInfo }: AreaCardProps) => {
  const filledValue = (percentFillValue / 100) * 360; // 360 degress for a full circle
  const remainedValue = 360 - filledValue;

  const data = [
    { name: "Remained", value: remainedValue },
    { name: "Achieved Sales", value: filledValue },
  ];

  const renderTooltipContent = (value: number) => {
    return `${(value / 360) * 100} %`;
  };

  return (
    <div className={styles["area-card"]}>
      <div className={styles["area-card-info"]}>
        <h5 className={styles["info-title"]}>{cardInfo.title}</h5>
        <div className={styles["info-value"]}>{cardInfo.value}</div>
        <p className={styles["info-text"]}>{cardInfo.text}</p>
      </div>
      <div className={styles["area-card-chart"]}>
        <PieChart width={100} height={100}>
          <Pie
            data={data}
            cx={50}
            cy={45}
            innerRadius={20}
            fill="#e4e8ef"
            paddingAngle={0}
            dataKey="value"
            startAngle={-270}
            endAngle={150}
            stroke="none"
          >
            {data.map((_entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
              />
            ))}
          </Pie>
          <Tooltip formatter={renderTooltipContent} />
        </PieChart>
      </div>
    </div>
  );
};

export default AreaCard;

AreaCard.propTypes = {
  colors: PropTypes.array.isRequired,
  percentFillValue: PropTypes.number.isRequired,
  cardInfo: PropTypes.object.isRequired,
};
