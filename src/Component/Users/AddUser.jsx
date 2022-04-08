import React, { useState } from "react";
import Navbar from "../Header/Navbar";
import Revenue from "../Revenue/Revenue";
// import Addvictor from "../../Images/edit_victor.png";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import Backarrow from "../../Images/back_arrow.svg";
import "../Users/Adduser.css";
import SidebarSearch from "../SidebarSearch/SidebarSearch";
import TheRevenue from "../TheRevenue/TheRevenue";

function AddUser() {
  let history = useHistory();
  const [user, setUser] = useState({
    image: "",
    firstname: "",
    lastname: "",
    mobileno: "",
    email: "",
    address: "",
    creditcardno: "",
    notes: "",
  });

  const {
    image,
    firstname,
    lastname,
    mobileno,
    email,
    address,
    creditcardno,
    notes,
  } = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3002/users", user);
    history.push("/");
  };

  return (
    <div>
      <div className="row">
        <div className="col-1">
          <Navbar />
        </div>
        <div className="col-11">
          <Revenue />
          <form onSubmit={(e) => onSubmit(e)}>
            <div>
              <TheRevenue />
              <div className="row">
                <div className="col-3">
                  <SidebarSearch />
                </div>
                <div className="col-9">
                  <div className="row">
                    <div className="col-4">
                      <input
                        type="file"
                        name="myImage"
                        // onChange={handleInputChange}
                        style={{ marginTop: "10px" }}
                      />
                    </div>
                    <div className="col-4">
                      <div className="mar_ginbot">
                        <label className="place_name">First Name</label>
                        <div>
                          <input
                            type="text"
                            name="firstname"
                            value={firstname}
                            onChange={(e) => onInputChange(e)}
                            required
                          />
                        </div>
                      </div>
                      <div className="mar_ginmobile">
                        <label className="place_name">Mobile Number</label>
                        <div>
                          <input
                            type="text"
                            name="mobileno"
                            value={mobileno}
                            onChange={(e) => onInputChange(e)}
                            onKeyPress={(event) => {
                              if (!/[0-9]/.test(event.key)) {
                                event.preventDefault();
                              }
                            }}
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="mar_ginbot">
                        <label className="place_name">Last Name</label>
                        <div>
                          <input
                            type="text"
                            name="lastname"
                            value={lastname}
                            onChange={(e) => onInputChange(e)}
                            required
                          />
                        </div>
                      </div>
                      <div className="mar_ginmobile">
                        <label className="place_name">Email address</label>
                        <div>
                          <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => onInputChange(e)}
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="mar_ginbot">
                        <label className="place_name">Address</label>
                        <div>
                          <textarea
                            name="address"
                            value={address}
                            cols="32"
                            rows="3"
                            onChange={(e) => onInputChange(e)}
                            required
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="mar_ginbot">
                        <label className="place_name">Credit Card</label>
                        <div>
                          <textarea
                            name="creditcardno"
                            value={creditcardno}
                            cols="32"
                            rows="3"
                            onChange={(e) => onInputChange(e)}
                            onKeyPress={(event) => {
                              if (!/[0-9]/.test(event.key)) {
                                event.preventDefault();
                              }
                            }}
                            required
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="mar_ginbot">
                        <label className="place_name">Notes</label>
                        <div>
                          <textarea
                            name="notes"
                            value={notes}
                            cols="32"
                            rows="3"
                            onChange={(e) => onInputChange(e)}
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="wid_fit">
                    <Link to="/" className="back_customer">
                      <img src={Backarrow} alt="" />
                      Back to customer list{" "}
                    </Link>
                    <button type="submit" className="create_order">
                      Create Order
                    </button>
                    <button type="submit" className="edit_profile">
                      Edit Profile
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddUser;
