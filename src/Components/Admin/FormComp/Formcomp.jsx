import React, { useEffect, useState } from "react";
import "./formcomp.scss";
import { Typography, Input, DatePicker, Button } from "antd";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  detailflight,
  editflight,
  createflight,
} from "../../../Redux/Actions/adminAction";
import { useNavigate } from "react-router-dom";
const { Title } = Typography;

function Formcomp() {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [airline, setAirline] = useState("");
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [arrival, setArrival] = useState("");
  const [departure, setDeparture] = useState("");

  useEffect(() => {
    if (params.id) {
      dispatch(detailflight(params.id));
    }
  }, [params.id, dispatch]);

  const onChange = (value, dateString) => {
    console.log(value, dateString);
    setDeparture(dateString);
  };

  const onOkA = (value) => {
    console.log("onOk: ", value);
  };

  const onChangeA = (value, dateString) => {
    console.log(value, dateString);
    setArrival(dateString);
  };

  const onOk = (value) => {
    console.log("onOk: ", value);
  };

  useEffect(() => {
    console.log("tglfix", departure);
  }, [departure]);

  // function customFormat(value) {
  //   return value.format("YYYY/MM/DDTHH:mm:ss");
  // }

  // const onChange = (value, dateString) => {
  //   console.log("Selected Time: ", value);
  //   console.log("Formatted Selected Time: ", dateString);
  // };

  // const onOk = (value) => {
  //   console.log("onOk: ", value);
  // };

  const { dflight } = useSelector((state) => state.admin);

  const handleSubmit = async (e) => {
    e.preventDefault();
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

  return (
    <>
      {params.id ? (
        <>
          {/* {dflight?.data?.map((item) => {
            return (
              <> */}
          <Title level={5}>Edit Flight Schedule</Title>
          <br />
          <Title level={5}>Airline : </Title>
          <Input
            size="large"
            placeholder={dflight?.data?.airline}
            value={airline}
            onChange={(e) => setAirline(e.target.value)}
          />
          <Title level={5}>Origin : </Title>
          <Input
            size="large"
            placeholder={dflight?.data?.origin}
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
          />
          <Title level={5}>Destination : </Title>
          <Input
            size="large"
            placeholder={dflight?.data?.destination}
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
          <Title level={5}>Departure : </Title>
          <DatePicker
            showTime
            format="YYYY-MM-DDTHH:mm:ss"
            onChange={onChange}
            onOk={onOk}
          />
          <Title level={5}>Arrival : </Title>
          <DatePicker showTime onOk={onOkA} onChange={onChangeA} />
          <br />
          <br />
          <br />
          <Button
            type="primary"
            onClick={(e) => {
              e.preventDefault();
              dispatch(editflight(params.id));
              navigate("/admin/flight");
            }}
          >
            Save Changes
          </Button>
          {/* </>
            );
          })} */}
        </>
      ) : (
        <>
          <Title level={5}>Add Flight Schedule</Title>
          <br />
          <Title level={5}>Airline : </Title>
          <Input
            size="large"
            placeholder="Airline"
            value={airline}
            onChange={(e) => setAirline(e.target.value)}
          />
          <Title level={5}>Origin : </Title>
          <Input
            size="large"
            placeholder="Origin"
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
          />
          <Title level={5}>Destination : </Title>
          <Input
            size="large"
            placeholder="Destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
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
