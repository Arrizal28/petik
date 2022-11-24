import React from "react";
import "./home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlaneDeparture } from "@fortawesome/free-solid-svg-icons";
import { Input } from "antd";
import { DatePicker, Button } from "antd";
const { RangePicker } = DatePicker;

function Home() {
  return (
    <>
      <div className="header">
        <div className="headerContainer">
          <h1 className="headertitle"> Testing </h1>
          <p> coba coba </p>
        </div>
      </div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10 panel">
            <div className="row">
              <div className="col-lg panel1">
                <FontAwesomeIcon
                  icon={faPlaneDeparture}
                  className="panelicon"
                />
                Flights
              </div>
              <div className="row panel2">
                <div className="col-lg">
                  <Input placeholder="Dari" size="large" />
                </div>
                <div className="col-lg">
                  <Input placeholder="Ke" size="large" />
                </div>
                <div className="col-lg">
                  <RangePicker size="large" />
                </div>
              </div>
              <div className="row panel3">
                <div className="col-lg">
                  <Input placeholder="Penumpang" size="large" />
                </div>
                <div className="col-lg">
                  <Input placeholder="Class" size="large" />
                </div>
                <div className="col-lg">
                  <Button type="primary">Search</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
