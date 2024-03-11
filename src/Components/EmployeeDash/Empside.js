import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWarehouse, faBars, faPlus} from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './EmpSidebar.css';

const Empside= ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  const menuItem = [
    {
      path: '/empstocks',
      name: 'EmpStocks',
      icon: <FontAwesomeIcon icon={faWarehouse} />,
    },
    {
      path: '/empadd',
      name: 'EmpAdd',
      icon: <FontAwesomeIcon icon={faPlus} />,
    }
   
  ];

  return (
    <div className={`d-flex${isOpen ? ' toggled' : ''}`} id="wrapper">
      <div className="bg-light border-right" id="sidebar-wrapper" style={{ backgroundColor: 'rgb(49, 53, 57)' }}>
        <div className="sidebar-heading">Menu</div>
        <div className="list-group list-group-flush">
          {menuItem.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className="list-group-item list-group-item-action"
              activeClassName="active"
              onClick={closeSidebar}
            >
              {item.icon}
              <span className="ml-2">{item.name}</span>
            </NavLink>
          ))}
        </div>
      </div>

      <div id="page-content-wrapper">
        <button type="button" className="btn btn-light" onClick={toggle}>
          <FontAwesomeIcon icon={faBars} />
        </button>
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Empside;

