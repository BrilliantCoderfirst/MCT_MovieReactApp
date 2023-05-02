import React from "react";
import { Link } from "react-router-dom";
import User from "../assest/img/user.jpeg";
import Logo from "../assest/img/logo.png";

const Navbar = ({ onKeyUp }) => {
  return (
    <>
      <div className="homeContainer">
        <div className="nav">
          <div className="logo">
            <Link to="/home">
              <img src={Logo} alt="" />
            </Link>
          </div>
          <div className="searchBar">
            <input
              type="text"
              placeholder="Search any Movies and tv shows..."
              onKeyUp={onKeyUp}
            />
          </div>
          <div className="tabs">
            <ul>
              <li>
                <Link to="/home"> Home </Link>
              </li>
            </ul>
            <img src={User} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
