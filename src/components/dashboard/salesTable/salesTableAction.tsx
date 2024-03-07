import { useRef, useState } from "react";
import { HiDotsHorizontal } from "react-icons/hi";
import { Link } from "react-router-dom";
import useHandleClickOutside from "../../../hooks/useHandleClickOutside";
import styles from './salesTable.module.scss';

const AreaTableAction = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const handleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const dropdownRef = useRef(null);

  useHandleClickOutside(dropdownRef, handleDropdown);

  return (
    <>
      <button
        type="button"
        className={styles["action-dropdown-btn"]}
        onClick={handleDropdown}
      >
        <HiDotsHorizontal size={18} />
        {showDropdown && (
          <div className={styles["action-dropdown-menu"]} ref={dropdownRef}>
            <ul className={styles["dropdown-menu-list"]}>
              <li className={styles["dropdown-menu-item"]}>
                <Link to="/view" className={styles["dropdown-menu-link"]}>
                  View
                </Link>
              </li>
              <li className={styles["dropdown-menu-item"]}>
                <Link to="/view" className={styles["dropdown-menu-link"]}>
                  Edit
                </Link>
              </li>
              <li className={styles["dropdown-menu-item"]}>
                <Link to="/view" className={styles["dropdown-menu-link"]}>
                  Delete
                </Link>
              </li>
            </ul>
          </div>
        )}
      </button>
    </>
  );
};

export default AreaTableAction;
