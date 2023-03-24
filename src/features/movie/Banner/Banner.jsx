import React from "react";
import styles from "./Banner.module.css";
const Banner = () => {
  return (
    <div className={styles.banner}>
      <h2 className={styles.header}>
        GET
        <span> MOVIE </span>
        TICKETS
      </h2>
      <p>Buy movie tickets in advance, find movie times watch trailers,</p>
      <p>read movie reviews and much more</p>
    </div>
  );
};

export default Banner;
