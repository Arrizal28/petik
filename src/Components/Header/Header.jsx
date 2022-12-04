import React from "react";
import { BoxHeader, BoxContainer, BoxPanel } from "../../Styled/Material";

function Header() {
  return (
    <BoxPanel>
      <BoxHeader className="heade">
        <BoxContainer className="headerContaine">
          <h1 className="headertitle"> Testing </h1>
          <p> coba coba </p>
        </BoxContainer>
      </BoxHeader>
    </BoxPanel>
  );
}

export default Header;
