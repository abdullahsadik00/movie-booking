import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import styles from "./Checkout.module.css";
const Checkout = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.banner}>
        <h1>Venus</h1>
        <p>City Walk</p>
      </div>
      <div className={styles.header}>
        <p className={styles.headerLeft}>
          <Link className={styles.backBtn}>{"<< Back"}</Link>
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
        <p className={styles.headerRight}>
          <h3>05:00</h3>
          <p>Mins Left</p>
        </p>
      </div>
      <div className={styles.checkoutSummary}>
        <div className={styles.checkoutSummary_Left}>
          <div className={styles.info}>
            <div>
              <h2>Already a Boleto Member?</h2>
              <p>Sign in to earn points and make booking easier!</p>
            </div>
            <div>
              <button className={styles.btnSignin}>Sign in </button>
            </div>
          </div>
          <div className={styles.contact}>
            <h2>Share your Contact Details</h2>
            <hr />
            <div className={styles.form}>
              <div>
                <input type="text" placeholder="Full Name" />
                <input type="email" placeholder="Enter Your Mail" />
              </div>
              <div>
                <input type="number" placeholder="Enter Your Phone Number" />
                <div>
                  <button className={styles.btnSignin}>CONTINUE</button>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.promo}>
            <h2>Promo Code</h2>
            <hr />
            <div>
              <input type="text" placeholder="Please Enter Promo Code" />
              <button className={styles.btnSignin}>Verify</button>
            </div>
          </div>
          <div className={styles.payment}>
            <h2>Payment Option</h2>
            <div className={styles.icons}>
              <div>
                <div>
                  <img
                    src="https://pixner.net/boleto/demo/assets/images/payment/card.png"
                    alt=""
                  />
                </div>
                <span>Credit Card</span>
              </div>{" "}
              <div>
                <div>
                  <img
                    src="https://pixner.net/boleto/demo/assets/images/payment/card.png"
                    alt=""
                  />
                </div>
                <span>Credit Card</span>
              </div>{" "}
              <div>
                <div>
                  <img
                    src="https://pixner.net/boleto/demo/assets/images/payment/card.png"
                    alt=""
                  />
                </div>
                <span>Credit Card</span>
              </div>{" "}
            </div>
          </div>
        </div>
        <div className={styles.checkoutSummary_Right}> </div>
      </div>
    </div>
  );
};

export default Checkout;
