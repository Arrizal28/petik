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
      <BoxPanel>
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
              <FontPromo color="text.secondary">
                Kami menyediakan tiket pesawat murah dengan banyak pilihan maskapai dan tiket.com juga merupakan website dengan maskapai penerbangan terbanyak di Indonesia dan dunia. Dengan metode pembayaran sistem online terlengkap yang
                aman, lengkap, dan mudah kami pun dapat memberikan konfirmasi secara real time. Tiket yang sudah Anda pesan dapat langsung dikirimkan melalui e-mail dan SMS.
              </FontPromo>
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
              <FontPromo color="text.secondary">
                Kami menyediakan tiket pesawat murah dengan banyak pilihan maskapai dan tiket.com juga merupakan website dengan maskapai penerbangan terbanyak di Indonesia dan dunia. Dengan metode pembayaran sistem online terlengkap yang
                aman, lengkap, dan mudah kami pun dapat memberikan konfirmasi secara real time. Tiket yang sudah Anda pesan dapat langsung dikirimkan melalui e-mail dan SMS.
              </FontPromo>
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
              <FontPromo color="text.secondary">
                Kami menyediakan tiket pesawat murah dengan banyak pilihan maskapai dan tiket.com juga merupakan website dengan maskapai penerbangan terbanyak di Indonesia dan dunia. Dengan metode pembayaran sistem online terlengkap yang
                aman, lengkap, dan mudah kami pun dapat memberikan konfirmasi secara real time. Tiket yang sudah Anda pesan dapat langsung dikirimkan melalui e-mail dan SMS.
              </FontPromo>
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
