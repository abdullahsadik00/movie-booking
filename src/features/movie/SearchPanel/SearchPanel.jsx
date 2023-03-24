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
          <ul>
            <li className={styles.searchTicketMenuWrapper}>
              <div className="" style={{ width: "30px" }}>
                <img
                  style={{ width: "100%" }}
                  src="https://pixner.net/boleto/demo/assets/images/ticket/ticket-tab01.png"
                  alt=""
                />
              </div>
              <p style={{ margin: "0" }}>Movie</p>
            </li>
            <li className={styles.searchTicketMenuWrapper}>
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
            </li>
          </ul>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-xl-3 col-lg-12 col-md-6 col-sm-12 bg-warning">
            <div className={styles.searchWarper}>
              <input type="text" placeholder="Search for Movie" />
              <svg
                className={styles.searchIcon + " bi bi-search"}
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </div>{" "}
          </div>
          <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 bg-danger">
            <div className={styles.searchOption}>
              <img src="http://pixner.net/boleto/demo/assets/images/ticket/city.png"></img>
              <label>City</label>
              <Dropdown
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.value)}
                options={cities}
                optionLabel="name"
                placeholder="Select "
                className="w-full md:w-7rem"
              />
            </div>
          </div>
          <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 bg-primary">
            <div className={styles.searchOption}>
              <img
                src="http://pixner.net/boleto/demo/assets/images/ticket/date.png"
                alt=""
              />
              <label>Date</label>
              <Dropdown
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.value)}
                options={cities}
                optionLabel="name"
                placeholder="Select a City"
                className="w-full md:w-7rem"
              />
            </div>
          </div>
          <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 bg-info">
            <div className={styles.searchOption}>
              <img
                src="http://pixner.net/boleto/demo/assets/images/ticket/cinema.png"
                alt=""
              />
              <label>Cinema</label>
              <Dropdown
                className={{ "p-dropdown": styles.pdropdown }}
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.value)}
                options={cities}
                optionLabel="name"
                placeholder="Select a City"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPanel;
{
  /* <div className={styles.searchPanel}>
  <div className={styles.searchWarper}>
    <input type="text" placeholder="Search for Movie" />
    <svg
      className={styles.searchIcon + " bi bi-search"}
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      viewBox="0 0 16 16"
    >
      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
    </svg>
  </div>
  <div className={styles.searchOption}>
    <img src="http://pixner.net/boleto/demo/assets/images/ticket/city.png"></img>
    <label>City</label>
    <Dropdown
      value={selectedCity}
      onChange={(e) => setSelectedCity(e.value)}
      options={cities}
      optionLabel="name"
      placeholder="Select "
      className="w-full md:w-7rem"
    />
  </div>
  <div className={styles.searchOption}>
    <img
      src="http://pixner.net/boleto/demo/assets/images/ticket/date.png"
      alt=""
    />
    <label>Date</label>
    <Dropdown
      value={selectedCity}
      onChange={(e) => setSelectedCity(e.value)}
      options={cities}
      optionLabel="name"
      placeholder="Select a City"
      className="w-full md:w-7rem"
    />
  </div>
  <div className={styles.searchOption}>
    <img
      src="http://pixner.net/boleto/demo/assets/images/ticket/cinema.png"
      alt=""
    />
    <label>Cinema</label>
    <Dropdown
      className={{ "p-dropdown": styles.pdropdown }}
      value={selectedCity}
      onChange={(e) => setSelectedCity(e.value)}
      options={cities}
      optionLabel="name"
      placeholder="Select a City"
    />
  </div>
</div>;  */
}
