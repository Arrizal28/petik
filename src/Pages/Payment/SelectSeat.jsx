import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { FormPayment } from "../../Styled/MUI/PaymentStyle";
import { Row } from "react-bootstrap";
import { useSelector } from "react-redux";
export default function SelectSeat({
  totalSeatNumber,
  requestData,
  setRequestData,
  seatNumber,
}) {
  const [seat, setSeat] = useState("");
  const { seatr } = useSelector((state) => state.booking);

  // const handleChange = (event) => {
  //   setSeat(event.target.value);
  // };

  const SeatA = [
    "A01",
    "A02",
    "A03",
    "A04",
    "A05",
    "A06",
    "A07",
    "A08",
    "A09",
    "A10",
    "A11",
    "A12",
    "A13",
    "A14",
    "A15",
    "A16",
    "A17",
    "A18",
    "A19",
  ];

  const seatB = ["A01", "A02", "A03"];

  function filterArrays(SeatA, seatB) {
    return SeatA.filter(function (value) {
      return seatB.indexOf(value) === -1;
    });
  }
  let uniqueValues = filterArrays(SeatA, seatB);

  return (
    <div>
      <Row style={{ justifyContent: "center", minWidth: 500 }}>
        <FormPayment
          size="small"
          label="Seat A"
          style={{ justifyContent: "center" }}
        >
          <Select
            // value={seat}
            // onChange={(e) => setSeat(e.target.value)}
            value={requestData?.seatNumber}
            onChange={(e) => {
              totalSeatNumber = requestData?.seatNumber;
              totalSeatNumber = [...totalSeatNumber, e.target.value];
              setRequestData({
                ...requestData,
                seatNumber: totalSeatNumber,
              });
            }}
            displayEmpty
          >
            <MenuItem disabled value="">
              <em>Seat A</em>
            </MenuItem>
            {uniqueValues.map((name) => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormPayment>
      </Row>
    </div>
  );
}
