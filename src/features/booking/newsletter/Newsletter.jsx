import React from "react";
import styles from "./Newsletter.module.css";
const Newsletter = () => {
  return (
    <div className={styles.Newsletter}>
      <div className={styles.NewsletterWrapper}>
        <h5>SUBSCRIBE TO BOLETO</h5>
        <h3>TO GET EXCLUSIVE BENIFITS</h3>
        <form className={styles.searchWrapper}>
          <input type="text" placeholder="Enter your email..." />
          <button type="submit">Get Started</button>
        </form>
        <p>We respect your privacy, so we never share your info</p>
      </div>
    </div>
  );
};

export default Newsletter;
