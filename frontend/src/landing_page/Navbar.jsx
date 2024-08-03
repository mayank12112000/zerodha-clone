import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        
        <a className="navbar-brand" href="#">
          <img className="logo" src="media/logo.svg" alt="Zerodha icon" />
        </a>
          <span className="navbar-toggler navbar-toggler-icon" data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"></span>
        <div className="collapse navbar-collapse justify-content-end mx-5" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to={"/"}>
              <a className="nav-link active" aria-current="page" href="#">Home</a>
              </NavLink>
            </li>
            <li className="nav-item">
              <Link to='/signup'>
              <a className="nav-link" href="#">Signup</a>
              </Link>
            </li>
            <li className="nav-item">
              <NavLink to={"/about"}>
              <a className="nav-link" href="#">About</a>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"/products"}>
              <a className="nav-link" href="#">Products</a>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"/pricing"}>
              <a className="nav-link" href="#">Pricing</a>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"/support"}>
              <a className="nav-link" href="#">Support</a>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
