import React, { useState, useContext, useReducer, useEffect } from 'react'
import cartItems from './data'
import reducer from './reducer'

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-useReducer-cart-project'
const AppContext = React.createContext()
const AppProvider = ({ children }) => {

  const defaultState = {
    cart: cartItems,
    totalAmount: cartItems.reduce((prevValue, currentValue) => {
      return prevValue + currentValue.amount;
    }, 0),
    totalPrice: cartItems.reduce((prevValue, currentValue) => {
      return prevValue + currentValue.price;
    }, 0),
    loading: true,
  };
  const [state, dispatch] = useReducer(reducer, defaultState);
  //add a use effect listening on cart
  useEffect(()=>{
    dispatch({type: "GET_TOTALS"})
  },[state.cart])
  // const [cart, setCart] = useState(cartItems)
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };
  const increaseItem = (id) => {
    dispatch({ type: "INCREASE_ITEM", payload: id });
  };
  const decreaseItem = (id) => {
    dispatch({ type: "DECREASE_ITEM", payload: id });
  };
  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };
  const fetchData = async (url) => {
     dispatch({ type: "LOADING" });  
       const response = await fetch(url);
       const newCart = await response.json();
     dispatch({ type: "FETCH", payload: url, payload: newCart });

      
  };
  useEffect(()=>{
    fetchData(url);
  },[])
  return (
    <AppContext.Provider
      value={{
        state,
        clearCart,
        increaseItem,
        decreaseItem,
        removeItem,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
