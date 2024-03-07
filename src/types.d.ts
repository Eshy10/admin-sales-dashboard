// General types go here
import { CSSProperties } from 'react';

export interface Styled {
   className?: string;
   style?: CSSProperties;
}

export interface AnyObject {
   [propName: string]: unknown;
}

export type SideBarContextType = {
   isSidebarOpen: boolean;
   openSidebar: () => void;
   closeSidebar: () => void;
 };

 export type ThemeContextType = {
   theme: string | null;
   toggleTheme: () => void;
 };