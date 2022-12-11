import { Box, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import Categories from "./Categories";

function Subcategory() {
  return (
    <Box>
      <SimpleGrid columns={10}>
        <Categories
          img="https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100"
          content={"Grocery"}
        />
        <Categories
          img="https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100"
          content={"Mobiles"}
        />
        <Categories
          img="https://rukminim1.flixcart.com/flap/128/128/image/c12afc017e6f24cb.png?q=100"
          content={"Fashion"}
        />
        <Categories
          img="https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100"
          content={"Electronics"}
        />
        <Categories
          img="https://rukminim1.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100"
          content={"Home"}
        />
        <Categories
          img="https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100"
          content={"Appliances"}
        />
        <Categories
          img="https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100"
          content={"Travel"}
        />
        <Categories
          img="https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100"
          content={"Top Offers"}
        />
        <Categories
          img="https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100"
          content={"Beauty Toys"}
        />
        <Categories
          img="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/05d708653beff580.png?q=100"
          content={"Two Wheelers"}
        />
      </SimpleGrid>
      <hr />
    </Box>
  );
}

export default Subcategory;
