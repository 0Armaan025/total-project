import React from 'react'
import './navbar.css';
import { getByPlaceholderText } from '@testing-library/react';

const NavBar = () => {
  return (
    <>
      <div className="nav">
      <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
    <a className="navbar-brand" href="#" style={{fontWeight: "bold",fontSize: "24px",color: "white"}}>Total-TheChessLegend</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link" aria-current="page" href="#">Home</a>
        <a className="nav-link" href="#">Features</a>
        <a className="nav-link" href="#">Videos</a>
        
      </div>
    </div>
  </div>
</nav>
      </div>
    </>
  )
}

export default NavBar
