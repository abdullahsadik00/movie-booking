import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { movieSelector, sel, theater, time } from "../../../store/reducer/BookingReducer";
import Navbar from "../../shared/Navbar/Navbar";
import "./TicketPlan.css"
const TicketPlan = () => {
  
  const [cinemas, setCinemas] = useState([]);

  const {id} = useParams();
  const dispatch = useDispatch()
  

  useEffect(()=>{
      fetch("http://localhost:4000/api/movie/cinema/"+id)
          .then(res=> res.json())
              .then(parsedRes=> {

                setCinemas(parsedRes)
              });
  },[]);
  
  const handleDate=(name,arr)=>{
    let t = `${arr[0].date} ${arr[0].time}` 
    dispatch(theater(name))
    dispatch(time(t))
  }
  const sect = useSelector(sel);
console.log(sect)

  return (
      <div className="plan">
        <Navbar />
        <div className="container">
          <div className="panel">
            {cinemas.map((cinema,i) => (
              <div className="timings" key={i}>
                <div className="left">
                  <div className="name">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-heart"
                      viewBox="0 0 16 16"
                    >
                      <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                    </svg>
                    {cinema.name}
                  </div>
                </div>
                <div className="right">
                  <div className="timebox">
                    {cinema.timings.map((times) => (
                      <Link className="link" to={`/movie/seatPlan/${cinema._id}`}>
                        
                      <span className="time" onClick={()=>handleDate(cinema.name,cinema.timings)
                      }>{times.time}</span></Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
            
          </div>
          <div className="advertise">
              <img
                src="http://pixner.net/boleto/demo/assets/images/sidebar/banner/banner03.jpg"
                alt=""
              />
            </div>
        </div>
      </div>
  );
};

export default TicketPlan;
