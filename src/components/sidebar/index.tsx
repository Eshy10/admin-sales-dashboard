import { useContext, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { MdOutlineClose, MdOutlineLogout } from "react-icons/md";
import { SidebarContext } from "../../context/sidebarContext";
import useHandleClickOutside from "../../hooks/useHandleClickOutside";
import { MenuItems } from "../../data";
import styles from "./sidebar.module.scss";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useContext(SidebarContext);
  const navbarRef = useRef<HTMLDivElement | null>(null);

  const location = useLocation();

  useHandleClickOutside(navbarRef, closeSidebar);

  return (
    <nav
      className={` ${styles["sidebar"]} ${
        isSidebarOpen ? styles["sidebar-show"] : ""
      }`}
      ref={navbarRef}
      role=""
      data-testId='sidebar'
    >
      <div className={styles["sidebar-top"]}>
        <div className={styles["sidebar-brand"]}>
          <span className={styles["sidebar-brand-text"]}>LOGO.</span>
        </div>
        <button className={styles["sidebar-close-btn"]} onClick={closeSidebar} data-testId='hamburger-menu'>
          <MdOutlineClose size={24} />
        </button>
      </div>
      <div className={styles["sidebar-body"]}>
        <div className={styles["sidebar-menu"]}>
          <ul className={styles["menu-list"]}>
            {MenuItems.slice(0, 7).map((menu, index) => (
              <li className={styles["menu-item"]} key={index}>
                <Link
                  to={menu?.menuLink}
                  className={`${styles["menu-link"]} ${
                    location.pathname === menu?.menuLink ? styles["active"] : ""
                  }`}
                >
                  <span className={styles["menu-link-icon"]}>
                    <menu.menuIcon size={18} />
                  </span>
                  <span className={styles["menu-link-text"]}>
                    {menu?.menuName}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={`${styles["sidebar-menu"]} ${styles["sidebar-menu2"]}`}>
          <ul className={styles["menu-list"]}>
            {MenuItems.slice(-1).map((menu, index) => (
              <li className={styles["menu-item"]} key={index}>
                <Link
                  to={menu?.menuLink}
                  className={`${styles["menu-link"]} ${
                    location.pathname === menu?.menuLink ? styles["active"] : ""
                  }`}
                >
                  <span className={styles["menu-link-icon"]}>
                    <menu.menuIcon size={18} />
                  </span>
                  <span className={styles["menu-link-text"]}>
                    {menu?.menuName}
                  </span>
                </Link>
              </li>
            ))}
            <li className={styles["menu-item"]}>
              <Link to="/" className={styles["menu-link"]}>
                <span className={styles["menu-link-icon"]}>
                  <MdOutlineLogout size={20} />
                </span>
                <span className={styles["menu-link-text"]}>Logout</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
