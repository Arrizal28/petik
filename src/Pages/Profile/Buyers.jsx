import React, { useEffect } from "react";
import NavBar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import {
  BoxHome,
  BoxMenu,
  BoxPage,
  CardAccount,
  CardProfile,
  CardUser,
  CardMenu,
  Links,
  ButtonProfile,
} from "../../Styled/MUI/BuyerStyle.js";
import { Heading, Title } from "../../Styled/ComponentUI/Styles";
import TopPanels from "../../Components/Header/TopPanel";
import { Col, Row } from "antd";
import LogoutIcon from "@mui/icons-material/Logout";
import { ButtonGroup, TableHead, TableRow } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { showUserBio } from "../../Redux/Actions/userAction";
// import { useNavigate } from "react-router-dom";

function Buyers() {
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.user.sbio);

  useEffect(() => {
    dispatch(showUserBio());
  }, [dispatch]);

  return (
    <>
      <TopPanels />
      <NavBar />
      <BoxHome>
        <BoxPage>
          <CardProfile variant="outlined">
            <BoxMenu>
              <Heading>Detail Profile</Heading>
              <Title>Di sini anda bisa melihat profil akunmu.</Title>
            </BoxMenu>
          </CardProfile>
          {data?.biodata === null ? (
            <>
              <Row style={{ justifyContent: "center" }}>
                <Col>
                  <CardAccount variant="outlined">
                    <BoxMenu>
                      <Heading>You must create first</Heading>
                      <Title>you must create first</Title>
                    </BoxMenu>
                  </CardAccount>
                  <CardMenu variant="outlined">
                    <ButtonGroup>
                      <ButtonProfile variant="outlined">
                        <LogoutIcon /> Log Out
                      </ButtonProfile>
                      <Links to="/account/profile/edit">
                        {data?.biodata === null ? (
                          <ButtonProfile variant="contained">
                            Create
                          </ButtonProfile>
                        ) : (
                          <ButtonProfile variant="contained">
                            Edit
                          </ButtonProfile>
                        )}
                      </Links>
                    </ButtonGroup>
                  </CardMenu>
                </Col>
              </Row>
            </>
          ) : (
            <>
              <Row style={{ justifyContent: "center" }}>
                <Col>
                  <CardAccount variant="outlined">
                    <BoxMenu>
                      <Heading>Name</Heading>
                      <Title>
                        {data?.biodata?.firstName} {data?.biodata?.lastName}
                      </Title>
                    </BoxMenu>
                  </CardAccount>
                  <CardMenu variant="outlined">
                    <ButtonProfile variant="outlined">
                      <LogoutIcon /> Log Out
                    </ButtonProfile>
                    <Links to="/account/profile/edit">
                      <ButtonProfile variant="contained">Edit</ButtonProfile>{" "}
                    </Links>
                  </CardMenu>
                </Col>
                <Col>
                  <CardUser variant="outlined">
                    <TableHead>
                      <TableRow>
                        <Heading>Email</Heading>
                        <Title>{data?.email}</Title>{" "}
                      </TableRow>
                      <TableRow>
                        <Heading>Gender</Heading>
                        <Title>{data?.biodata?.gender}</Title>{" "}
                      </TableRow>
                      <TableRow>
                        <Heading>Phone Number</Heading>
                        <Title>{data?.biodata?.phoneNumber}</Title>{" "}
                      </TableRow>
                      <TableRow>
                        <Heading>Address</Heading>
                        <Title>{data?.biodata?.address}</Title>{" "}
                      </TableRow>
                      <TableRow>
                        <Heading>Nationality</Heading>
                        <Title>{data?.biodata?.nationality}</Title>{" "}
                      </TableRow>
                    </TableHead>
                  </CardUser>
                </Col>
              </Row>
            </>
          )}
        </BoxPage>
      </BoxHome>
      <Footer />
    </>
  );
}

export default Buyers;
