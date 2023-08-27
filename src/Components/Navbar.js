import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../App.css';

export default function Navbar(props) {
  return (

    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>

      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    <li className="nav-item-custom">
        <NavLink
            className="nav-link-custom"
            activeClassName="active"
            exact
            to="/"
        >
            Home
        </NavLink>
    </li>
    <li className="nav-item-custom">
        <NavLink
            className="nav-link-custom"
            activeClassName="active"
            to="/qrcode"
        >
            Qr Code
        </NavLink>
    </li>
    <li className="nav-item-custom">
        <NavLink
            className="nav-link-custom"
            activeClassName="active"
            to="/morsecode"
        >
            Morse Code
        </NavLink>
    </li>
    <li className="nav-item-custom">
        <NavLink
            className="nav-link-custom"
            activeClassName="active"
            to="/about"
        >
            About
        </NavLink>
    </li>
</ul>

          <div className={`form-check form-switch text-${props.mode === 'dark' ? 'white' : 'dark'} mx-3`}>
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{ color: 'black? white :black ' }}>
              {props.mode}
            </label>
          </div>


          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
}

// Navbar.defaultProps = {
//   title: 'Title here',
//   about: 'About'
// }
