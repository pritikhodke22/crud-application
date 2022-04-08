import React from "react";
import "../Header/Navbar.css";
import { BiUserCircle } from "react-icons/bi";
import User from "../../Images/user.png";
import Timeline from "../../Images/timeline.png";
import Purchase from "../../Images/purchase.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <header>
        <nav
          id="sidebarMenu"
          class="collapse d-lg-block sidebar collapse back_color"
        >
          <div class="position-sticky">
            <div class="list-group list-group-flush mx-3 mt-4">
              <Link
                href="#"
                class="list-group-item list-group-item-action py-2 ripple"
                aria-current="true"
              >
                <img src={User} alt="" />
              </Link>
              <Link
                href="#"
                class="list-group-item list-group-item-action py-2 ripple"
              >
                <img src={User} alt="" />
              </Link>
              <Link
                href="#"
                class="list-group-item list-group-item-action py-2 ripple"
              >
                <img src={User} alt="" />
              </Link>
              <Link
                href="#"
                class="list-group-item list-group-item-action py-2 ripple"
              >
                <img src={Timeline} alt="" />
              </Link>
              <Link
                href="#"
                class="list-group-item list-group-item-action py-2 ripple"
              >
                <img src={Purchase} alt="" />
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
