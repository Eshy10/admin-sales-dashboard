import { createContext, useState } from "react";
import PropTypes from "prop-types";
import { SideBarContextType } from "../types";

interface SideBarContextProps {
  children: React.ReactNode;
}

export const SidebarContext = createContext({} as SideBarContextType);

export const SidebarProvider = ({ children }: SideBarContextProps) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const openSidebar = () => {
    setSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <SidebarContext.Provider
      value={{
        isSidebarOpen,
        openSidebar,
        closeSidebar,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

SidebarProvider.propTypes = {
  children: PropTypes.node,
};
