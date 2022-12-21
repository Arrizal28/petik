import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { FieldPayment, FormPayment } from "../../Styled/MUI/PaymentStyle";
import { Row } from "react-bootstrap";
import { TextName } from "../../Styled/ComponentUI/Styles";

export default function NumberSeat() {
  const [seat, setSeat] = useState("");

  const handleChange = (event) => {
    setSeat(event.target.value);
  };

  const SeatA = ["A01", "A02", "A03", "A04", "A05", "A06", "A07", "A08", "A09", "A10", "A11", "A12", "A13", "A14", "A15", "A16", "A17", "A18", "A19"];
  const SeatB = ["B01", "B02", "B03", "B04", "B05", "B06", "B07", "B08", "B09", "B10", "B11", "B12", "B13", "B14", "B15", "B16", "B17", "B18", "B19"];
  const SeatC = ["C01", "C02", "C03", "C04", "C05", "C06", "C07", "C08", "C09", "C10", "C11", "C12", "C13", "C14", "C15", "C16", "C17", "C18", "C19"];
  const SeatD = ["D01", "D02", "D03", "D04", "D05", "D06", "D07", "D08", "D09", "D10", "D11", "D12", "D13", "D14", "D15", "D16", "D17", "D18", "D19"];

  return (
    <div>
      <FieldPayment disabled size="small" value={seat} onChange={handleChange} />
      <Row style={{ justifyContent: "center", minWidth: 500 }}>
        <FormPayment size="small" label="Seat A" style={{ justifyContent: "center" }}>
          <TextName>Seat A</TextName>
          <Select value={seat} onChange={(e) => setSeat(e.target.value)} displayEmpty>
            <MenuItem disabled value="">
              <em>Seat A</em>
            </MenuItem>
            {SeatA.map((name) => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormPayment>

        <FormPayment size="small">
          <TextName>Seat B</TextName>
          <Select value={seat} onChange={(e) => setSeat(e.target.value)} displayEmpty>
            <MenuItem disabled value="">
              <em>Seat B</em>
            </MenuItem>
            {SeatB.map((name) => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormPayment>

        <FormPayment size="small">
          <TextName>Seat C</TextName>
          <Select value={seat} onChange={handleChange} displayEmpty>
            <MenuItem disabled value="">
              <em>Seat C</em>
            </MenuItem>
            {SeatC.map((name) => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormPayment>

        <FormPayment size="small">
          <TextName>Seat D</TextName>
          <Select value={seat} onChange={handleChange} displayEmpty>
            <MenuItem disabled value="">
              <em>Seat D</em>
            </MenuItem>
            {SeatD.map((name) => (
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
