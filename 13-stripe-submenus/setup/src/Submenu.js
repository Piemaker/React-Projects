import React, { useState, useRef, useEffect } from 'react'
import { useGlobalContext } from "./context";
const Submenu = () => {
  const { sublinks, isShowSubmenu, location, submenuText,closeSubmenu,col } = useGlobalContext()
  const container = useRef(null);
  useEffect(()=>{
    const submenu = container.current;
    console.log(location);
    submenu.style.left = `${location.center}px`;
    submenu.style.top = `${location.bottomShifted}px`;


  },[location])
    
      const filteredSublink = sublinks.filter(
        (link) => link.page === submenuText
      );
    
  
  return (
    <aside
      ref={container}
      
      className={` ${isShowSubmenu ? "submenu show" : "submenu"}`}
    >
      {filteredSublink.map((link, index) => {
        const { page, links } = link;
        return (
          <section>
            <h4>{page}</h4>
            <div className="submenu-center col-auto">
              {links.map((innerLink) => {
                const { label, icon, url } = innerLink;
                return (
                  <a href={url}>
                    {icon} {label}
                  </a>
                );
              })}
            </div>
          </section>
        );
      })}
    </aside>
  );
}

export default Submenu
