
const reducer = (state, action) => {
    //notice that instead of calling getTotalAmount && getTotalPrice at the end of each dispatch
    //it's better to make a useEffect listening at the cart and make a separate dispatch
  console.log(state, action);
 
switch (action.type) {
  case "CLEAR_CART": {
    const newItems = [];

    return {
      ...state,
      cart: newItems,
    };
  }
  case "INCREASE_ITEM": {
    //note that if you try to change the state of the cart directly
    //you will get side effects like doubling the amount
    //Example
    //state.cart.find(item => item.id === id).amount++;
    //this will result in the dispatch being called twice
    const id = action.payload;
    const newItems = state.cart.map((item) => {
      if (item.id !== id) {
        return item;
      } else {
        const newItem = { ...item, amount: item.amount + 1 };
        return newItem;
      }
    });

    return {
      ...state,
      cart: newItems,
    };
  }
  case "DECREASE_ITEM": {
    const id = action.payload;
    const newItems = state.cart
      .map((item) => {
        if (item.id !== id) {
          return item;
        } else {
          //this code wont remove the item once it goes below 1 that's why filter is added
          //     if(item.amount > 0){
          //   const newItem = { ...item, amount: item.amount - 1 };
          //   return newItem;
          // }
          //    else return item;
          const newItem = { ...item, amount: item.amount - 1 };
          return newItem;
        }
      })
      .filter((item) => item.amount !== 0);

    return {
      ...state,
      cart: newItems,
    };
  }
  case "REMOVE_ITEM": {
    const id = action.payload;
    const newItems = state.cart.filter((item) => item.id !== id);

    return {
      ...state,
      cart: newItems,
    };
  }
  case "GET_TOTALS": {
    const getTotalAmount = (cart) =>
      cart.reduce((prevValue, currentValue) => {
        return prevValue + currentValue.amount;
      }, 0);
    const getTotalPrice = (cart) =>
      parseFloat(
        cart.reduce((prevValue, currentValue) => {
          return prevValue + currentValue.price * currentValue.amount;
        }, 0)
      ).toFixed(2);

    return {
      ...state,
      totalAmount: getTotalAmount(state.cart),
      totalPrice: getTotalPrice(state.cart),
    };
  }
  //note that if you try to use "useFetch" it won't work because reducer isn't a react component
  //if you try to fetch data here it won't work
  case "LOADING": {
    return {
      ...state,
      loading: true,
    };
  }
  case "FETCH": {
    return {
      ...state,
      loading: false,
      cart: action.payload,
    };
  }
}
throw new Error("Reducer:No matching actions found.")
}

export default reducer;