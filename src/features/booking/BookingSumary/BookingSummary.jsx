import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { bookingSelector, priceSelector } from "../../../store/reducer/BookingReducer";
import styles from "./BookingSummary.module.css";
const BookingSummary = () => {
  const seat = useSelector(bookingSelector)
  const price = useSelector(priceSelector)
  return (
    <div className={styles.bookingSummary}>
      <div>
{
  seat.length > 0 ?         <p className={styles.itemHeader}>You Have Choosed Seat</p> :<p className={styles.itemHeader}>Please Choose the Seat</p>


}
        <h3 className={styles.itemContent}>{seat.toString()}</h3>
      </div>
      <div>
        <p className={styles.itemHeader}>Total Price</p>{" "}
        <h3 className={styles.itemContent}>₹{price}</h3>
      </div>
      <div>
        <Link to={"checkout"}  className={styles.btnProceed}>Proceed</Link>
        
      </div>
    </div>
  );
};

export default BookingSummary;
