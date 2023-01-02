import React from "react";
import { BoxHeader, BoxContainer, PanelHead } from "../../Styled/MUI/HeaderStyle";

function Header() {
  return (
    <PanelHead>
      <BoxHeader>
        <BoxContainer>
          <h1 style={{ justifyContent: "center", textAlign: "center", marginTop: 150, marginBottom: 100 }}> ANDA MAU KE MANA HARI INI?</h1>
        </BoxContainer>
      </BoxHeader>
    </PanelHead>
  );
}

export default Header;
