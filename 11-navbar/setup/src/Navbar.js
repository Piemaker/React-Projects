import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {
  const [isShowContainer,setIsShowContainer] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
 useEffect(() => {
   const linksHeight = linksRef.current.getBoundingClientRect().height;
   if (isShowContainer) {
     linksContainerRef.current.style.height = `${linksHeight}px`;
   } else {
     linksContainerRef.current.style.height = "0px";
   }
 }, [isShowContainer]);
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" />
          <button className="nav-toggle" onClick = {()=> setIsShowContainer(!isShowContainer)}>
            <FaBars></FaBars>
          </button>
        </div>
        <div ref = {linksContainerRef}
          className={`links-container  ${isShowContainer && "show-container"}`}
        >
          <ul ref = {linksRef} className="links">
            {links.map((link) => {
              return (
                <li key={link.key}>
                  <a href={link.url}>{link.text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <ul className="social-icons">
          {social.map((icon) => {
            return (
              <li key={icon.key}>
                <a href={icon.url}>{icon.icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar
