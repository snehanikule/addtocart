import React, { createContext, useEffect, useReducer} from 'react';
import './cart.css';

import { products } from './product';
import ContextCart from './ContextCart';
import {reducer} from './reducer'

export const cartContext = createContext();
const initialState={
    item:products,
    totalAmount:0,  
    totalItem:0,
}
const Cart = () => {
const [state, dispatch] = useReducer(reducer, initialState)

const removeItem=(id)=>{
   return dispatch({
    type:"REMOVE_ITEM",
    payload:id,
   })
}

const clearCart=()=>{
    return dispatch({type:"CLEAR_CART"})
}

const increment =(id)=>{
    return dispatch({
        type:"INCREMENT",
        payload:id,
    })
}

const decrement = (id)=>{
    return dispatch({
        type:"DECREMENT",
        payload:id,
    })
}

useEffect(()=>{
    dispatch({type:"GET_TOTAL"})
   
},[state.item])

  return (  
    <div>
        <cartContext.Provider value={{...state, removeItem, clearCart, increment, decrement}}>
        <ContextCart/>
        </cartContext.Provider>
    </div>
  )
}

export default Cart