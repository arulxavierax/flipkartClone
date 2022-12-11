import {
  Box,
  Button,
  Center,
  Grid,
  GridItem,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

function ProductsSample({ catergory, data }) {
  return (
    <Box marginBottom={10}>
      <Grid
        justifyContent={"center"}
        templateColumns={["repeat(1, 1fr)", "repeat(2,1fr)", "repeat(4, 1fr)"]}
        gap={3}
      >
        <GridItem>
          <Center h="100%">
            <Box>
              <Text fontSize={"30px"} fontWeight={400}>
                {catergory}
              </Text>
              <Box mt={5} align="center">
                <Button colorScheme="blue">
                  <Link to={"/products"}>View All</Link>{" "}
                </Button>
              </Box>
            </Box>
          </Center>
        </GridItem>
        {data?.map((e) => (
          <Link key={e._id} to={`/products/${e._id}`}>
            <GridItem >
              <Image
                margin={"auto"}
                boxSize="80%"
                fallbackSrc={e.thumbnail}
                objectFit={"contain"}
              />
              <Text display={"block"} align={"center"} fontSize={"md"} as="b">
                {e.title}
              </Text>
            </GridItem>
          </Link>
        ))}
      </Grid>
    </Box>
  );
}

export default ProductsSample;
