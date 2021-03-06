import React, { useReducer, createContext } from "react";
import Reducer from "./Reducer";

const initialState = {
  array: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  //  Used Reducer

  const [state, dispatch] = useReducer(Reducer, initialState);

  const addToCart = (cartItem) => {
   
      dispatch({
        type: "ADD_TO_CART",
        payload: cartItem,
      });
    
  };
  const checkout_Done = (payload) => {
   
      dispatch({
        type: "EMPTY_CART",
        payload:payload,
      });
    
  };
  // const remove_Cart_Item=(id)=>{

  // }
  return (
    <GlobalContext.Provider value={{ myCart: state.array, addToCart,checkout_Done }}>
      {children}
    </GlobalContext.Provider>
  );
};
