import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import sample from "../../assets/images/destinasi/paris.jpg";
import sample1 from "../../assets/images/destinasi/ny.jpeg";
import sample5 from "../../assets/images/destinasi/london.jpg";
import { BoxPanel } from "../../Styled/MUI/HeaderStyle";
import { FontPromo, HeadPromo } from "../../Styled/ComponentUI/Styles";
import { Row } from "react-bootstrap";
import { Links } from "../../Styled/MUI/TransactionStyle";

export default function Foreign() {
  return (
    <>
      <BoxPanel style={{ marginTop: 20, textAlign: "center" }}>
        <HeadPromo>Foreign Destination Recommendations</HeadPromo>
      </BoxPanel>
      <BoxPanel style={{ marginBottom: 15 }}>
        <Row style={{ justifyContent: "center", textAlign: "left", display: "flex" }}>
          <Card elevation={2} sx={{ maxWidth: 345, margin: 2 }}>
            <CardMedia sx={{ height: 140 }} image={sample} title="destinasi" />
            <CardContent>
              <HeadPromo gutterBottom component="div">
                Paris
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
            <CardMedia sx={{ height: 140 }} image={sample1} title="destinasi" />
            <CardContent>
              <HeadPromo gutterBottom component="div">
                New York
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
            <CardMedia sx={{ height: 140 }} image={sample5} title="destinasi" />
            <CardContent>
              <HeadPromo gutterBottom component="div">
                London
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
