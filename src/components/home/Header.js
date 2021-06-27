import React from "react";
import { HeaderBox, Box, Heading, Text, Button } from "./Header.style";

export default function Header() {
  return (
    <HeaderBox>
      <Heading>
        Hover Bottom Of The Page For Animation MacbookAir Toolbar
      </Heading>
      <Box>
        {["Left", "Right", "Top", "Bottom", "center"].map((size, index) => {
          return (
            <Button
              onClick={() =>
                alert("I am working on it.... and HOVER OF BOTTOM OF THE PAGE")
              }
              key={index}>
              <Text>{size}</Text>
            </Button>
          );
        })}
      </Box>
    </HeaderBox>
  );
}
