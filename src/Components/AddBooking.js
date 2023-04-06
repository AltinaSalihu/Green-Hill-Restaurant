import React, { useEffect, useState } from 'react';
import Navbar from "./Navbar";
import { Link } from 'react-router-dom';

function BookingManager() {

  const API = "http://localhost:3000";

  const [bookedby, setBookedby] = useState("")
  const [time, setTime] = useState("")
  const [detailsPhone, setDetails] = useState("")
  const [detailsSeats, setSeats] = useState("")
  const [data, setData] = useState([])
  const [dergo, setDergo] = useState(false);

  const randomId = Math.floor(Math.random() * 10000).toFixed(0)

  const postForm = async (event) => {
    event.preventDefault();

    const data = {
      id: parseInt(randomId).toString(),
      bookedby: bookedby,
      time: time,
      details: { phone: detailsPhone, seats: detailsSeats }
    }

    await fetch(`${API}/bookings`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        alert("Your reservation is sent!");
      })
      .catch(error => {
        console.log(error);
      });

  }

  return (
    <>
    <Navbar />
    <div className='form-wrapper'>
      <form  className="form" >
        <input type="text" placeholder="Booked by" value={bookedby} onChange={(e) => setBookedby(e.target.value)} />
        <input type="text" placeholder="Time" value={time} onChange={(e) => setTime(e.target.value)} />
        <input type="text" placeholder="Phone" value={detailsPhone} onChange={(e) => setDetails(e.target.value)} />
        <input type="text" placeholder="Seats" value={detailsSeats} onChange={(e) => setSeats(e.target.value)} />
        <button type="button" name="button" value="Reserve" onClick={postForm}>Reserve</button>
      </form>
      </div>
    </>
  )
}

export default BookingManager