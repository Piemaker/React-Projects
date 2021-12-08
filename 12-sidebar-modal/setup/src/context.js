import React, { useState, useContext } from 'react'

// here all the global variables will be shared
const AppContext = React.createContext();

const AppProvider = ({children}) =>{
    const [isShowSidebar, setIsShowSidebar] = useState(false);
    const [isShowModal, setIsShowModal] = useState(false);
    return (
      <AppContext.Provider value={{ isShowSidebar , setIsShowSidebar, isShowModal, setIsShowModal}}>
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