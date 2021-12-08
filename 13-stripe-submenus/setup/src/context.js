import React, { useState, useContext } from 'react'
import sublinks from './data'

// here all the global variables will be shared
const AppContext = React.createContext();

const AppProvider = ({children}) =>{
    const [isShowSidebar, setIsShowSidebar] = useState(false);
    const [isShowSubmenu, setIsShowSubmenu] = useState(false);
    const [submenuText, setSubmenuText] = useState("");
    const openSubmenu = (text, location)=>{
      setIsShowSubmenu(true);
      setLocation(location);
      setSubmenuText(text);
    }
    const closeSubmenu = () => {
      setIsShowSubmenu(false);
    };
    const [location , setLocation] = useState({});
    return (
      <AppContext.Provider
        value={{
          sublinks,
          isShowSidebar,
          setIsShowSidebar,
          isShowSubmenu,
          setIsShowSubmenu,
          openSubmenu,
          closeSubmenu,
          location,
          submenuText,
        }}
      >
        {children}
      </AppContext.Provider>
    );
}

//you can use a hook to return the context from it instead of importing
//use context and the AppContext in each js file

// custom hook
 const useGlobalContext = ()=>{
     return useContext(AppContext)
 }

export {AppContext, AppProvider, useGlobalContext}