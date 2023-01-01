import React from "react";
import { Button, Divider, Stack, Tooltip } from "@mui/material";
import { AirlinesCard, CardOrder } from "../../Styled/MUI/TransactionStyle";
import { FontItem, FontP } from "../../Styled/ComponentUI/Styles";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { IconBagasi } from "../../Styled/MUI/IconStyled";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ItemNotFound from "./ItemNotFound";

function ItemSearch() {
  const { listflight } = useSelector((state) => state.airport);
  const navigate = useNavigate();

  return (
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
            <Stack
              direction="row"
              justifyContent="space-between"
              style={{ margin: 5 }}
            >
              <Stack>
                <AirlinesCard variant="outlined">
                  <img
                    maxWidth="150px"
                    width="100px"
                    alt=""
                    src={item.airlineLogo}
                  />
                </AirlinesCard>
              </Stack>
              <Stack>
                <Stack direction="row" justifyContent="space-between">
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
                <Stack direction="row" justifyContent="space-between">
                  <FontItem>{item.departureTime}</FontItem>
                  <FontItem>
                    <ArrowRightAltIcon />
                  </FontItem>
                  <FontItem>{item.arrivalTime}</FontItem>
                </Stack>
                <Stack></Stack>
              </Stack>
              <Divider orientation="vertical" flexItem />
              <Stack>
                <Tooltip title="Max 20KG">
                  <IconBagasi />
                </Tooltip>
              </Stack>
              <Divider orientation="vertical" flexItem />
              <Stack style={{ justifyContent: "center" }}>
                <Button
                  size="small"
                  variant="contained"
                  style={{ marginRight: 20, borderRadius: 10 }}
                  onClick={(e) => {
                    e.preventDefault();
                    navigate(`/inputdata/${item.id}`);
                  }}
                >
                  Choose
                </Button>
              </Stack>
            </Stack>
            <Divider />
          </CardOrder>
        );
      })}
      {!listflight?.data && <ItemNotFound />}
    </>
  );
}

export default ItemSearch;
