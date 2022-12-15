import React from "react";
import "./flightitem.css";
import { Divider, Button } from "antd";

function FlightItem() {
  return (
    <div className="flightitem">
      <div className="d-flex flex-column align-items-center">
        <div className="d-flex flex-column align-items-start fitem rounded-4">
          <div className="d-flex flex-column w-100 px-3 py-2">
            <div>Petik Airlines</div>
            <div className="d-flex flex-md-row flex-wrap w-100 justify-content-between align-items-center tiket px-3">
              <div className="d-flex flex-row align-items-start content1">
                <h2 className="fw-md-bold time">7.30 AM</h2>
                <h2 className="tgray">JKT</h2>
              </div>
              <div className="d-flex flex-column align-items-start content2">
                <h5 className="tgray">Duration</h5>
                <h5>12 hr 15 min</h5>
              </div>
              <div className="d-flex flex-row align-items-start content3">
                <h2 className="fw-md-bold time">7.45 PM</h2>
                <h2 className="tgray">SUB</h2>
              </div>
              <div className="d-flex flex-column align-items-start content4">
                <h5 className="tgray">Starting from</h5>
                <h5>USD 209.30</h5>
              </div>
            </div>
            <Divider />
            <div className="d-flex flex-row w-100 justify-content-between align-items-center">
              <div className="d-flex flex-row align-items-start">
                <h4 className="fw-bold tblue">1 stop</h4>
              </div>
              <div className="d-flex flex-row align-items-start">
                <Button type="primary">Choose</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlightItem;
