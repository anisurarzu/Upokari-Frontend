import React, { useState } from "react";
import "./navbar.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

import { NavLink } from "react-router-dom";
import logo from "../images/logoshirley_300x.png";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const history = useHistory();

  const isAuthenticated = !!localStorage.getItem("token");
  const handleLogout = () => {
    // Clear authentication token from local storage
    localStorage.removeItem("token");

    // Redirect to the login page
    history.push("/login");
  };
  return (
    <>
      <nav className="main-nav border-b">
        {/* 1st logo part  */}
        <div className="logo cursor-pointer ">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
              <NavLink to="/about">বইয়ের ধরণ</NavLink>
            </li>
            <li>
              <NavLink to="/service">সকল লেখক</NavLink>
            </li>
            <li>
              <NavLink to="/contact">যোগাযোগ</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/registration">প্রবেশ করুন</NavLink>
            </li>
            <li>
              <NavLink to="/login">Log In</NavLink>
            </li>
            {isAuthenticated && <li onClick={handleLogout}>Log Out</li>}
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a
                href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
                target="_thapa">
                <FaFacebookSquare className="facebook" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/thapatechnical/"
                target="_thapa">
                <FaInstagramSquare className="instagram" />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
                target="_thapa">
                <FaYoutubeSquare className="youtube" />
              </a>
            </li>
          </ul>

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>

      {/* hero section  */}
      {/* <section className="hero-section">
        <p>Welcome to </p>
        <h1>Thapa Technical</h1>
      </section> */}
    </>
  );
};

export default Navbar;
