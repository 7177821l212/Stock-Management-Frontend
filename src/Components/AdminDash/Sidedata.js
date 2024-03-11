import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlus,faTrash,faMoneyBillTrendUp} from '@fortawesome/free-solid-svg-icons';

export const Sidedata = [
  {
    title: 'Add',
    path: '/',
    icon: <FontAwesomeIcon icon={faPlus} />,
    cName: 'nav-text'
  },
  {
    title: 'Remove',
    path: '/remove',
    icon: <FontAwesomeIcon icon={faTrash} />,
    cName: 'nav-text'
  },
  {
    title: 'Revenue',
    path: '/revenue',
    icon: <FontAwesomeIcon icon={faMoneyBillTrendUp} />,
    cName: 'nav-text'
  },
//   {
//     title: 'Team',
//     path: '/team',
//     icon: <IoIcons.IoMdPeople />,
//     cName: 'nav-text'
//   },
//   {
//     title: 'Messages',
//     path: '/messages',
//     icon: <FaIcons.FaEnvelopeOpenText />,
//     cName: 'nav-text'
//   },
//   {
//     title: 'Support',
//     path: '/support',
//     icon: <IoIcons.IoMdHelpCircle />,
//     cName: 'nav-text'
//   }
];