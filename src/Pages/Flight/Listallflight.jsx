import React, { useState, useEffect } from "react";
import { getscheduleFlight } from "../../Redux/Actions/airportAction";
import { useDispatch, useSelector } from "react-redux";
import { Table, Pagination, Space } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import Footer from "../../Components/Footer/Footer";
import "./listallflight.css";

const UserList = () => {
  const columns = [
    {
      title: "Airline",
      dataIndex: "airline",
      key: "airline",
    },
    {
      title: "Origin",
      dataIndex: "origin",
      key: "origin",
    },
    {
      title: "Destination",
      dataIndex: "destination",
      key: "destination",
    },
    {
      title: "Departure Date",
      dataIndex: "departuredate",
      key: "departuredate",
    },
    {
      title: "Action",
      dataIndex: "",
      key: "x",
      render: () => (
        <Space size="middle">
          <EditOutlined />
          <DeleteOutlined />
        </Space>
      ),
    },
  ];
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  const { flight } = useSelector((state) => state.airport);

  useEffect(() => {
    dispatch(getscheduleFlight(page, 10));
  }, [page, dispatch]);

  return (
    <div className="container mt-5 mb-5 pag">
      <h1>All Flight Schedules</h1>
      <Table
        columns={columns}
        pagination={false}
        dataSource={flight?.data?.result.map((item) => ({
          key: item.id,
          airline: item.airline,
          origin: item.origin,
          destination: item.destination,
          departuredate: item.departureDate,
        }))}
      />
      <Pagination
        current={flight?.data?.pageNumber}
        total={flight?.data?.totalRows}
        onChange={(page) => {
          setPage(page);
        }}
      />
      <Footer />
    </div>
  );
};

export default UserList;
