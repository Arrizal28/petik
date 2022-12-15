import { faPlane, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Checkbox, DatePicker, Input, Select } from "antd";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getairport, clear } from "../../Redux/Actions/airportAction";
import "./panel.css";

function Panel() {
  const [openOptions, setOpenOptions] = useState(false);
  const [oneWay, setOneWay] = useState(false);
  const [origin, setOrigin] = useState();
  const [destination, setDestination] = useState("");
  const [newvalue, setNewvalue] = useState("");

  const { resairport } = useSelector((state) => state.airport);

  const dispatch = useDispatch();

  const onChange = (value) => {
    setOrigin(value);
    setNewvalue("");
  };

  const onChangeke = (value) => {
    setDestination(value);
    setNewvalue("");
  };

  const handleSearch = (newvalue) => {
    if (newvalue) {
      setNewvalue(newvalue);
    } else {
      setNewvalue("");
    }
  };

  useEffect(() => {
    if (newvalue.length > 0) {
      dispatch(getairport(newvalue));
    } else if (newvalue === "") {
      dispatch(clear());
    }
  }, [newvalue, dispatch]);

  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    infant: 0,
  });

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
              {newvalue} {origin} {destination}
            </div>
            <div className="row panelc">
              <div className="col-lg-12 col-sm-12">
                <Checkbox onClick={() => setOneWay(!oneWay)}>One Way</Checkbox>
              </div>
            </div>
            <div className="row panel2 justify-content-center">
              <div className="col-lg-4 col-sm-12">
                <Select
                  showSearch
                  autoClearSearchValue
                  size="large"
                  placeholder="Dari"
                  optionFilterProp="children"
                  className="lebarm"
                  allowClear
                  filterOption={(input, option) =>
                    (option?.label ?? "")
                      .toUpperCase()
                      .includes(input.toUpperCase())
                  }
                  onSearch={handleSearch}
                  onChange={onChange}
                  options={resairport?.data?.features.map((item) => ({
                    value: item.properties.iata,
                    label: `${item.properties.municipality},(${item.properties.iata})${item.properties.name},${item.properties.country.name}`,
                  }))}
                />
              </div>
              <div className="col-lg-4 col-sm-12">
                <Select
                  showSearch
                  size="large"
                  placeholder="Ke"
                  optionFilterProp="children"
                  className="lebarm"
                  allowClear
                  filterOption={(input, option) =>
                    (option?.label ?? "")
                      .toUpperCase()
                      .includes(input.toUpperCase())
                  }
                  onSearch={handleSearch}
                  onChange={onChangeke}
                  options={resairport?.data?.features.map((item) => ({
                    value: item.properties.iata,
                    label: `${item.properties.municipality},(${item.properties.iata})${item.properties.name},${item.properties.country.name}`,
                  }))}
                />
              </div>
              <div className="col-lg-4 col-sm-12">
                {oneWay ? (
                  <DatePicker className="lebarm" size="large" />
                ) : (
                  <>
                    <DatePicker className="lebardate" size="large" />
                    <DatePicker className="lebardate" size="large" />
                  </>
                )}
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
                        <button
                          disabled={options.adult <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption("adult", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.adult}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("adult", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Children</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.children <= 0}
                          className="optionCounterButton"
                          onClick={() => handleOption("children", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.children}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("children", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Infant</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.infant <= 0}
                          className="optionCounterButton"
                          onClick={() => handleOption("infant", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.infant}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("infant", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="col-lg col-12">
                <Select
                  placeholder="Economy Class"
                  className="lebarmclass"
                  size="large"
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
                <Button type="primary" size="large" className="lebarmsearchbtn">
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
