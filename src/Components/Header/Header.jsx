import React from "react";
import { BoxHeader, BoxContainer, PanelHead } from "../../Styled/MUI/HeaderStyle";

function Header() {
  return (
    <PanelHead>
      <BoxHeader>
        <BoxContainer>
          <h1 style={{ justifyContent: "center", textAlign: "center", marginTop: 150, marginBottom: 100 }}> Where do you want to go?</h1>
        </BoxContainer>
      </BoxHeader>
    </PanelHead>
  );
}

export default Header;
