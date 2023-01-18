import React, { useContext, useState } from "react";
import { cartContext } from "./Cart";
import moment from "moment";


const Items = ({ id, title, description, price, img, quantity }) => {
  const { removeItem, increment, decrement } = useContext(cartContext)
  
  const dates = [];
  const today = moment();
  for (let i = 0; i < 5; i++) {
    dates.push(moment(today).add(i, 'days'));
  }
  console.log(dates);

 
const [timeSlots, setTimeSlots] = useState([]);
const createTimeSlots = (fromTime, toTime) =>{
  let startTime = moment(fromTime,'hh A');
  let endTime = moment(toTime, 'hh A');
  if(endTime.isBefore(startTime)){
    endTime.add(1, 'day');
  }
  let arr =[];
  while(startTime <= endTime){
    arr.push(new moment(startTime).format('hh A'))
    startTime.add(1,'hours');
  }
  return arr;
};
React.useEffect(()=>{
  setTimeSlots(createTimeSlots('10 AM','06 PM'))
},[])

const dateHandler=()=>{
  
  let futureDate = dates.add(4, 'hours');
  console.log(futureDate.format());
}

  return (
    <>
      <div className="items-info">
        <div className="product-img">
          <img src={img} alt="tp" />
        </div>

        <div className="title">
          <h2>{title}</h2>
          <p>{description}</p>


        </div>
        <div className="add-minus-quantity">
          <i className="fas fa-minus minus" onClick={() => decrement(id)}></i>
          <input type="text" placeholder={quantity} />
          <i className="fas fa-plus add" onClick={() => increment(id)}></i>
        </div>
        <div className="price">
          <h3>₹{price}</h3>
        </div>
        <div className="remove-item">
          <i
            className="fas fa-trash-alt remove" onClick={() => removeItem(id)}
          ></i>
        </div>
        
          <div className="slot-available">
            <div>
            <h3>Select Date of service</h3>
            <div className="date-slot"  >
            {
              dates.map((date) => {
                return (
                  <p key={date} onClick={dateHandler}>
                    {date.format('DD')}
                  </p>
                )
              })
            }
            </div>
            </div>
            <div>
            <h3>Available Slots</h3>
            <div  className="dateformat">
            {
              timeSlots.map((time, index)=>{
             return(
              <p>{time}
              {timeSlots[index+1] ? " - " + timeSlots[index+1] : ' '}
              </p>
             )
              })
            }
           
            </div>
            </div>
          </div>
         

        
      </div><hr />
    </>
  );
};

export default Items;