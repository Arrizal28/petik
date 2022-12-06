import React from "react";
import { Carousel } from "antd";
import sample from "../../assets/images/sample4.jpg";
import sample1 from "../../assets/images/sample5.jpg";
import sample2 from "../../assets/images/sample6.jpg";
import sample3 from "../../assets/images/sample7.jpg";

const TopPanels = () => (
  <div>
    <Carousel autoplay style={{ justifyContent: "center", margin: "auto", maxWidth: 1300 }}>
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
export default TopPanels;
