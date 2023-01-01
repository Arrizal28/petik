import * as React from "react";
import { BoxPanel } from "../../Styled/MUI/HeaderStyle";
import { HeadPromo } from "../../Styled/ComponentUI/Styles";
import { Row } from "react-bootstrap";
import { Divider, Table, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

export default function MediaPartner() {
  return (
    <>
      <BoxPanel>
        <HeadPromo>Airlines Partnert</HeadPromo>
        <Divider />
      </BoxPanel>

      <BoxPanel style={{ marginBottom: 15 }}>
        <Row
          style={{
            margin: "auto",
            maxWidth: 1024,
            textAlign: "center",
            justifyContent: "Center",
          }}
        >
          <Divider />
          <TableContainer>
            <Table sx={{ minWidth: 1024 }} size="small" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell>
                    <img width="150px" src="https://hangnadim.bpbatam.go.id/wp-content/uploads/2021/05/Garuda-Indonesia-1.png" alt="img" />
                  </TableCell>
                  <TableCell>
                    <img width="150px" src="https://hangnadim.bpbatam.go.id/wp-content/uploads/2021/05/Lion-Air-1.png" alt="green img" />
                  </TableCell>
                  <TableCell>
                    <img width="150px" src="https://hangnadim.bpbatam.go.id/wp-content/uploads/2021/05/Batik-Air-1.png" alt="img" />
                  </TableCell>
                  <TableCell>
                    <img width="150px" src="https://hangnadim.bpbatam.go.id/wp-content/uploads/2021/05/Citilink-1.png" alt="img" />
                  </TableCell>
                  <TableCell>
                    <img width="150px" src="https://hangnadim.bpbatam.go.id/wp-content/uploads/2021/05/Malindo-Air-1.png" alt="img" />
                  </TableCell>
                  <TableCell>
                    <img width="150px" src="https://hangnadim.bpbatam.go.id/wp-content/uploads/2021/05/Nam-Air-1.png" alt="img" />
                  </TableCell>
                  <TableCell>
                    <img width="150px" src="https://hangnadim.bpbatam.go.id/wp-content/uploads/2021/05/Sriwijaya-Air-1.png" alt="green img" />
                  </TableCell>
                  <TableCell>
                    <img width="150px" src="https://hangnadim.bpbatam.go.id/wp-content/uploads/2021/05/Susi-Air-1.png" alt="img" />
                  </TableCell>
                  <TableCell>
                    <img width="150px" src="https://hangnadim.bpbatam.go.id/wp-content/uploads/2021/05/Wings-Air-1.png" alt="img" />
                  </TableCell>
                </TableRow>
              </TableHead>
            </Table>
          </TableContainer>
        </Row>
      </BoxPanel>
    </>
  );
}
