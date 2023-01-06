import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import sample2 from "../../assets/images/destinasi/bali.jpg";
import sample3 from "../../assets/images/destinasi/padang.jpg";
import sample4 from "../../assets/images/destinasi/Rajam.jpg";
import { BoxPanel } from "../../Styled/MUI/HeaderStyle";
import { FontPromo, HeadPromo } from "../../Styled/ComponentUI/Styles";
import { Row } from "react-bootstrap";
import { Links } from "../../Styled/MUI/TransactionStyle";

export default function Domestics() {
  return (
    <>
      <BoxPanel style={{ marginTop: 20, textAlign: "center" }}>
        <HeadPromo>Domestic Destination Recommendations</HeadPromo>
      </BoxPanel>
      <BoxPanel style={{ marginBottom: 15 }}>
        <Row style={{ justifyContent: "center", textAlign: "left", display: "flex" }}>
          <Card elevation={2} sx={{ maxWidth: 345, margin: 2 }}>
            <CardMedia sx={{ height: 140 }} image={sample2} title="destinasi" />
            <CardContent>
              <HeadPromo gutterBottom component="div">
                Bali
              </HeadPromo>
              <FontPromo color="text.secondary">We provide cheap airline tickets with many choices of airlines.</FontPromo>
            </CardContent>
            <CardActions>
              <Links to="/searchflight">
                <Button size="small">Search Ticket</Button>
              </Links>
            </CardActions>
          </Card>

          <Card elevation={2} sx={{ maxWidth: 345, margin: 2 }}>
            <CardMedia sx={{ height: 140 }} image={sample3} title="destinasi" />
            <CardContent>
              <HeadPromo gutterBottom component="div">
                Padang
              </HeadPromo>
              <FontPromo color="text.secondary">We provide cheap airline tickets with many choices of airlines.</FontPromo>
            </CardContent>
            <CardActions>
              <Links to="/searchflight">
                <Button size="small">Search Ticket</Button>
              </Links>
            </CardActions>
          </Card>

          <Card elevation={2} sx={{ maxWidth: 345, margin: 2 }}>
            <CardMedia sx={{ height: 140 }} image={sample4} title="destinasi" />
            <CardContent>
              <HeadPromo gutterBottom component="div">
                Raja Ampat
              </HeadPromo>
              <FontPromo color="text.secondary">We provide cheap airline tickets with many choices of airlines.</FontPromo>
            </CardContent>
            <CardActions>
              <Links to="/searchflight">
                <Button size="small">Search Ticket</Button>
              </Links>
            </CardActions>
          </Card>
        </Row>
      </BoxPanel>
    </>
  );
}
