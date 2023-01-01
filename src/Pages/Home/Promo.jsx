import React from "react";
import { Carousel } from "antd";
import sample from "../../assets/images/promo/a.webp";
import sample1 from "../../assets/images/promo/b.webp";
import sample2 from "../../assets/images/promo/c.webp";
import sample3 from "../../assets/images/promo/d.webp";

const Promo = () => (
  <div>
    <Carousel autoplay style={{ justifyContent: "center", margin: "auto", maxWidth: 300 }}>
      <div>
        <img src={sample} alt="terbang" width="100%" height="150px" />
      </div>
      <div>
        <img src={sample1} alt="terbang" Width="100%" height="150px" />
      </div>
      <div>
        <img src={sample2} alt="terbang" width="100%" height="150px" />
      </div>
      <div>
        <img src={sample3} alt="terbang" width="100%" height="150px" />
      </div>
    </Carousel>
  </div>
);
export default Promo;
