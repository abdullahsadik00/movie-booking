import React from "react";
import styles from "./Footer.module.css";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerWrapper}>
        <div className={styles.footerWrapperTop}>
          <div className={styles.image}>
            <img
              src="https://pixner.net/boleto/demo/assets/images/footer/footer-logo.png"
              alt=""
            />
          </div>
          <div className={styles.socialIcons}>
            <a href="#">
              {" "}
              <FaFacebookF />
            </a>
            <a href="#">
              {" "}
              <BsTwitter />
            </a>
            <a href="#">
              <BsInstagram />
            </a>
            <a href="#"></a>
          </div>
        </div>
        <hr />
        <div className={styles.footerWrapperBottom}>
          <p>Copyright © 2020.All Rights Reserved By <span>Boleto</span></p>
          <div className={styles.link}>
            <a href="">About</a>
            <a href="">Terms of Use</a>
            <a href="">Privacy Policy</a>
            <a href="">Faq</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
