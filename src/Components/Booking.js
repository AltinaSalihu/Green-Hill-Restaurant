import React, { useEffect, useState } from 'react';


const Booking = (props) => {

  const API = "http://localhost:3000";

  const [bookedby, setBookedby] = useState("")
  const [updatedBookings, setUpdatedBookings] = useState(false)
  
  const [time, setTime] = useState("")
  const [updateForm, setUpdateFrom] = useState(false)
  const [detailsPhone, setDetails] = useState("")
  const [detailsSeats, setSeats] = useState("")
  const [dates, setData] = useState([])


  const data = {
    bookedby: bookedby,
    time: time,
    details:{
      phone:detailsPhone,
      seats: detailsSeats
    } 
  };
  
  useEffect(() => {
    fetch(`${API}/bookings`)
    .then(response => response.json())
    .then(data => {
        console.log(updatedBookings);

        setUpdateFrom(false)
        setData(data)
    })
    .catch(error => {
        console.log(error);
    });
},[updatedBookings])

  const update = (e) =>{
    
    e.preventDefault();
    
    console.log(props.bookingId);
    
    fetch(`${API}/bookings/${props.bookingId}`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(response => response.json())
      .then(data => {
          if(typeof props.updatedBooking == "function") {
            props.updatedBooking(true)
          }
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <> 
    <div className='form-wrapper-update'>
    
    <form   className="form-update"  >
    <input type="text" placeholder="Booked by" value={bookedby} onChange={(e)=> setBookedby(e.target.value)}/>
    <input type="text" placeholder="Time" value={time} onChange={(e)=> setTime(e.target.value)}/>
    <input type="text" placeholder="Phone" value={detailsPhone} onChange={(e)=> setDetails(e.target.value)}/>
    <input type="text" placeholder="Seats" value={detailsSeats} onChange={(e)=> setSeats(e.target.value)}/>
    <button type="button" name="button" value="submit"  onClick={update}> Submit</button>
    </form>
    </div>
  </>
  )
}

export default Booking