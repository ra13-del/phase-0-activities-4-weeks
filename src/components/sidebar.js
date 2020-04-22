import React from 'react'

import './sidebar.css'
import { menus } from '../data/url.json'
import logo from '../assets/logo-hacktiv8.png'

const sidebar = ({ menuStatus, closeMenu }) => {
  return (
    <div id="sidebar" className={`${menuStatus ? 'open': ''}`}>
      <div className="overlay" onClick={closeMenu} />
      <div className="wrap-menu">
        <div className="logo-menu">
          <img src={logo} alt="" />
        </div>
        <ul className="menus">
          {
            menus.map(menu => {
              return <li><a href={menu.url}>{menu.title}</a></li>
            })
          }
        </ul>
      </div>
    </div>
  );
}

export default sidebar;
