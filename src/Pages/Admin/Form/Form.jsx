import React from "react";
import Formcomp from "../../../Components/Admin/FormComp/Formcomp";
import Sidebar from "../../../Components/Admin/sidebar/Sidebar";
import "./form.scss";

function Form() {
  return (
    <>
      <div className="form">
        <Sidebar />
        <div className="formContainer">
          <div className="listContainer">
            <Formcomp />
          </div>
        </div>
      </div>
    </>
  );
}

export default Form;
