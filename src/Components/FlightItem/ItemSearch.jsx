import React from "react";
import { Button, Divider, Stack } from "@mui/material";
import { AirlinesCard, CardOrder } from "../../Styled/MUI/TransactionStyle";
import { FontItem, FontP } from "../../Styled/ComponentUI/Styles";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ItemNotFound from "./ItemNotFound";
import { IconBagasi } from "../../Styled/MUI/IconStyled";
import { Tooltip } from "antd";

function ItemSearch({ cbooking }) {
  const { listflight } = useSelector((state) => state.airport);
  const navigate = useNavigate();

  return (
    <div style={{ maxWidth: 800, justifyContent: "center" }}>
      {!listflight?.data ? (
        <ItemNotFound />
      ) : (
        <>
          {listflight?.data?.map((item) => {
            return (
              <CardOrder variant="outlined">
                <Stack direction="row" justifyContent="space-between">
                  <FontP>{item.airline}</FontP>
                  <FontP style={{ marginRight: 30 }}>
                    <CalendarMonthIcon fontSize="small" style={{ margin: 2 }} />
                    {item.departureDate}
                  </FontP>
                </Stack>
                <Divider />
                <Stack direction="row" justifyContent="left" style={{ margin: 5 }}>
                  <Stack>
                    <AirlinesCard variant="outlined">
                      <img maxWidth="150px" width="100px" alt="" src={item.airlineLogo} />
                    </AirlinesCard>
                  </Stack>
                  <Stack justifyContent="space-between">
                    <Stack direction="row" justifyContent="center" style={{ margin: 10, textAlign: "center" }}>
                      <FontP>
                        ({item.origin}) {item.originCity}
                      </FontP>
                      <FontP>
                        <ArrowRightAltIcon />
                      </FontP>
                      <FontP>
                        ({item.destination}) {item.destinationCity}
                      </FontP>
                    </Stack>
                    <Stack direction="row" justifyContent="center" style={{ margin: 5, textAlign: "center" }}>
                      <FontItem>{item.departureTime}</FontItem>
                      <FontItem>
                        <ArrowRightAltIcon />
                      </FontItem>
                      <FontItem>{item.arrivalTime}</FontItem>
                    </Stack>
                  </Stack>
                  <Stack>
                    <FontItem>
                      <Tooltip title="Max 20KG">
                        <IconBagasi />
                      </Tooltip>
                    </FontItem>
                  </Stack>
                </Stack>
                <Divider />
                <Stack direction="row" justifyContent="space-between">
                  <FontP>Starts From $50{cbooking?.data?.total}</FontP>
                  <Button
                    size="small"
                    variant="contained"
                    style={{
                      marginRight: 20,
                      borderRadius: 10,
                      height: 30,
                      marginTop: 10,
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      navigate(`/inputdata/${item.id}`);
                    }}
                  >
                    Choose
                  </Button>
                </Stack>
              </CardOrder>
            );
          })}
        </>
      )}
    </div>
  );
}

export default ItemSearch;
