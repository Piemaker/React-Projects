import React from 'react'
import { FaBars } from 'react-icons/fa'
//import {useContext} from "react"
//import { AppContext } from './context'
import { useGlobalContext } from "./context";

const Home = () => {
  //const data = useContext(AppContext);
  // custom hook approach saves importing useContext and AppContext
  const { isShowSidebar, setIsShowSidebar , isShowModal, setIsShowModal} = useGlobalContext();

  const toggleSideBar = ()=>{

  }
  return (
    <main>
      <button
        className= "sidebar-toggle"
        onClick={() => setIsShowSidebar(!isShowSidebar)}
      >
        <FaBars></FaBars>
      </button>
      <button className="btn" onClick={()=> setIsShowModal(!isShowModal)}>
        show modal
      </button>
    </main>
  );
}

export default Home
