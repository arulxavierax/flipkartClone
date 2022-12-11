import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";

function Categories({ img, content }) {
  return (
    <Box justifyContent={"center"}>
      <Image
        width={["50%", "50%", "50%"]}
        margin="auto"
        display={"block"}
        src={img}
      />
      <Text fontSize={["xs", "sm", "sm"]} textAlign={"center"}>
        {content}
      </Text>
    </Box>
  );
}

export default Categories;
