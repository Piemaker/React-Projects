import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'
import {useFetch} from "./useFetch"

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("");
  return <AppContext.Provider value={{searchQuery,setSearchQuery, useFetch, url}}>{children}</AppContext.Provider>
}

// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
