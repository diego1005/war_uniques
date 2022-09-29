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
      <div className="nav-item">
        <UsersTable/>
      </div>
      {/* <!-- Nav Item - products--> */}
      <li className="nav-item">
        <i className="fa-solid fa-gun"></i>
      </li>
       {/* <!-- Nav Item - Tables --> */}
       <li className="nav-item">
       <i className="fas fa-fw fa-table"></i>
                 
            </li>
    </div>
  );
}

export default Sidebar;
