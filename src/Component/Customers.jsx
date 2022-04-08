import React from "react";
import Navbar from "./Header/Navbar";
import Revenue from "./Revenue/Revenue";
import "../Style/Style.css";
import Data from "./Data/Data";

function Customers() {
  return (
    <div>
      <div className="row">
        <div className="col-1">
          <Navbar />
        </div>
        <div className="col-11">
          <Revenue />
          <Data />
        </div>
      </div>
      <Navbar />
    </div>
  );
}

export default Customers;
