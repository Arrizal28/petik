import React from "react";
import "./formcomp.scss";
import { Typography, Input, DatePicker, Button } from "antd";
import { useParams } from "react-router-dom";
// import { deleteflight } from "../../../Redux/Actions/adminAction"
const { Title } = Typography;

function Formcomp() {
  const params = useParams();

  return (
    <>
      {params.id ? (
        <>
          <Title level={5}>Edit Flight Schedule</Title>
        </>
      ) : (
        <>
          <Title level={5}>Add Flight Schedule</Title>
        </>
      )}
      <br />
      <Title level={5}>Airline : </Title>
      <Input size="large" placeholder="Airline" />
      <Title level={5}>Origin : </Title>
      <Input size="large" placeholder="Origin" />
      <Title level={5}>Destination : </Title>
      <Input size="large" placeholder="Destination" />
      <Title level={5}>Departure : </Title>
      <DatePicker showTime />
      <Title level={5}>Arrival : </Title>
      <DatePicker showTime />
      <Title level={5}>Link For Logo Airline : </Title>
      <Input size="large" placeholder="Link Logo" />
      <br />
      <br />
      <br />
      {params.id ? (
        <>
          <Button type="primary">Save Changes</Button>
        </>
      ) : (
        <>
          <Button type="primary">Add New Flight</Button>
        </>
      )}
    </>
  );
}

export default Formcomp;
