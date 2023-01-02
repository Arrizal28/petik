import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import sample from "../../assets/images/destinasi/paris.jpg";
import sample1 from "../../assets/images/destinasi/bukit.jpg";
import sample2 from "../../assets/images/destinasi/bali.jpg";
import sample3 from "../../assets/images/destinasi/padang.jpg";
import sample4 from "../../assets/images/destinasi/Rajam.jpg";
import sample5 from "../../assets/images/destinasi/london.jpg";
import { BoxPanel } from "../../Styled/MUI/HeaderStyle";
import { FontPromo, HeadPromo } from "../../Styled/ComponentUI/Styles";
import { Row } from "react-bootstrap";
import { Links } from "../../Styled/MUI/TransactionStyle";

export default function Destinasi() {
  return (
    <>
      <BoxPanel style={{ marginTop: 20 }}>
        <HeadPromo>Dapatkan Harga Tiket Pesawat Murah ke Destinasi Favorit Anda</HeadPromo>
      </BoxPanel>
      <BoxPanel style={{ marginBottom: 15 }}>
        <Row style={{ justifyContent: "center", textAlign: "left", display: "flex" }}>
          <Card sx={{ maxWidth: 345, margin: 2 }}>
            <CardMedia sx={{ height: 140 }} image={sample} title="destinasi" />
            <CardContent>
              <HeadPromo gutterBottom component="div">
                Paris
              </HeadPromo>
              <FontPromo color="text.secondary">Kami menyediakan tiket pesawat murah dengan banyak pilihan maskapai. </FontPromo>
            </CardContent>
            <CardActions>
              <Links to="/searchflight">
                <Button size="small">Search Ticket</Button>
              </Links>
            </CardActions>
          </Card>

          <Card sx={{ maxWidth: 345, margin: 2 }}>
            <CardMedia sx={{ height: 140 }} image={sample1} title="destinasi" />
            <CardContent>
              <HeadPromo gutterBottom component="div">
                Bukit Tinggi
              </HeadPromo>
              <FontPromo color="text.secondary">Kami menyediakan tiket pesawat murah dengan banyak pilihan maskapai. </FontPromo>
            </CardContent>
            <CardActions>
              <Links to="/searchflight">
                <Button size="small">Search Ticket</Button>
              </Links>
            </CardActions>
          </Card>

          <Card sx={{ maxWidth: 345, margin: 2 }}>
            <CardMedia sx={{ height: 140 }} image={sample2} title="destinasi" />
            <CardContent>
              <HeadPromo gutterBottom component="div">
                Bali
              </HeadPromo>
              <FontPromo color="text.secondary">Kami menyediakan tiket pesawat murah dengan banyak pilihan maskapai. </FontPromo>
            </CardContent>
            <CardActions>
              <Links to="/searchflight">
                <Button size="small">Search Ticket</Button>
              </Links>
            </CardActions>
          </Card>

          <Card sx={{ maxWidth: 345, margin: 2 }}>
            <CardMedia sx={{ height: 140 }} image={sample3} title="destinasi" />
            <CardContent>
              <HeadPromo gutterBottom component="div">
                Padang
              </HeadPromo>
              <FontPromo color="text.secondary">Kami menyediakan tiket pesawat murah dengan banyak pilihan maskapai. </FontPromo>
            </CardContent>
            <CardActions>
              <Links to="/searchflight">
                <Button size="small">Search Ticket</Button>
              </Links>
            </CardActions>
          </Card>

          <Card sx={{ maxWidth: 345, margin: 2 }}>
            <CardMedia sx={{ height: 140 }} image={sample4} title="destinasi" />
            <CardContent>
              <HeadPromo gutterBottom component="div">
                Raja Ampat
              </HeadPromo>
              <FontPromo color="text.secondary">Kami menyediakan tiket pesawat murah dengan banyak pilihan maskapai. </FontPromo>
            </CardContent>
            <CardActions>
              <Links to="/searchflight">
                <Button size="small">Search Ticket</Button>
              </Links>
            </CardActions>
          </Card>

          <Card sx={{ maxWidth: 345, margin: 2 }}>
            <CardMedia sx={{ height: 140 }} image={sample5} title="destinasi" />
            <CardContent>
              <HeadPromo gutterBottom component="div">
                London
              </HeadPromo>
              <FontPromo color="text.secondary">Kami menyediakan tiket pesawat murah dengan banyak pilihan maskapai. </FontPromo>
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
