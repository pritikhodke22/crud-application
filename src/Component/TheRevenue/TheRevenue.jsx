import React from "react";
import "../TheRevenue/Therevenue.css";

function TheRevenue() {
  return (
    <div className="container cont_margin">
      <div className="row">
        <div className="col-3">
          <div className="revenue">
            <p className="total_revenue">total revenue</p>
            <p className="price">$ 1,200.00</p>
          </div>
        </div>
        <div className="col-3">
          <div className="total_number">
            <p className="number">Number 1</p>
            <p className="hash_price"># 100</p>
            <div className="row">
              <div className="col-6">
                <p className="est_revenue">EST.REVENUE</p>
              </div>
              <div className="col-6">
                <p className="est_revenue">$1,200.00</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="total_number">
            <p className="number">Number 1</p>
            <p className="hash_price"># 100</p>
            <div className="row">
              <div className="col-6">
                <p className="est_revenue">EST.REVENUE</p>
              </div>
              <div className="col-6">
                <p className="est_revenue">$1,200.00</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="total_number">
            <p className="number">Number 1</p>
            <p className="hash_price"># 100</p>
            <div className="row">
              <div className="col-6">
                <p className="est_revenue">EST.REVENUE</p>
              </div>
              <div className="col-6">
                <p className="est_revenue">$1,200.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TheRevenue;
