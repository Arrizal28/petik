import React, { useState } from "react";
import "./panel.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlane, faPlaneArrival, faPlaneDeparture, faUsers } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { logout } from "../../Redux/Actions/authAction";
import { Input, Select } from "antd";
import { DatePicker, Button, Checkbox } from "antd";
const { RangePicker } = DatePicker;

function Panel() {
  const [openOptions, setOpenOptions] = useState(false);
  const [oneWay, setOneWay] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    infant: 0,
  });

  const dispatch = useDispatch();

  const handleLogout = (e) => {
    e.preventDefault();

    dispatch(logout());
  };

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  return (
    <div className="container d-flex">
      <div className="row justify-content-center">
        <div className="col-lg-10 panel col-sm-12">
          <div className="row">
            <div className="col-lg-12 panel1 col-sm-12">
              <FontAwesomeIcon icon={faPlane} className="panelicon" />
              Tiket Pesawat
            </div>
            <div className="row panelc">
              <div className="col-lg-12 col-sm-12">
                <Checkbox onClick={() => setOneWay(!oneWay)}>One Way</Checkbox>
              </div>
            </div>
            <div className="row panel2 justify-content-center">
              <div className="col-lg-4 col-sm-12">
                <Input placeholder="Dari" size="large" className="lebarm" suffix={<FontAwesomeIcon icon={faPlaneDeparture} className="faicon" />} />
              </div>
              <div className="col-lg-4 col-sm-12">
                <Input placeholder="Ke" size="large" className="lebarm" suffix={<FontAwesomeIcon icon={faPlaneArrival} className="faicon" />} />
              </div>
              <div className="col-lg-4 col-sm-12">
                {oneWay ? <DatePicker className="lebarm" size="large" /> : <RangePicker size="large" className="lebarm" />}
                {/* <RangePicker size="large" className="lebarm" /> */}
              </div>
            </div>
            <div className="row panel3 justify-content-center">
              <div className="col-lg col-12">
                <Input
                  placeholder={`${options.adult} adult · ${options.children} children · ${options.infant} Infant`}
                  size="large"
                  suffix={<FontAwesomeIcon icon={faUsers} className="faicon" />}
                  onClick={() => setOpenOptions(!openOptions)}
                  className="headerSearchText lebarm"
                />
                {openOptions && (
                  <div className="options">
                    <div className="optionItem">
                      <span className="optionText">Adult</span>
                      <div className="optionCounter">
                        <button disabled={options.adult <= 1} className="optionCounterButton" onClick={() => handleOption("adult", "d")}>
                          -
                        </button>
                        <span className="optionCounterNumber">{options.adult}</span>
                        <button className="optionCounterButton" onClick={() => handleOption("adult", "i")}>
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Children</span>
                      <div className="optionCounter">
                        <button disabled={options.children <= 0} className="optionCounterButton" onClick={() => handleOption("children", "d")}>
                          -
                        </button>
                        <span className="optionCounterNumber">{options.children}</span>
                        <button className="optionCounterButton" onClick={() => handleOption("children", "i")}>
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Infant</span>
                      <div className="optionCounter">
                        <button disabled={options.infant <= 0} className="optionCounterButton" onClick={() => handleOption("infant", "d")}>
                          -
                        </button>
                        <span className="optionCounterNumber">{options.infant}</span>
                        <button className="optionCounterButton" onClick={() => handleOption("infant", "i")}>
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="col-lg col-12">
                {/* <Input
                  placeholder="Class"
                  size="large"
                  suffix={
                    <FontAwesomeIcon
                      icon={faMoneyBill}
                      className="faicon"
                    />
                  }
                /> */}
                <Select
                  placeholder="Economy Class"
                  className="lebarmclass"
                  size="large"
                  // onChange={handleChange}
                  options={[
                    {
                      value: "economy",
                      label: "Economy Class",
                    },
                    {
                      value: "business",
                      label: "Business Class",
                    },
                  ]}
                />
              </div>
              <div className="col-lg col-12">
                <Button type="primary" size="large" className="lebarmsearchbtn" onClick={handleLogout}>
                  Search
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Panel;
