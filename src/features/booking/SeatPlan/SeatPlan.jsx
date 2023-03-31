import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { movieSelector } from "../../../store/reducer/BookingReducer";
import Navbar from "../../shared/Navbar/Navbar";
import BookingSummary from "../BookingSumary/BookingSummary";
import SeatLayout from "../SeatLayout/SeatLayout";
import styles from "./SeatPlan.module.css";
const SeatPlan = () => {
  const [length4, setLength4] = useState([1, 1, 1, 1]);
  const [length2, setLength2] = useState([1, 1]);
  const [length3, setLength3] = useState([1, 1, 1]);
  const [length6, setLength6] = useState([1, 1, 1, 1, 1, 1]);
  const [silverPlus, setSilverPlus] = useState(["G", "F"]);
  const [goldPlus, setGoldPlus] = useState(["A", "B", "C", "D", "E"]);
  const availableSeats = [
    "F6",
    "F7",
    "F10",
    "F3",
    "F2",
    "G1",
    "G2",
    "G6",
    "G9",
    "G10",
  ];
  const selector = useSelector(movieSelector);
  console.log(selector)
  return (
    <div className={styles.container}>
    <Navbar />
    <div className={styles.banner}>
        <h1>{selector}</h1>
        <p>City Walk</p>
    </div>
    <div className={styles.header}>
        <p className={styles.headerLeft}>
           <Link className={styles.backBtn}>
               {'<< Back'}
            </Link>
        </p>
        <p className={styles.headerCenter}>
            <span className={styles.date}>MON, SEP 09 2020</span>
            &nbsp;&nbsp;
            <select className={styles.selectbar}>
                <option value="sc1">09:40</option>
                <option value="sc2">13:45</option>
                <option value="sc3">15:45</option>
                <option value="sc4">19:50</option>
            </select>
        </p>
        <span className={styles.headerRight}>
            <h3>05:00</h3>
            <p>Mins Left</p>
        </span>
    </div>
    <section className={styles.seatPlan}>
        <span className={styles.screenHeader}>
            <hr className={styles.topLine} />
            <h2>SCREEN</h2>
            <hr />
        </span>
        <img width="50%" src="http://pixner.net/boleto/demo/assets/images/movie/screen-thumb.png"
        ></img>
         <span className={styles.silverPlus}>
            <hr className={styles.topLine} />
            <h4>SLIVER PLUS</h4>
            <hr />
        </span>
        
        <SeatLayout />

        <BookingSummary />
    </section>
</div>
  );
};

export default SeatPlan;
