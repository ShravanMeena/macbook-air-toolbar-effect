import React from "react";
import { Wrapper, Nav } from "./BottomNavigation.style";

import Icon from "./Icon";

export default function BottomNavigation() {
  return (
    <Wrapper>
      <Nav>
        <Icon container={false} />
      </Nav>
    </Wrapper>
  );
}
