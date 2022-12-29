import React from "react";
import Usertable from "../../../Components/Admin/UserTable/Usertable";
import Sidebar from "../../../Components/Admin/sidebar/Sidebar";
import "./allusers.scss";

function Allusers() {
  return (
    <div className="useradmin">
      <Sidebar />
      <div className="useradminContainer">
        <div className="listContainer">
          <div className="d-flex justify-content-between">
            <div className="listTitle">All Users</div>
          </div>
          <Usertable />
        </div>
      </div>
    </div>
  );
}

export default Allusers;
