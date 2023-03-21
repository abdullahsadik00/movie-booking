import React from 'react'
import "./Navbar.css"
const Navbar = () => {
  return (
    // <!-- Navbar -->
    <nav class="navbar navbar-dark bg-dark  navbar-expand-lg ">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
      <img src="https://pixner.net/boleto/demo/assets/images/logo/logo.png"></img>
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contact</a>
          </li>

        </ul>
        <button class="btn btn-primary" type="submit">Join Us</button>
      </div>
    </div>
  </nav>
    )
}

export default Navbar