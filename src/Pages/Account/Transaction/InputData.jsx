import React from "react";
import { Grid } from "@mui/material";
import NavBar from "../../../Components/Navbar/Navbar";
import Box from "@mui/material/Box";
import Footer from "../../../Components/Footer/Footer";
import TopPanels from "../../../Components/Header/TopPanel";
import { ButtonData, CardContainer, CardPass, Dividers, FieldData } from "../../../Styled/MUI/TransactionStyle";
import { FontNotif, Title } from "../../../Styled/ComponentUI/Styles";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

function InputData({ totals, setTotals }) {
  return (
    <>
      <NavBar />
      <TopPanels />
      <Box sx={{ flexGrow: 1, justifyContent: "center", maxWidth: 1024, margin: "auto" }}>
        <Grid container spacing={2} sx={{ flexGrow: 1, justifyContent: "center", display: "flex" }}>
          <Grid item xs={9}>
            <Grid>
              <CardContainer variant="outlined">
                <FontNotif>Input Data Passenger</FontNotif>
              </CardContainer>
            </Grid>
            <Grid>
              <CardPass variant="outlined">
                <Grid2 item xs={9}>
                  <Grid>
                    <Box
                      sx={{
                        width: 800,
                        maxWidth: "100%",
                      }}
                    >
                      <Title>Total Passenger</Title>
                      <FieldData variant="outlined" size="small" name="Total Passenger" value={totals} onChange={(event) => setTotals(event.target.value)} type="number" required />
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
                      <Title>Passenger Name</Title>
                      <FieldData variant="outlined" size="small" />
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
                      <Title>ID Card (KTP)</Title>
                      <FieldData variant="outlined" size="small" />
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
                        <FieldData variant="outlined" size="small" />
                      </Box>
                    </Grid>
                    <Dividers />
                    <ButtonData variant="contained" size="small">
                      Save Data
                    </ButtonData>
                    <Dividers />
                  </Grid>
                </Grid2>
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
