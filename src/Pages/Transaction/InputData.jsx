import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import NavBar from "../../Components/Navbar/Navbar";
import Box from "@mui/material/Box";
import Footer from "../../Components/Footer/Footer";
import TopPanels from "../../Components/Header/TopPanel";
import { ButtonData, CardContainer, CardPass, Dividers, FieldData } from "../../Styled/MUI/TransactionStyle";
import { FontNotif, Title } from "../../Styled/ComponentUI/Styles";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { createBooking } from "../../Redux/Actions/bookingAction";

function InputData() {
  const [total_passenger, settotal_passenger] = useState("");
  const [totalPassagerForm, setTotalPassagerForm] = useState(0);
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();

  const [requestData, setRequestData] = useState({
    body: [],
    ticketClass: "business",
    flight_id: 0,
  });

  const params = useParams();
  const dispatch = useDispatch();

  let pessangers = [];

  useEffect(() => {
    if (params.id) {
      setRequestData({
        ...requestData,
        flight_id: params.id,
      });
    }
  }, [params.id, requestData]);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (total_passenger === "") {
      alert("must input total passenger");
      return;
    }
    if (total_passenger !== "") {
      setTotalPassagerForm(Number(total_passenger));
      setToggle(true);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (requestData?.body?.passangerName === "") {
      alert("passengerName is required");
      return;
    }
    if (requestData?.body?.NIK === "") {
      alert("nik is required");
      return;
    }
    if (requestData?.body?.passport === "") {
      alert("passport is required");
      return;
    }
    dispatch(createBooking(requestData));
    navigate("/payment");
  };

  return (
    <>
      <NavBar />
      <TopPanels />
      <Box
        sx={{
          flexGrow: 1,
          justifyContent: "center",
          maxWidth: 1024,
          margin: "auto",
        }}
      >
        <Grid container spacing={2} sx={{ flexGrow: 1, justifyContent: "center", display: "flex" }}>
          <Grid item xs={9}>
            <Grid>
              <CardContainer variant="outlined">
                <FontNotif>Input Data Passenger</FontNotif>
              </CardContainer>
            </Grid>
            <Grid>
              <CardPass variant="outlined">
                <Grid>
                  <Box
                    sx={{
                      width: 800,
                      maxWidth: "100%",
                    }}
                  >
                    <Title>Total Passenger</Title>
                    <FieldData variant="outlined" size="small" name="Total Passenger" value={total_passenger} onChange={(e) => settotal_passenger(e.target.value)} type="number" required />
                    <ButtonData variant="contained" size="small" onClick={(e) => onSubmit(e)}>
                      Save Data
                    </ButtonData>{" "}
                  </Box>
                </Grid>

                <Dividers />
              </CardPass>
            </Grid>
            <Grid>
              <CardPass variant="outlined">
                <Grid>
                  {totalPassagerForm > 0 &&
                    Array.from(Array(totalPassagerForm).keys()).map((item, i) => {
                      return (
                        <>
                          <Grid style={{ textAlign: "center" }}>
                            <FontNotif>Pasengger Data {item + 1}</FontNotif>
                          </Grid>
                          <Dividers />
                          <Grid>
                            <Box
                              sx={{
                                width: 800,
                                maxWidth: "100%",
                              }}
                            >
                              <Title>Passenger Name</Title>
                              <FieldData
                                variant="outlined"
                                size="small"
                                value={requestData?.body[i]?.passangerName}
                                onChange={(e) => {
                                  pessangers = requestData?.body;
                                  pessangers[i] = {
                                    ...pessangers[i],
                                    passangerName: e.target.value,
                                  };
                                  setRequestData({
                                    ...requestData,
                                    body: pessangers,
                                  });
                                }}
                              />
                            </Box>
                          </Grid>
                          <Dividers />
                          <Grid>
                            <Box
                              sx={{
                                width: 800,
                                maxWidth: "100%",
                              }}
                            >
                              <Title>Ticket Class</Title>
                              <FieldData
                                variant="outlined"
                                size="small"
                                value={requestData?.body[i]?.passangerName}
                                onChange={(e) => {
                                  pessangers = requestData?.body;
                                  pessangers[i] = {
                                    ...pessangers[i],
                                    passangerName: e.target.value,
                                  };
                                  setRequestData({
                                    ...requestData,
                                    body: pessangers,
                                  });
                                }}
                              />
                            </Box>
                          </Grid>
                          <Dividers />
                          <Grid>
                            <Box
                              sx={{
                                width: 800,
                                maxWidth: "100%",
                              }}
                            >
                              <Title>ID Card KTP</Title>
                              <FieldData
                                variant="outlined"
                                size="small"
                                value={requestData?.body[i]?.NIK}
                                onChange={(e) => {
                                  pessangers = requestData?.body;
                                  pessangers[i] = {
                                    ...pessangers[i],
                                    NIK: e.target.value,
                                  };
                                  setRequestData({
                                    ...requestData,
                                    body: pessangers,
                                  });
                                }}
                              />
                            </Box>
                            <Dividers />
                            <Grid>
                              <Box
                                sx={{
                                  width: 800,
                                  maxWidth: "100%",
                                }}
                              >
                                <Title>Passport</Title>
                                <FieldData
                                  variant="outlined"
                                  size="small"
                                  value={requestData?.body[i]?.passport}
                                  onChange={(e) => {
                                    pessangers = requestData?.body;
                                    pessangers[i] = {
                                      ...pessangers[i],
                                      passport: e.target.value,
                                    };
                                    setRequestData({
                                      ...requestData,
                                      body: pessangers,
                                    });
                                  }}
                                />
                              </Box>
                            </Grid>
                            <Dividers />
                            <Dividers />
                          </Grid>
                        </>
                      );
                    })}
                  {toggle && (
                    <ButtonData variant="contained" size="small" onClick={handleSubmit}>
                      Continue Payment
                    </ButtonData>
                  )}
                </Grid>
              </CardPass>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </>
  );
}

export default InputData;
