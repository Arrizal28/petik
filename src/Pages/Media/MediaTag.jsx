import * as React from "react";
import sample from "../../assets/images/promo/e.webp";
import { BoxPanel } from "../../Styled/MUI/HeaderStyle";
import { Row, Col } from "react-bootstrap";
import { FontPromo, HeadPromo } from "../../Styled/ComponentUI/Styles";

export default function MediaTag() {
  return (
    <>
      <BoxPanel style={{ marginBottom: 15 }}>
        <Row style={{ justifyContent: "center", textAlign: "center", display: "flex" }}>
          <Col style={{ justifyContent: "center", textAlign: "center", display: "flex" }}>
            <img src={sample} width="300px" alt="tag" />
          </Col>
          <Col style={{ justifyContent: "center", textAlign: "justify", marginTop: 10, marginRight: 10 }}>
            <HeadPromo>Dapatkan Harga Tiket Pesawat dan Hotel Murah ke Destinasi Favorit Anda dengan Partner Promo Kami</HeadPromo>
            <FontPromo>
              Ingin pesan tiket pesawat murah? Kini hanya dengan satu kali sentuhan jari, Anda bisa langsung pesan tiket pesawat murah di petik.com. petik.com adalah pionir online travel agent (OTA) di Indonesia yang selalu memberikan
              inovasi handal untuk mempermudah Anda ketika pesan tiket pesawat online. Cari tiket pesawat online di petik.com ke ribuan destinasi penerbangan domestik maupun internasional di seluruh dunia. Anda bisa cek harga tiket pesawat
              online di petik.com, sekaligus membandingkan jadwal pesawat secara langsung via online. Beli tiket online di tiket.com juga memberikan keuntungan lebih. Setiap kali melakukan transaksi, Anda bisa mendapatkan tiket Points yang
              setelah terkumpul bisa ditukar dengan hadiah atau diskon istimewa dari petik.com
            </FontPromo>
          </Col>
        </Row>
      </BoxPanel>
    </>
  );
}
