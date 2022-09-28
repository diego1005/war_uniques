import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import UsersTable from "./UsersTable/UsersTable";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-title">
        <h2>DASHBOARD</h2>
        <hr />
      </div>

      {/* <!-- Nav Item - users--> */}
      <li className="nav-item">
        <i className="fa-solid fa-user-secret"></i>
        <UsersTable/>
      </li>
      {/* <!-- Nav Item - products--> */}
      <li className="nav-item">
        <i className="fa-solid fa-gun"></i>
      </li>
    </div>
  );
}

export default Sidebar;
