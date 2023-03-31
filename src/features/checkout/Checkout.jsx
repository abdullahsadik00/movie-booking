import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { bookingSelector, movieSelector, priceSelector, seatPriceSelector, theaterSelector, timeSelector } from "../../store/reducer/BookingReducer";
import Newsletter from "../booking/newsletter/Newsletter";
import Footer from "../shared/Footer/Footer";
import Navbar from "../shared/Navbar/Navbar";

// import {timeSelec}
import styles from "./Checkout.module.css";
const Checkout = () => {
  const movieSelect=useSelector(movieSelector);
  const theater=useSelector(theaterSelector);
  const time = useSelector(timeSelector)
  const seatPrice = useSelector(seatPriceSelector);
  const seats = useSelector(bookingSelector)
  const price = useSelector(priceSelector)
  const [finalPrice,setFinalPrice] = useState(0)
  useEffect(()=>{
    setFinalPrice(price + (price * .18))
  },[])
  return (
    <div>
      <Navbar />
      <div className={styles.banner}>
        <h1>{movieSelect}</h1>
        <p>{theater}</p>
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
                <span>Debit Card</span>
              </div>{" "}
            </div>
            <h3>Enter Your Card Details</h3>
            <div className={styles.formWrapper}>
              <label htmlFor="cardDetails">Card Details </label>
              <input type="text" />
            </div>
            <div className={styles.formWrapper}>
              <label htmlFor="cardDetails">Name on the Card </label>
              <input type="text" />
            </div>
            <div className={styles.expiry}>
              <div className={styles.formWrapper}>
                {" "}
                <label htmlFor="cardDetails">Expiration </label>
                <input type="text" placeholder="MM/YY" />
              </div>
              <div className={styles.formWrapper}>
                {" "}
                <label htmlFor="cardDetails">CVV </label>
                <input type="text" placeholder="CVV" />
              </div>
            </div>
            <button className={styles.btnSignin}>MAKE PAYMENT</button>
            <p>
              By Clicking "Make Payment" you agree to the{" "}
              <span>Terms and conditions </span>
            </p>
          </div>
        </div>
        <div className={styles.checkoutSummary_Right}>
          <h2>Booking Summary</h2>
          <hr />
          <h6>{movieSelect}</h6>
          <span>ENGLISH-2D</span>
          <div className={styles.wrapper}>
            <h6>{theater}</h6>
            <h6>{seats.length}</h6>
          </div>
          <div className={styles.wrapper}>
            <span> {time}</span>
            <span>Tickets</span>
          </div>
          <div className={styles.wrapper}>
            <h6>TICKETS PRICE</h6>
            <h6>{seatPrice}</h6>
          </div>
          <hr />
          <div className={styles.wrapper}>
            <span>Tax</span>
            <span>18%</span>
          </div>
          <div className={styles.payable}>
            <div>
              <h5>AMOUNT PAYABLE</h5>
              <h5>{finalPrice}</h5>
            </div>
            <div style={{display:"flex",justifyContent:"center",margin:"10px 0"}}>
              <button className={styles.backBtn}> Proceed</button>
            </div>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Checkout;
