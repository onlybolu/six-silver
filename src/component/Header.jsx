import React, { useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";
// import {auth,provider} from '../Firebase';
// import {signInWithPopup} from 'firebase/auth';
import Login from "../routers/Login";
const Header = () => {
  return (
    <div className="header">
      <div className="crochell d-none">
        <div className="moving d-none d-md-flex">
          <marquee loop="2">
            <p>
              Hello!!Welcome!! Jambo!! Habari ya Asubuhi! Habari gani! Selam!!
              Ameseginalehu. Dehina nenyi. Akkam. Sannu!
            </p>
          </marquee>
        </div>
        <div className="nav-station d-none d-md-flex">
          <div className="product">
            <Link id="pass" to="/">
              Product
            </Link>
          </div>
          <div className="product">
            <Link id="pass" to="/">
              FAQ
            </Link>
          </div>
          <div className="product">
            <Link id="pass" to="/">
              BLOG
            </Link>
          </div>
          <Link id="pass" to="/">
            product
          </Link>
          <Link id="pass" to="/">
            product
          </Link>
        </div>
      </div>
      <div className="notate d-none d-md-flex justify-content-between py-4">
        <div className="logo">
          <Link id="dav" to="/">
            <img src="logo.gif" alt="" />
          </Link>
        </div>
        <div className="search">
          <input type="search" placeholder="Search Product" name="" id="" />
          <button className="icon">
            <img src="search.png" alt="" />
          </button>
        </div>
        <div className="loveair d-flex justify-content-center align-items-center">
          <div className="num d-none d-md-flex">
            <p>730 602 626 Dzwoń Pon-Sob 10.00-20.00</p>
          </div>
          <div className="num-icon">
            <Link to="/login">
              <img id="login" title="signin/register" src="user.png" alt="" />
            </Link>
            {/* <img src="shuffle.png" alt="" /> */}
            <img title="cart" src="cart.png" alt="" />

            {/* <p><h2>$</h2><span>0.00</span></p> */}
          </div>
        </div>
      </div>
      <div className="notate d-flex d-md-none justify-content-between align-items-center py-4">
        <div className="menu d-flex justify-content-center align-items-center gap-2">
          <img src="menu.png" alt="" style={{ width: "25px" }} />
          <p className="" style={{ paddingTop:"13px" }}>MENU</p>
        </div>
        <div className="logo">
          <Link id="dav" to="/">
            <img
              className="img-fluid"
              src="logo.gif"
              alt=""
              style={{ width: "150px" }}
            />
          </Link>
        </div>
        <div className="loveair d-flex justify-content-center align-items-center">
          <div className="num d-none d-md-flex">
            <p>730 602 626 Dzwoń Pon-Sob 10.00-20.00</p>
          </div>
          <div className="num-icon">
            <Link className="d-none d-md-flex" to="/login">
              <img id="login" title="signin/register" src="user.png" alt="" />
            </Link>
            {/* <img src="shuffle.png" alt="" /> */}
            <img title="cart" src="cart.png" alt="" />

            {/* <p><h2>$</h2><span>0.00</span></p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
