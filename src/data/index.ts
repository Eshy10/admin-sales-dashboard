import {
    MdOutlineAttachMoney,
    MdOutlineBarChart,
    MdOutlineCurrencyExchange,
    MdOutlineGridView,
    MdOutlineMessage,
    MdOutlinePeople,
    MdOutlineSettings,
    MdOutlineShoppingBag,
  } from "react-icons/md";

export const MenuItems = [{
    menuName: 'Dashboard',
    menuLink: '/',
    menuIcon: MdOutlineGridView
},
{
    menuName: 'Statistics',
    menuLink: '/statistics',
    menuIcon: MdOutlineBarChart
},
{
    menuName: 'Payment',
    menuLink: '/payment',
    menuIcon: MdOutlineAttachMoney 
},
{
    menuName: 'Transactions',
    menuLink: '/transactions',
    menuIcon: MdOutlineCurrencyExchange
},
{
    menuName: 'Products',
    menuLink: '/products',
    menuIcon: MdOutlineShoppingBag 
},
{
    menuName: 'Customer',
    menuLink: '/customer',
    menuIcon: MdOutlinePeople
},
{
    menuName: 'Messages',
    menuLink: '/messages',
    menuIcon: MdOutlineMessage
},
{
    menuName: 'Settings',
    menuLink: '/settings',
    menuIcon: MdOutlineSettings
},
]
