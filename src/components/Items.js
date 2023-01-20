import React, { useContext, useState } from "react";
import { cartContext } from "./Cart";
import moment from "moment";


const Items = ({ id, title, description, price, img, quantity }) => {
  const { removeItem, increment, decrement } = useContext(cartContext)
  const [fourHoursLater, setFourHoursLater] = useState(null);
  const dates = [];
  const today = moment();
  for (let i = 0; i < 5; i++) {
    dates.push(moment(today).add(i, 'days'));
  }
  


  const [timeSlots, setTimeSlots] = useState([]);
  const createTimeSlots = (fromTime, toTime) => {
    let startTime = moment(fromTime, 'hh A');
    let endTime = moment(toTime, 'hh A');
    if (endTime.isBefore(startTime)) {
      endTime.add(1, 'day');
    }
    let arr = [];
    while (startTime <= endTime) {
      arr.push(new moment(startTime).format('hh A'))
      startTime.add(1, 'hours');
    }
    return arr;
  };
  React.useEffect(() => {
    setTimeSlots(createTimeSlots('10 AM', '06 PM'))
    dateHandler();
  }, [])

  const dateHandler = () => {
    const currentTime = new Date();
    // const laterTime = new Date(currentTime);
    // laterTime.setHours(currentTime.getHours() + 4);
    // setFourHoursLater(laterTime);
  console.log(currentTime);

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
                    <button key={date} onClick={dateHandler}>
                      {date.format('DD')}
                    </button>
                  )
                })
              }
            </div>
          </div>
          <div>
            <h3>Available Slots</h3>
            <div className="dateformat">
              <span>10-11AM</span>
              <span>11-12PM</span>
              <span>12-1PM</span>
              <span>1-2PM</span>
              <span>2-3PM</span>
              <span>3-4PM</span>
              <span>4-5PM</span>
            </div>
          </div>
        </div>



      </div><hr />
    </>
  );
};

export default Items;