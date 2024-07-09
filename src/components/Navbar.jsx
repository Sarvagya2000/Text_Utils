import React from "react";
//import PropTypes from "prop-types";
//import { Link, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


export default function Navbar(props) {
  
  // const navigate = useNavigate()
  // const onClickAbout =()=>{
  //   navigate('/About')
  // }

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" href="/">
          {props.title}
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
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            {/* <li className="nav-item" onClick={onClickAbout}>
              <a className="nav-link" >
                About
              </a>
            </li> */}
            <li className="nav-item">
              <Link className="nav-link"  to="/about">
                {props.aboutText}
              </Link >
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                href="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </Link>
              <ul class="dropdown-menu">
                <li>
                  <Link className="dropdown-item" href="/">
                    Action
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/">
                    Another action
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <div className="d-flex">
            <div className="bg-primary rounded mx-2" onClick={()=>{props.toggleMode('primary')}} style={{height:'30px',width:'30px',cursor:'pointer'}}></div> 
            <div className="bg-danger rounded mx-2" onClick={()=>{props.toggleMode('danger')}} style={{height:'30px',width:'30px',cursor:'pointer'}}></div> 
            <div className="bg-success rounded mx-2" onClick={()=>{props.toggleMode('success')}} style={{height:'30px',width:'30px',cursor:'pointer'}}></div> 
            <div className="bg-warning rounded mx-2" onClick={()=>{props.toggleMode('warning')}} style={{height:'30px',width:'30px',cursor:'pointer'}}></div> 
            <div className="bg-dark rounded mx-2" onClick={()=>{props.toggleMode('dark')}} style={{height:'30px',width:'30px',cursor:'pointer'}}></div> 
            <div className="bg-light rounded mx-2" onClick={()=>{props.toggleMode('light')}} style={{height:'30px',width:'30px',cursor:'pointer'}}></div> 
          </div>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
          {/* <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'} mx-2`}>
            <input
              className="form-check-input" onClick={()=>{props.toggleMode(null)}}
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
              Toggle Mode
            </label>
          </div> */}
        </div>
      </div>
    </nav>
  );
}
