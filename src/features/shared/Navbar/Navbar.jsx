import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  const navigate = useNavigate()
  return (
    // <!-- Navbar -->
    <nav className="navbar navbar-dark bg-dark  navbar-expand-lg ">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          {" "}
          <img src="https://pixner.net/boleto/demo/assets/images/logo/logo.png"></img>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                {" "}
                Home
              </Link>
            </li>
          </ul>
          <button className="btn btn-primary" type="submit" onClick={()=>navigate("signup")}>
            Join Us
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
