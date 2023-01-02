import React, { useEffect } from "react";
import { Typography } from "antd";
import { useParams } from "react-router-dom";
import { getdetailuser } from "../../../Redux/Actions/adminAction";
import { useDispatch, useSelector } from "react-redux";
const { Title } = Typography;

function Userdetail() {
  const params = useParams();
  const dispatch = useDispatch();

  const { getuser } = useSelector((state) => state.admin);

  useEffect(() => {
    if (params.id) {
      dispatch(getdetailuser(params.id));
    }
  }, [params.id, dispatch]);

  return (
    <>
      <Title level={1}>{getuser?.data?.email}</Title>
      <br />
      <Title level={4}>
        Full Name : {getuser?.data?.biodata?.firstName}{" "}
        {getuser?.data?.biodata?.lastName}
      </Title>
      <br />
      <Title level={4}>Gender : {getuser?.data?.biodata?.gender}</Title>
      <br />
      <Title level={4}>
        Phone Number : {getuser?.data?.biodata?.phoneNumber}
      </Title>
      <br />
      <Title level={4}>Address : {getuser?.data?.biodata?.address}</Title>
      <br />
      <Title level={4}>
        Nationality : {getuser?.data?.biodata?.nationality}
      </Title>
    </>
  );
}

export default Userdetail;
