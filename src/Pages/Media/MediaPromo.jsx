import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import sample from "../../assets/images/promo/d.webp";
import sample1 from "../../assets/images/promo/c.webp";
import sample2 from "../../assets/images/promo/b.webp";
import { BoxPanel } from "../../Styled/MUI/HeaderStyle";
import { FontPromo, HeadPromo } from "../../Styled/ComponentUI/Styles";
import { Row } from "react-bootstrap";

export default function MediaPromo() {
  return (
    <>
      <BoxPanel style={{ marginTop: 20 }}>
        <HeadPromo>Dapatkan Harga Tiket Pesawat dan Hotel Murah ke Destinasi Favorit Anda dengan Partner Promo Kami</HeadPromo>
      </BoxPanel>
      <BoxPanel style={{ marginBottom: 15 }}>
        <Row style={{ justifyContent: "center", textAlign: "left", display: "flex" }}>
          <Card sx={{ maxWidth: 345, margin: 2 }}>
            <CardMedia sx={{ height: 140 }} image={sample} title="green iguana" />
            <CardContent>
              <HeadPromo gutterBottom component="div">
                Hotel Promo
              </HeadPromo>
              <FontPromo color="text.secondary">Kami menyediakan tiket pesawat murah dengan banyak pilihan maskapai. </FontPromo>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>

          <Card sx={{ maxWidth: 345, margin: 2 }}>
            <CardMedia sx={{ height: 140 }} image={sample1} title="green iguana" />
            <CardContent>
              <HeadPromo gutterBottom component="div">
                Pesawat Promo
              </HeadPromo>
              <FontPromo color="text.secondary">Kami menyediakan tiket pesawat murah dengan banyak pilihan maskapai. </FontPromo>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>

          <Card sx={{ maxWidth: 345, margin: 2 }}>
            <CardMedia sx={{ height: 140 }} image={sample2} title="green iguana" />
            <CardContent>
              <HeadPromo gutterBottom component="div">
                Vila Promo
              </HeadPromo>
              <FontPromo color="text.secondary">Kami menyediakan tiket pesawat murah dengan banyak pilihan maskapai. </FontPromo>
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
