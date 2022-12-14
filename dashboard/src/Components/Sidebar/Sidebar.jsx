import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
// import UsersTable from "./UsersTable/UsersTable";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-title">
        <div className="title-box">
          <h2 className="title-icon">
            <i className="fa-regular fa-square-caret-up"></i>
            <i className="fa-regular fa-square-caret-up"></i>
            <p><i className="fa-regular fa-square-caret-down"></i></p>
          </h2>
          <h2>MATERIAL DASHBOARD</h2>
        </div>
        <hr />
      </div>

      {/* <Routes>
        <Route path="/products" element={<Home content="products"/>} />
        <Route path="/users" element={<Home content="users" />} />
      </Routes > */}

      <ul className="sidebar-list">
        <li>
          <Link to="/products">
            <i class="fa-solid fa-warehouse"></i>
            <spam className="sidebar-opt"> PRODUCTS</spam>
          </Link>
        </li>
        <li>
          <Link to="/users">
            <i className="fa-solid fa-users"></i>
            <spam className="sidebar-opt"> USERS</spam>
          </Link>
        </li>
      </ul>

    </div >
  );
}

export default Sidebar;
