import React, { useEffect } from "react";
import NavBar from "../../../Components/Navbar/Navbar";
import Footer from "../../../Components/Footer/Footer";
import {
  BoxHome,
  BoxMenu,
  BoxPage,
  CardAccount,
  CardProfile,
  CardUser,
  CardMenu,
  Links,
} from "../../../Styled/MUI/BuyerStyle.js";
import { Heading, Title } from "../../../Styled/ComponentUI/Styles";
import TopPanels from "../../../Components/Header/TopPanel";
import { Col, Row } from "antd";
import LogoutIcon from "@mui/icons-material/Logout";
import { Buttonz } from "../../../Styled/MUI/AuthStyles";
import { TableHead, TableRow } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { showUserBio } from "../../../Redux/Actions/userAction";
import { useNavigate } from "react-router-dom";

function Buyers() {
  const navigate = useNavigate();
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
          {/* {data.biodata.map((item) => {
            return (
              <Row style={{ justifyContent: "center" }} key={item.id}>
                <Col>
                  <CardAccount variant="outlined">
                    <BoxMenu>
                      <Heading>Name</Heading>
                      <Title>
                        {item.firstName} , {item.lastName}adad
                      </Title>
                    </BoxMenu>
                  </CardAccount>
                  <CardMenu variant="outlined">
                    <Buttonz variant="outlined">
                      <LogoutIcon /> Log Out
                    </Buttonz>
                    <Links to="/account/profile/edit">
                      <Buttonz variant="contained">Edit</Buttonz>{" "}
                    </Links>
                  </CardMenu>
                </Col>
                <Col>
                  <CardUser variant="outlined">
                    <TableHead>
                      <TableRow>
                        <Heading>Email</Heading>
                        <Title>{item.email}</Title>{" "}
                      </TableRow>
                      <TableRow>
                        <Heading>Gender</Heading>
                        <Title>{item.gender} ada</Title>{" "}
                      </TableRow>
                      <TableRow>
                        <Heading>Phone Number</Heading>
                        <Title>{item.phoneNumber} safaf</Title>{" "}
                      </TableRow>
                      <TableRow>
                        <Heading>Address</Heading>
                        <Title>{item.address} adasda</Title>{" "}
                      </TableRow>
                      <TableRow>
                        <Heading>Nationality</Heading>
                        <Title>{item.nationality}adasd adsad</Title>{" "}
                      </TableRow>
                    </TableHead>
                  </CardUser>
                </Col>
              </Row>
            );
          })} */}
          {data.biodata === null ? (
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
                    <Buttonz variant="outlined">
                      <LogoutIcon /> Log Out
                    </Buttonz>
                    <Links to="/account/profile/edit">
                      {data.biodata === null ? (
                        <Buttonz
                          variant="contained"
                          onClick={() => {
                            navigate("/account/profile/edit");
                          }}
                        >
                          Create
                        </Buttonz>
                      ) : (
                        <Buttonz
                          variant="contained"
                          nClick={() => {
                            navigate("/account/profile/edit");
                          }}
                        >
                          Edit
                        </Buttonz>
                      )}
                    </Links>
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
                        {data.biodata.firstName} ,{data.biodata.lastName}
                      </Title>
                    </BoxMenu>
                  </CardAccount>
                  <CardMenu variant="outlined">
                    <Buttonz variant="outlined">
                      <LogoutIcon /> Log Out
                    </Buttonz>
                    <Links to="/account/profile/edit">
                      <Buttonz variant="contained">Edit</Buttonz>{" "}
                    </Links>
                  </CardMenu>
                </Col>
                <Col>
                  <CardUser variant="outlined">
                    <TableHead>
                      <TableRow>
                        <Heading>Email</Heading>
                        <Title>{data.email}</Title>{" "}
                      </TableRow>
                      <TableRow>
                        <Heading>Gender</Heading>
                        <Title>{data.biodata.gender}</Title>{" "}
                      </TableRow>
                      <TableRow>
                        <Heading>Phone Number</Heading>
                        <Title>{data.biodata.phoneNumber}</Title>{" "}
                      </TableRow>
                      <TableRow>
                        <Heading>Address</Heading>
                        <Title>{data.biodata.address}</Title>{" "}
                      </TableRow>
                      <TableRow>
                        <Heading>Nationality</Heading>
                        <Title>{data.biodata.nationality}</Title>{" "}
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
