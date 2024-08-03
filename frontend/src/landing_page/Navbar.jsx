import React from 'react';
import { NavLink } from 'react-router-dom';

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
              <NavLink to="/" className="nav-link custom-nav-link" activeClassName="active" aria-current="page">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/signup" className="nav-link custom-nav-link">Signup</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link custom-nav-link">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/products" className="nav-link custom-nav-link">Products</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/pricing" className="nav-link custom-nav-link">Pricing</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/support" className="nav-link custom-nav-link">Support</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
