import React, { useState } from "react";
import styles from "./SearchPanel.module.css";

import { Dropdown } from "primereact/dropdown";

const SearchPanel = () => {
  const [selectedCity, setSelectedCity] = useState(null);
  const cities = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ];
  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchHeader}>
        <div className={styles.searchTicketTitle}>
          <h6 className={styles.category}>Welcome to Boleto </h6>
          <h3 className={styles.title}>what are you looking for</h3>
        </div>
        <div className={styles.searchTicketMenu}>
          {/* <ul> */}
            <div className={styles.searchTicketMenuWrapper}>
              <div className="" style={{ width: "30px" }}>
                <img
                  style={{ width: "100%" }}
                  src="https://pixner.net/boleto/demo/assets/images/ticket/ticket-tab01.png"
                  alt=""
                />
              </div>
              <p style={{ margin: "0" }}>Movie</p>
            </div>
            {/* <li className={styles.searchTicketMenuWrapper}>
              <div className="" style={{ width: "30px" }}>
                <img
                  style={{ width: "100%" }}
                  src="https://pixner.net/boleto/demo/assets/images/ticket/ticket-tab01.png"
                  alt=""
                />
              </div>
              <p style={{ margin: "0" }}>Event</p>
            </li>
            <li className={styles.searchTicketMenuWrapper}>
              <div className="" style={{ width: "30px" }}>
                <img
                  style={{ width: "100%" }}
                  src="https://pixner.net/boleto/demo/assets/images/ticket/ticket-tab01.png"
                  alt=""
                />
              </div>
              <p style={{ margin: "0" }}>Sports</p>
            </li> */}
          {/* </ul> */}
        </div>
      </div>
      <div className="container justify-content-center h-3 p-3" >
        <div className="row" style={{padding:"5px 20px",background:"#2f2ff8e8"}}>
          <div className="col-xl-3 col-lg-12 col-md-6 col-sm-12 d-flex align-items-center" style={{background:"transparent"}}>
            <div className={styles.searchWarper} style={{display:"flex",width:"100%"}}>
              <input type="text" placeholder="Search for Movie" />
              <div style={{width:"24px",marginRight:"10px"}}><svg
                className={styles.searchIcon + " bi bi-search"}
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg></div>
            </div>{" "}
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 ">
            <div className={styles.searchOption}>
              <div style={{display:"flex",alignItems:"center"}}><img src="http://pixner.net/boleto/demo/assets/images/ticket/city.png"></img>
              <label>City</label>
              </div><Dropdown
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.value)}
                options={cities}
                optionLabel="name"
                placeholder="Select "
                className="w-full md:w-7rem"
              />
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 ">
          <div className={styles.searchOption}>
              <div style={{display:"flex",alignItems:"center"}}><img src="https://pixner.net/boleto/demo/assets/images/ticket/date.png"></img>
              <label>Date</label>
              </div><Dropdown
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.value)}
                options={cities}
                optionLabel="name"
                placeholder="Select "
                className="w-full md:w-7rem"
              />
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 ">
          <div className={styles.searchOption}>
          <div style={{display:"flex",alignItems:"center"}}>  <img src="https://pixner.net/boleto/demo/assets/images/ticket/cinema.png"></img>
              <label>Cinema</label>
            </div>  <Dropdown
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.value)}
                options={cities}
                optionLabel="name"
                placeholder="Select "
                className="w-full md:w-7rem"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPanel;
