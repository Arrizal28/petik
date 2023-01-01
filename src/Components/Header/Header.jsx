import React from "react";
import {
  BoxHeader,
  BoxContainer,
  BoxPanel,
} from "../../Styled/MUI/HeaderStyle";

function Header() {
  return (
    <BoxPanel>
      <BoxHeader className="heade">
        <BoxContainer className="headerContaine"></BoxContainer>
      </BoxHeader>
    </BoxPanel>
  );
}

export default Header;
