import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../Header/Navbar";
import Revenue from "../Revenue/Revenue";

function ViewUser() {
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
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3002/users/${id}`);
    setUser(result.data);
  };
  return (
    <div>
      <div className="row">
        <div className="col-1">
          <Navbar />
        </div>
        <div className="col-11">
          <Revenue />

          <div className="container">
            <table class="table table-hover">
              <thead>
                <tr>
                  <td className="main_data">Profile</td>
                  <td className="main_data">first name</td>
                  <td className="main_data">last name</td>
                  <td className="main_data">mobile</td>
                  <td className="main_data">email address</td>
                  <td className="main_data">address </td>
                  <td className="main_data">credit card</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="data_name">
                    <img
                      key={user.image}
                      src={user.image}
                      alt=""
                      className="img_resize"
                    />
                  </td>
                  <td className="data_name">{firstname}</td>
                  <td className="data_name">{lastname}</td>
                  <td className="data_name">{mobileno}</td>
                  <td className="data_name">{email}</td>
                  <td className="data_name">{address}</td>
                  <td className="data_name">{creditcardno}</td>
                  <td className="data_name">{notes}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewUser;
