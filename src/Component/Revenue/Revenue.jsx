import React from "react";
import "../Revenue/Revenue.css";
import Add from "../../Images/add-icon.png";
import Search from "../../Images/search.svg";
import { Link } from "react-router-dom";

function Revenue() {
  return (
    <div className="sha_dow sticky-top">
      <nav className="navbar navbar-expand-lg">
        <Link className="navbar-brand" to="/">
          <p className="customers_heading">Customers</p>
        </Link>
        <ul class="navbar-nav margin_left">
          <li className="nav-item">
            <Link className="nav-link" to="#" style={{ position: "relative" }}>
              <img src={Search} alt="" className="search_icon" />
              <input
                type="search"
                placeholder='Try "Merrisa Lewis"'
                className="search_name"
              />
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link add_customer" to="/users/add">
              <img src={Add} alt="" /> Add Customers
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Revenue;
