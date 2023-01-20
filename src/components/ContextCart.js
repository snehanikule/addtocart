import React, { useContext, useState } from 'react'
import { Scrollbars } from 'react-custom-scrollbars-2';
import Items from './Items';
import { useNavigate } from 'react-router-dom';

import { cartContext } from './Cart';

const ContextCart = () => {
    let navigate = useNavigate();
    const addRepair=()=>{
           navigate("/ProductDetail")
    }
    const { item, totalAmount, totalItem, clearCart} = useContext(cartContext);
    if (item.length === 0) {
        return (
            <>
                <section className="main-cart-section">
                    <h1>Your Cart</h1>
                    <p className="total-items">
                        Repair Devices <span className="total-items-count">0 </span>
                    </p>

                    <div className="cart-items">
                        <div className="cart-items-container">
                            <Scrollbars className="cart-items-container">
                                <h1>Empty Cart</h1>
                            </Scrollbars>
                        </div>
                    </div>
                </section>
            </>
        )
    }
    return (
        <div>
            <header>
                <div className="continue-shopping">
                    <h3>Application Task:</h3>
                </div>
                <div className="cart-icon">
                    <img src="./images/cart.png" alt="cart-logo" />
                    <p>{totalItem}</p>
                </div>
            </header>
            <section className='main-cart-section'>
                <h1>Your cart</h1>
                <button onClick={clearCart}>Clear This Cart</button>
                <p className='cart-device'>Devices</p>
                <p className='total-items'>Repair Devices (<span className='total-items-count'>{totalItem} </span>Devices)</p>

                <div className='cart-items'>
                    <div className='cart-items-container'>
                        <Scrollbars>
                            {
                                item.map((currItem) => {
                                    return <Items key={currItem.id} {...currItem} />
                                })
                            }
                        </Scrollbars>
                    </div>
                </div>
                <div>
               
             <button onClick={addRepair}>Add Repairing services</button>
             
                   
                </div>
                
                <div className='card-total'>
                    <h3>Total Amount : <span>₹{totalAmount} </span></h3>
                    <button>Checkout Service</button>
                </div>
            </section>
        </div>
    )
}

export default ContextCart