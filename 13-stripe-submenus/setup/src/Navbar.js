import React from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import {useGlobalContext} from "./context"

const Navbar = () => {
  const { sublinks, isShowSidebar, setIsShowSidebar, openSubmenu,closeSubmenu } =
    useGlobalContext();
    const handleMouseOver = (event)=>{
      // console.log(event.target.textContent)
      // console.log(event.target.getBoundingClientRect());
      const text = event.target.textContent;
      const btnInfo = event.target.getBoundingClientRect();
      const center = (btnInfo.left + btnInfo.right) / 2;
      const bottomShifted = btnInfo.bottom - 3;
      // shift the position top by 3 pixels so it doesn't get hid when
      // it the mouse touches the navbar
      const location = { center, bottomShifted };
      openSubmenu(text, location);
    }
    const handleSubmenu = (event)=>{
      // check if any of the nav elements triggering the event is a button
      if(!event.target.classList.contains("link-btn")){
        closeSubmenu();
      }
    }
  return (
    <nav className="nav" onMouseOver={(event) => handleSubmenu(event)}>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" />
          <button
            className="btn toggle-btn"
            onClick={() => setIsShowSidebar(!isShowSidebar)}
          >
            <FaBars></FaBars>
          </button>
        </div>
        <ul className="nav-links">
          {sublinks.map((link, index) => {
            return (
              <li key={index}>
                <button
                  className="link-btn"
                  onMouseOver={(event) => handleMouseOver(event)}
                >
                  {link.page}
                </button>
              </li>
            );
          })}
        </ul>
        <button className="btn signin-btn">Sign in</button>
      </div>
    </nav>
  );
}

export default Navbar
