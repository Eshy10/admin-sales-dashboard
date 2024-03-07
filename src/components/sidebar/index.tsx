import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../context/themeContext";
import { LIGHT_THEME } from "../../constants/themeConstants";
import LogoBlue from "../../assets/images/logo_blue.svg";
import LogoWhite from "../../assets/images/logo_white.svg";
import { MdOutlineClose, MdOutlineLogout } from "react-icons/md";
import sidebarStyles from "./sidebar.module.scss";
import { SidebarContext } from "../../context/sidebarContext";
import useHandleClickOutside from "../../hooks/useHandleClickOutside";
import { MenuItems } from "../../data";

const Sidebar = () => {
  const { theme } = useContext(ThemeContext);
  const { isSidebarOpen, closeSidebar } = useContext(SidebarContext);
  const navbarRef = useRef<HTMLDivElement | null>(null);

  useHandleClickOutside(navbarRef, closeSidebar)


  return (
    <nav
      className={isSidebarOpen ? sidebarStyles["sidebar-show"] : ""}
      ref={navbarRef}
    >
      <div className={sidebarStyles["sidebar-top"]}>
        <div className={sidebarStyles["sidebar-brand"]}>
          <img src={theme === LIGHT_THEME ? LogoBlue : LogoWhite} alt="" />
          <span className={sidebarStyles["sidebar-brand-text"]}>tabernam.</span>
        </div>
        <button
          className={sidebarStyles["sidebar-close-btn"]}
          onClick={closeSidebar}
        >
          <MdOutlineClose size={24} />
        </button>
      </div>
      <div className={sidebarStyles["sidebar-body"]}>
        <div className={sidebarStyles["sidebar-menu"]}>
          <ul className={sidebarStyles["menu-list"]}>
            {MenuItems.slice(0, 7).map((menu) => (
              <li className={sidebarStyles["menu-item"]}>
                <Link
                  to={menu?.menuLink}
                  className={`${sidebarStyles["menu_link"]} ${sidebarStyles["active"]}`}
                >
                  <span className={sidebarStyles["menu-link-icon"]}>
                    <menu.menuIcon size={18} />
                  </span>
                  <span className={sidebarStyles["menu-link-text"]}>
                    {menu?.menuName}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div
          className={`${sidebarStyles["sidebar-menu"]} ${sidebarStyles["sidebar-menu2"]}`}
        >
          <ul className={sidebarStyles["menu-list"]}>
            {MenuItems.slice(-1).map((menu) => (
              <li className={sidebarStyles["menu-item"]}>
                <Link
                  to={menu?.menuLink}
                  className={`${sidebarStyles["menu_link"]} ${sidebarStyles["active"]}`}
                >
                  <span className={sidebarStyles["menu-link-icon"]}>
                    <menu.menuIcon size={18} />
                  </span>
                  <span className={sidebarStyles["menu-link-text"]}>
                    {menu?.menuName}
                  </span>
                </Link>
              </li>
            ))}
            <li className={sidebarStyles["menu-item"]}>
              <Link to="/" className={sidebarStyles["menu-link"]}>
                <span className={sidebarStyles["menu-link-icon"]}>
                  <MdOutlineLogout size={20} />
                </span>
                <span className={sidebarStyles["menu-link-text"]}>Logout</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
