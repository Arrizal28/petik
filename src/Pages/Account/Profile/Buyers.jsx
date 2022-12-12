import React from "react";
import NavBar from "../../../Components/Navbar/Navbar";
import Footer from "../../../Components/Footer/Footer";
import { BoxHome, BoxMenu, BoxPage, CardAccount, CardProfile, CardUser, CardMenu, Links } from "../../../Styled/MUI/BuyerStyle.js";
import { Heading, Title } from "../../../Styled/ComponentUI/Styles";
import TopPanels from "../../../Components/Header/TopPanel";
import { Col, Row } from "antd";
import LogoutIcon from "@mui/icons-material/Logout";
import { Buttonz } from "../../../Styled/MUI/AuthStyles";
import { TableHead, TableRow } from "@mui/material";
import ButtonGroup from "@mui/material/ButtonGroup";
import { useDispatch } from "react-redux";
import { logout } from "../../../Redux/Actions/authaction";

function Buyers() {
  const dispatch = useDispatch();
  const handleLogout = (e) => {
    e.preventDefault();

    dispatch(logout());
  };
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
          <Row style={{ justifyContent: "center" }}>
            <Col>
              <CardAccount variant="outlined">
                <BoxMenu>
                  <Heading>Name</Heading>
                  <Title>First Name, Last Name</Title>
                </BoxMenu>
              </CardAccount>
              <CardMenu variant="outlined">
                <ButtonGroup>
                  <Buttonz variant="outlined">
                    <LogoutIcon onClick={handleLogout} /> Log Out
                  </Buttonz>
                  <Links to="/account/profile/edit">
                    <Buttonz variant="contained">Edit</Buttonz>{" "}
                  </Links>
                </ButtonGroup>
              </CardMenu>
            </Col>
            <Col>
              <CardUser variant="outlined">
                <TableHead>
                  <TableRow>
                    <Heading>Email</Heading>
                    <Title>sample@gmail.com</Title>{" "}
                  </TableRow>
                  <TableRow>
                    <Heading>Gender</Heading>
                    <Title>Male</Title>{" "}
                  </TableRow>
                  <TableRow>
                    <Heading>Phone Number</Heading>
                    <Title>085555555</Title>{" "}
                  </TableRow>
                  <TableRow>
                    <Heading>Address</Heading>
                    <Title>Kompleks Sekali</Title>{" "}
                  </TableRow>
                  <TableRow>
                    <Heading>Nationality</Heading>
                    <Title>Indonesia</Title>{" "}
                  </TableRow>
                </TableHead>
              </CardUser>
            </Col>
          </Row>
        </BoxPage>
      </BoxHome>
      <Footer />
    </>
  );
}

export default Buyers;
