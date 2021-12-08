import React from 'react'
import logo from './logo.svg'
import { FaTimes } from 'react-icons/fa'
import { social, links } from './data'
import { useGlobalContext } from "./context";


const Sidebar = () => {
  const { isShowSidebar, setIsShowSidebar} = useGlobalContext();
  
  return (
    <div className={`${isShowSidebar ? "sidebar show-sidebar" : "sidebar"}`}>
      <div className="sidebar-header">
        <img src={logo} alt="logo" />
        <button
          className="close-btn"
          onClick={() => setIsShowSidebar(!isShowSidebar)}
        >
          <FaTimes></FaTimes>
        </button>
      </div>
      <ul className="links">
        {links.map((link) => {
          return (
            <li key={link.id}>
              <a href={link.url}>
                {link.icon} {link.text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="social-icons">
        {social.map((icon) => {
          return (
            <li key={icon.id}>
              <a href={icon.url}>{icon.icon}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar
