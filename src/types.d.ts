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

 export interface Sales {
   id: number;
   orderID: number;
   date: Date;
   productName: string;
   cogs: number;
   price: number;
   availability: number;
   quantity: number;
   escrow: numbe;
   serviceCharges: number;
   customer: string;
   status: string;
 }