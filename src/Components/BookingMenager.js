import React, { useEffect, useState } from 'react';
import Booking from "./Booking";
import Navbar from "./Navbar";

function BookingManager() {

 
    const API = "http://localhost:3000";

    const [loaded, setLoaded] = useState(false)
    const [dates, setData] = useState([])
    const [deleted, setDeleted] = useState(false)

    const [updatedBookings, setUpdatedBookings] = useState(false)

    const [updateForm, setUpdateFrom] = useState(false)

    const [IdofBooking, setIdOfBooking] = useState()

    useEffect(() => {
        fetch(`${API}/bookings`)
        .then(response => response.json())
        .then(dates => {
            console.log(dates);
            setData(dates)
        })
        .catch(error => {
            console.log(error);
        });
    },[])

    useEffect(() => {
        fetch(`${API}/bookings`)
        .then(response => response.json())
        .then(dates => {
            console.log(dates);
            setData(dates)
        })
        .catch(error => {
            console.log(error);
        });
    },[deleted])

    
    useEffect(() => {
        fetch(`${API}/bookings`)
        .then(response => response.json())
        .then(dates => {
            console.log(updatedBookings);

            setUpdateFrom(false)
            setData(dates)
            console.log("aktiv")
        })
        .catch(error => {
            console.log(error);
        });
    },[updatedBookings])

    const handleSold = (event, id) => {
        event.preventDefault();

        fetch(`${API}/bookings/${id}`, {
            method: "DELETE"
          })
            .then(response => {
                setData(dates)
                setDeleted(true)
            })
            .catch(error => {
              console.log(error);
            });
    }

    const updated = (parameter) => {
        if(parameter == true) {
            setUpdatedBookings(true)
            console.log("Parametri",parameter)
        }
    }

    const showFormUpdate = (e, id) => {
        e.preventDefault(e)

        setIdOfBooking(id)
        
        setUpdateFrom(true)
    }   

  return (
    <>
     <Navbar />
     <ul className="dates-list">
  <li className="title-row">
    <span>ID</span>
    <span>Ordered by</span>
    <span>Time</span>
    <span>Phone</span>
    <span>Seats</span>
    <span>Actions</span>
  </li>
  {dates.length ? (
    dates.map((el, index) => {
      return (
        <li  className="rows" key={index}>
          <span>{el.id}</span>
          <span>{el.bookedby}</span>
          <span>{el.time}</span>
          <span>{el.details.phone}</span>
          <span>{el.details.seats}</span>
          <div>
            <button type="button" className="delete-button" onClick={(event) => handleSold(event, el.id)}>
              Delete!
            </button>
            <button className="update-button" onClick={(e) => showFormUpdate(e, el.id)}>Update</button>
          </div>
        </li>
      );
    })
  ) : (
    <h1>Loading</h1>
  )}
</ul>



        {   updateForm ?

            <Booking bookingId={IdofBooking} updatedBooking={updated}/>
            : 
            null
        }   


     </>
  )
}

export default BookingManager