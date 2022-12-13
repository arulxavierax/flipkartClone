import { Box } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import ImageCarousel from "../Components/ImageCarousel";
import { SliderData } from "../Components/Imagedata";
import SampleProducts from "../Components/SampleProducts";
import Subcategory from "../Components/Subcategory";

function Home() {
  document.title =
    "Online Shopping Site for Mobiles, Electronics, Furnitures, Grocery";

  return (
    <Box paddingTop={75}>
      <Subcategory />
      <ImageCarousel slider={SliderData} />
      <SampleProducts />
    </Box>
  );
}

export default Home;
