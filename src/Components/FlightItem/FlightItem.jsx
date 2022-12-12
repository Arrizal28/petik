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
            <div className="d-flex flex-row w-100 justify-content-between align-items-center">
              <div className="d-flex flex-row align-items-start">
                <h2 className="fw-bold time px-2">7.30 AM</h2>
                <h2 className="tgray">JKT</h2>
              </div>
              <div className="d-flex flex-column align-items-start">
                <h5 className="tgray">Duration</h5>
                <h5>12 hr. 15 min.</h5>
              </div>
              <div className="d-flex flex-row align-items-start">
                <h2 className="fw-bold time px-2">7.45 PM</h2>
                <h2 className="tgray">SUB</h2>
              </div>
              <div className="d-flex flex-column align-items-start">
                <h5 className="tgreen">Starting from</h5>
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
