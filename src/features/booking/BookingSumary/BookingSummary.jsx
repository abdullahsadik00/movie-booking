import React from "react";
import styles from "./BookingSummary.module.css";
const BookingSummary = () => {
  return (
    <div className={styles.bookingSummary}>
      <div>
        <p className={styles.itemHeader}>You Have Choosed Seat</p>{" "}
        <h3 className={styles.itemContent}>D9, D10</h3>
      </div>
      <div>
        <p className={styles.itemHeader}>Total Price</p>{" "}
        <h3 className={styles.itemContent}>₹150</h3>
      </div>
      <div>
        <a href="#" className={styles.btnProceed}>
          Proceed
        </a>
      </div>
    </div>
  );
};

export default BookingSummary;
