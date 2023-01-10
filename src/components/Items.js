import React, { useContext } from "react";
import { cartContext } from "./Cart";

const Items = ({id, title, description, price, img, quantity}) => {
    const {removeItem, increment, decrement} = useContext(cartContext)
    var showDate=new Date();
   const displayDay=showDate.getDate();
  return (
    <>
        <div className="items-info">
        <div className="product-img">
          <img src={img} alt="tp" />
        </div>

        <div className="title">
          <h2>{title}</h2>
          <p>{description}</p>
          <div>
          <h3>Select Date of service</h3>
              <h2>{displayDay} {displayDay+1} {displayDay+2} {displayDay+3} {displayDay+4}</h2>
          </div>
        </div>
        <div className="add-minus-quantity">
          <i className="fas fa-minus minus" onClick={()=>decrement(id)}></i>
          <input type="text" placeholder={quantity} />
          <i className="fas fa-plus add" onClick={()=>increment(id)}></i>
        </div>
        <div className="price">
          <h3>₹{price}</h3>
        </div>
        <div className="remove-item">
          <i
            className="fas fa-trash-alt remove" onClick={()=>removeItem(id)}
           ></i>
        </div>
      </div><hr/>
    </>
  );
};

export default Items;