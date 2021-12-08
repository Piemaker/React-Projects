import React from 'react'
import { FaTimes } from 'react-icons/fa'
import sublinks from './data'
import { useGlobalContext } from "./context";


const Sidebar = () => {
  const {isShowSidebar, setIsShowSidebar} = useGlobalContext();
  return (
    <div className={`${isShowSidebar ? "sidebar-wrapper show" : "sidebar-wrapper"}`}>
      <aside className="sidebar">
        <button onClick = {()=> setIsShowSidebar(!isShowSidebar)} className="close-btn"> 
          <FaTimes></FaTimes>
        </button>
        <div className="sidebar-links">
          {sublinks.map((link) => {
            const { page, links } = link;

            return (
              <article>
                <h4>{page}</h4>
                <div className="sidebar-sublinks">
                  {links.map((innerLink) => {
                    const { label, icon, url } = innerLink;
                    return (
                      <a href={url}>
                        {icon}
                        {label}
                      </a>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </aside>
    </div>
  );
}

export default Sidebar
