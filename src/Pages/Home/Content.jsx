import React from "react";
import PanelSearch from "../../Components/Panel/PanelSearch";
import { BoxContainer, BoxCont, BoxHead } from "../../Styled/MUI/HeaderStyle";

function Content() {
  return (
    <BoxCont>
      <BoxHead>
        <BoxContainer>
          <h1 style={{ justifyContent: "center", textAlign: "center", marginTop: 150, marginBottom: 150 }}>Where do you want to go?</h1>
          <PanelSearch />
        </BoxContainer>
      </BoxHead>
    </BoxCont>
  );
}

export default Content;
