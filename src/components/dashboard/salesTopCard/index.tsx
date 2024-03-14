import { MdOutlineMenu } from "react-icons/md";
import { useContext, useRef, useState } from "react";
import { SidebarContext } from "../../../context/sidebarContext";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { addDays } from "date-fns";
import { DateRange, DateRangeProps, Range } from "react-date-range";
import useHandleClickOutside from "../../../hooks/useHandleClickOutside";
import "./salesTopCard.scss";

const SalesTop = () => {
  const { openSidebar } = useContext(SidebarContext);

  const [state, setState] = useState<DateRangeProps["ranges"]>([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  const [showDatePicker, setShowDatePicker] = useState(false);
  const dateRangeRef = useRef(null);

  const handleInputClick = () => {
    setShowDatePicker(true);
  };

  const handleDateRangeChange = (item: { selection?: Range }) => {
    if (item.selection) {
      setState([item.selection]);
    }
  };

  const handleCloseCalendar = () =>  setShowDatePicker(false);

  useHandleClickOutside(dateRangeRef, handleCloseCalendar);

  console.log('hey', state)

  return (
    <section className="content-area-top">
      <div className="area-top-l">
        <button
          className="sidebar-open-btn"
          type="button"
          onClick={openSidebar}
        >
          <MdOutlineMenu size={24} />
        </button>
        <h2 className="area-top-title">Dashboard</h2>
      </div>
      <div className="area-top-r">
        <div
          ref={dateRangeRef}
          className={`date-range-wrapper ${
            !showDatePicker ? "hide-date-range" : ""
          }`}
          onClick={handleInputClick}
        >
          <DateRange
            editableDateInputs={true}
            onChange={handleDateRangeChange}
            moveRangeOnFirstSelection={false}
            ranges={state}
            showMonthAndYearPickers={false}
          />
        </div>
      </div>
    </section>
  );
};

export default SalesTop;
