import React from "react";
import Sidebar from "../../../Components/Admin/sidebar/Sidebar";
import UserDetail from "../../../Components/Admin/Userdetail/Userdetail";
import "./detailuser.scss";

function Detailuser() {
  return (
    <>
      <div className="detailuser">
        <Sidebar />
        <div className="detailuserContainer">
          <div className="listContainer">
            <UserDetail />
          </div>
        </div>
      </div>
    </>
  );
}

export default Detailuser;
