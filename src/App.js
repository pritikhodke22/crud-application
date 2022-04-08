import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./Style/Style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Customers from "./Component/Customers";
import AddUser from "./Component/Users/AddUser";
import EditUser from "./Component/Users/Edituser";
import ViewUser from "./Component/Users/ViewUser";
import SidebarSearch from "./Component/SidebarSearch/SidebarSearch";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      {/* <Customers /> */}
      <BrowserRouter>
        <Route exact path="/" component={Customers} />
        <Route exact path="/users/add" component={AddUser} />
        <Route exact path="/users/edit/:id" component={EditUser} />
        <Route exact path="/users/view/:id" component={ViewUser} />
        <Route exact path="user/edit/:id" component={SidebarSearch} />
      </BrowserRouter>
    </div>
  );
}

export default App;
