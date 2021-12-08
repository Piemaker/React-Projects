import React from 'react'
import Modal from './Modal'
import Sidebar from './Sidebar'
import Home from './Home'
import {AppProvider} from "./context"
function App() {
  return (
    <AppProvider>
      <Home></Home>
      <Sidebar></Sidebar>
      <Modal></Modal>
    </AppProvider>
  )
}

export default App
