import React, { useEffect, useState } from "react";
import Search from "../../Images/search.svg";
import { Link } from "react-router-dom";
import "../SidebarSearch/Sidebarsearch.css";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";

function SidebarSearch() {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    const response = await fetch("http://localhost:3002/users");
    console.log(response);
    setUsers(await response.json());
    // console.log(data);
  };

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div>
      <div>
        <Link className="nav-link" to="#" style={{ position: "relative" }}>
          <img src={Search} alt="" className="searchicon" />
          <input
            type="search"
            placeholder='Try "Merrisa Lewis"'
            className="searchname"
          />
        </Link>
        <div>
          <Link to={`/users/edit/${users.id}`} className="customer_decoration">
            {users.map((customer) => {
              return (
                <div>
                  <div className="row">
                    <div className="col-4 text-right">
                      <img src={customer.image} className="img_resize" alt="" />
                    </div>
                    <div className="col-8">
                      <p className="full_name">
                        {customer.firstname} {customer.lastname}
                      </p>
                      <p className="mobile_number">{customer.mobileno}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SidebarSearch;
