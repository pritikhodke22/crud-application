import React, { useState, useEffect } from "react";
import "../Data/Data.css";
import Merrisa from "../../Images/Merrisa.png";
import Fredy from "../../Images/Fredy.png";
import Victor from "../../Images/Victor.png";
import Cria from "../../Images/Cria.png";
import Moris from "../../Images/Moris.png";
import Liana from "../../Images/Liana.png";
import Showdots from "../../Images/show_dots.svg";
import View from "../../Images/view.svg";
import Edit from "../../Images/edit.svg";
import Delete from "../../Images/delete.svg";
import axios from "axios";
import { Link } from "react-router-dom";
import TheRevenue from "../TheRevenue/TheRevenue";

function Data() {
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3002/users");
    setUser(result.data.reverse());
  };
  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:3002/users/${id}`);
    loadUsers();
  };
  return (
    <div>
      <TheRevenue />
      <div className="container">
        <table class="table table-hover">
          <thead>
            <tr>
              <td className="main_data">Profile</td>
              <td className="main_data">first name</td>
              <td className="main_data">last name</td>
              <td className="main_data">mobile</td>
              <td className="main_data">email address</td>
              <td className="main_data">credit card</td>
              <td className="main_data">total sales</td>
              <td className="main_data">last order</td>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <td className="data_name">
                  <img
                    key={user.image}
                    src={user.image}
                    alt=""
                    className="img_resize"
                  />
                </td>
                <td className="data_name">{user.firstname}</td>
                <td className="data_name">{user.lastname}</td>
                <td className="data_name">{user.mobileno}</td>
                <td className="data_name">{user.email}</td>
                <td className="data_name">{user.creditcardno}</td>
                <td className="data_name">{user.sales}</td>
                <td className="data_name">{user.lastorder}</td>
                <td>
                  <div class="btn-group dropleft">
                    <div
                      className="dropdown-toggle"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img src={Showdots} alt="" />
                    </div>
                    <div className="dropdown-menu">
                      <Link
                        className="dropdown-item"
                        to={`/users/view/${user.id}`}
                      >
                        <img src={View} alt="" />
                        <span className="drop_down_item">View</span>
                      </Link>
                      <Link
                        className="dropdown-item"
                        to={`/users/edit/${user.id}`}
                      >
                        <img src={Edit} alt="" />
                        <span className="drop_down_item">Edit</span>
                      </Link>
                      <Link
                        className="dropdown-item"
                        to="#"
                        onClick={() => deleteUser(user.id)}
                      >
                        <img src={Delete} alt="" />
                        <span className="drop_down_item">Delete</span>
                      </Link>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Data;
