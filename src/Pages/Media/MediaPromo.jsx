import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { BoxPanel } from "../../Styled/MUI/HeaderStyle";
import { HeadPromo } from "../../Styled/ComponentUI/Styles";
import { Row } from "react-bootstrap";

export default function MediaPromo() {
  return (
    <>
      <BoxPanel style={{ marginTop: 20 }}>
        <HeadPromo>Discount Promotions from Airlines</HeadPromo>
      </BoxPanel>
      <BoxPanel style={{ marginBottom: 15 }}>
        <Row style={{ justifyContent: "center", textAlign: "left", display: "flex" }}>
          <Card elevation={2} sx={{ maxWidth: 345, margin: 2 }}>
            <img width="300px" src="https://hangnadim.bpbatam.go.id/wp-content/uploads/2021/05/Garuda-Indonesia-1.png" alt="garuda" />
            <CardContent>
              <HeadPromo gutterBottom component="div">
                Discount $200
              </HeadPromo>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>

          <Card elevation={2} sx={{ maxWidth: 345, margin: 2 }}>
            <img width="300px" src="https://hangnadim.bpbatam.go.id/wp-content/uploads/2021/05/Sriwijaya-Air-1.png" alt="img" />
            <CardContent>
              <HeadPromo gutterBottom component="div">
                Discount $100
              </HeadPromo>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>

          <Card elevation={2} sx={{ maxWidth: 345, margin: 2 }}>
            <img width="300px" src="https://hangnadim.bpbatam.go.id/wp-content/uploads/2021/05/Wings-Air-1.png" alt="img" />
            <CardContent>
              <HeadPromo gutterBottom component="div">
                Discount $150
              </HeadPromo>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Row>
      </BoxPanel>
    </>
  );
}
