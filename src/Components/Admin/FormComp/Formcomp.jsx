import React, { useEffect, useState } from "react";
import "./formcomp.scss";
import { Typography, DatePicker, Button, Select } from "antd";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  detailflight,
  editflight,
  createflight,
} from "../../../Redux/Actions/adminAction";
import { useNavigate } from "react-router-dom";
import { getairport, clear } from "../../../Redux/Actions/airportAction";
import swal from "sweetalert";
import moment from "moment";
const { Title } = Typography;

function Formcomp() {
  const { dflight } = useSelector((state) => state.admin);
  const { resairport } = useSelector((state) => state.airport);
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [airline, setAirline] = useState("");
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [arrival, setArrival] = useState("");
  const [departure, setDeparture] = useState("");
  const [newvalue, setNewvalue] = useState("");
  const sameairport = origin === destination;
  const emptysearch = origin === "" && destination === "";
  const [eairline, setEAirline] = useState("");
  const [eorigin, setEOrigin] = useState("");
  const [edestination, setEDestination] = useState("");
  const [earrival, setEArrival] = useState("");
  const [edeparture, setEDeparture] = useState("");

  useEffect(() => {
    if (params.id) {
      dispatch(detailflight(params.id));
    }
  }, [params.id, dispatch]);

  useEffect(() => {
    if (params.id) {
      setEAirline(dflight?.data?.airline);
      setEOrigin(dflight?.data?.origin);
      setEDestination(dflight?.data?.destination);
      setEDeparture(
        moment(dflight?.data?.departure).utc().format("YYYY-MM-DDTHH:mm:ss")
      );
      setEArrival(
        moment(dflight?.data?.arrival).utc().format("YYYY-MM-DDTHH:mm:ss")
      );
    }
  }, [
    params.id,
    dflight?.data?.airline,
    dflight?.data?.origin,
    dflight?.data?.destination,
    dflight?.data?.departure,
    dflight?.data?.arrival,
  ]);

  const handleAirline = (value) => {
    setAirline(value);
  };

  const handleEAirline = (value) => {
    setEAirline(value);
  };

  const onChange = (value, dateString) => {
    setDeparture(dateString);
  };

  const onChangeeditdeparture = (value, dateString) => {
    setEDeparture(dateString);
  };

  const onChangeeditarrival = (value, dateString) => {
    setEArrival(dateString);
  };

  const onOkA = (value) => {};

  const onChangeA = (value, dateString) => {
    setArrival(dateString);
  };

  const onOk = (value) => {};

  const onChangeO = (value) => {
    setOrigin(value);
    setNewvalue("");
  };

  const onChangeD = (value) => {
    setDestination(value);
    setNewvalue("");
  };

  const onChangeeditO = (value) => {
    setEOrigin(value);
    setNewvalue("");
  };

  const onChangeeditD = (value) => {
    setEDestination(value);
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
    if (newvalue === "") {
      dispatch(clear());
      return;
    }
    const timeoutId = setTimeout(() => {
      dispatch(getairport(newvalue));
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [newvalue, dispatch]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (emptysearch) {
      swal({
        title: "name airport required!",
        icon: "warning",
        button: "OK",
      });
      return;
    }
    if (sameairport) {
      swal({
        title: "airports can't be the same!",
        icon: "warning",
        button: "OK",
      });
      return;
    }
    if (origin === "") {
      alert("origin is required");
      return;
    }
    if (destination === "") {
      alert("destination is required");
      return;
    }
    if (airline === "") {
      alert("airline is required");
      return;
    }
    if (arrival === "") {
      alert("arrival is required");
      return;
    }
    if (departure === "") {
      alert("departure is required");
      return;
    }
    if (
      origin !== "" &&
      destination !== "" &&
      airline !== "" &&
      arrival !== "" &&
      departure !== ""
    ) {
      const data = {
        airline,
        origin,
        destination,
        departure,
        arrival,
      };
      dispatch(createflight(data));
      navigate("/admin/flight");
    }
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    if (
      eorigin !== "" &&
      edestination !== "" &&
      eairline !== "" &&
      earrival !== "" &&
      edeparture !== ""
    ) {
      const editdata = {
        airline: eairline,
        origin: eorigin,
        destination: edestination,
        departure: edeparture,
        arrival: earrival,
      };
      dispatch(editflight(editdata, params.id));
      navigate("/admin/flight");
    }
  };

  return (
    <>
      {params.id ? (
        <>
          <Title level={5}>Edit Flight Schedule</Title>
          <br />
          <Title level={5}>Airline : </Title>
          <Select
            className="lebarm"
            size="large"
            placeholder={dflight?.data?.airline}
            onChange={handleEAirline}
            options={[
              {
                value: "Garuda Indonesia",
                label: "Garuda Indonesia",
              },
              {
                value: "Citilink",
                label: "Citilink",
              },
              {
                value: "AirAsia",
                label: "AirAsia",
              },
              {
                value: "Lion Air",
                label: "Lion Air",
              },
              {
                value: "Sriwijaya Air",
                label: "Sriwijaya Air",
              },
              {
                value: "Wings Air (Indonesia)",
                label: "Wings Air (Indonesia)",
              },
              {
                value: "Batik Air",
                label: "Batik Air",
              },
            ]}
          />
          <Title level={5}>Origin : </Title>
          <Select
            showSearch
            autoClearSearchValue
            size="large"
            placeholder={dflight?.data?.origin}
            optionFilterProp="children"
            className="lebarm"
            allowClear
            filterOption={(input, option) =>
              (option?.label ?? "").toUpperCase().includes(input.toUpperCase())
            }
            onSearch={handleSearch}
            onChange={onChangeeditO}
            options={
              newvalue.length > 1 &&
              resairport?.data?.content.map((item) => ({
                value: item.iata,
                label: `${item.servedCity},(${item.iata})${item.name},${item.country.name}`,
              }))
            }
          >
            {newvalue.length > 1 &&
              (resairport?.data?.content || []).map((item) => {
                return (
                  <Select.Option key={item.aid} value={item.iata}>
                    `${item.servedCity},($
                    {item.iata})${item.name},$
                    {item.country.name}`
                  </Select.Option>
                );
              })}
          </Select>
          <Title level={5}>Destination : </Title>
          <Select
            showSearch
            autoClearSearchValue
            size="large"
            placeholder={dflight?.data?.destination}
            optionFilterProp="children"
            className="lebarm"
            allowClear
            filterOption={(input, option) =>
              (option?.label ?? "").toUpperCase().includes(input.toUpperCase())
            }
            onSearch={handleSearch}
            onChange={onChangeeditD}
            options={
              newvalue.length > 1 &&
              resairport?.data?.content.map((item) => ({
                value: item.iata,
                label: `${item.servedCity},(${item.iata})${item.name},${item.country.name}`,
              }))
            }
          >
            {newvalue.length > 1 &&
              (resairport?.data?.content || []).map((item) => {
                return (
                  <Select.Option key={item.aid} value={item.iata}>
                    `${item.municipality},($
                    {item.iata})${item.name},$
                    {item.country.name}`
                  </Select.Option>
                );
              })}
          </Select>
          <Title level={5}>Departure : </Title>
          <DatePicker
            showTime
            placeholder={dflight?.data?.departure}
            format="YYYY-MM-DDTHH:mm:ss"
            onChange={onChangeeditdeparture}
            onOk={onOk}
          />
          <Title level={5}>Arrival : </Title>
          <DatePicker
            showTime
            onOk={onOkA}
            onChange={onChangeeditarrival}
            placeholder={dflight?.data?.arrival}
            format="YYYY-MM-DDTHH:mm:ss"
          />
          <br />
          <br />
          <br />
          <Button type="primary" onClick={handleEdit}>
            Save Changes
          </Button>
        </>
      ) : (
        <>
          <Title level={5}>Add Flight Schedule</Title>
          <br />
          <Title level={5}>Airline : </Title>
          <Select
            className="lebarm"
            size="large"
            placeholder="Airline"
            onChange={handleAirline}
            options={[
              {
                value: "Garuda Indonesia",
                label: "Garuda Indonesia",
              },
              {
                value: "Citilink",
                label: "Citilink",
              },
              {
                value: "AirAsia",
                label: "AirAsia",
              },
              {
                value: "Lion Air",
                label: "Lion Air",
              },
              {
                value: "Sriwijaya Air",
                label: "Sriwijaya Air",
              },
              {
                value: "Wings Air (Indonesia)",
                label: "Wings Air (Indonesia)",
              },
              {
                value: "Batik Air",
                label: "Batik Air",
              },
            ]}
          />
          <Title level={5}>Origin : </Title>
          <Select
            showSearch
            autoClearSearchValue
            size="large"
            placeholder="From"
            optionFilterProp="children"
            className="lebarm"
            allowClear
            filterOption={(input, option) =>
              (option?.label ?? "").toUpperCase().includes(input.toUpperCase())
            }
            onSearch={handleSearch}
            onChange={onChangeO}
            options={
              newvalue.length > 1 &&
              resairport?.data?.content.map((item) => ({
                value: item.iata,
                label: `${item.servedCity},(${item.iata})${item.name},${item.country.name}`,
              }))
            }
          >
            {newvalue.length > 1 &&
              (resairport?.data?.content || []).map((item) => {
                return (
                  <Select.Option key={item.aid} value={item.iata}>
                    `${item.servedCity},($
                    {item.iata})${item.name},$
                    {item.country.name}`
                  </Select.Option>
                );
              })}
          </Select>
          <Title level={5}>Destination : </Title>
          <Select
            showSearch
            autoClearSearchValue
            size="large"
            placeholder="To"
            optionFilterProp="children"
            className="lebarm"
            allowClear
            filterOption={(input, option) =>
              (option?.label ?? "").toUpperCase().includes(input.toUpperCase())
            }
            onSearch={handleSearch}
            onChange={onChangeD}
            options={
              newvalue.length > 1 &&
              resairport?.data?.content.map((item) => ({
                value: item.iata,
                label: `${item.servedCity},(${item.iata})${item.name},${item.country.name}`,
              }))
            }
          >
            {newvalue.length > 1 &&
              (resairport?.data?.content || []).map((item) => {
                return (
                  <Select.Option key={item.aid} value={item.iata}>
                    `${item.servedCity},($
                    {item.iata})${item.name},$
                    {item.country.name}`
                  </Select.Option>
                );
              })}
          </Select>
          <Title level={5}>Departure : </Title>
          <DatePicker
            showTime
            format="YYYY-MM-DDTHH:mm:ss"
            onOk={onOk}
            onChange={onChange}
          />
          <Title level={5}>Arrival : </Title>
          <DatePicker
            showTime
            format="YYYY-MM-DDTHH:mm:ss"
            onOk={onOkA}
            onChange={onChangeA}
          />
          <br />
          <br />
          <br />
          <Button type="primary" onClick={handleSubmit}>
            Add New Flight
          </Button>
        </>
      )}
    </>
  );
}

export default Formcomp;
