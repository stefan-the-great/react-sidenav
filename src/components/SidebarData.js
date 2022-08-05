import React from 'react';
import { BsFillPeopleFill } from "react-icons/bs";
import { GiRoundTable } from "react-icons/gi";
// import * as FaIcons from 'react-icons/fa';
// import * as AiIcons from 'react-icons/ai';
import { IoIosPaper } from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Guest List',
    path: '/',
    icon: <BsFillPeopleFill />,
    cName: 'nav-text'
  },
  {
    title: 'Seating Plan',
    path: '/seatingplan',
    icon: <GiRoundTable />,
    cName: 'nav-text'
  },
  {
    title: 'Expenses',
    path: '/expenses',
    icon: <IoIosPaper />,
    cName: 'nav-text'
  }
];
