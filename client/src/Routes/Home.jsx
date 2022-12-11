import { Box } from "@chakra-ui/react";
import React from "react";
import ImageCarousel from "../Components/ImageCarousel";
import { SliderData } from "../Components/Imagedata";
import SampleProducts from "../Components/SampleProducts";
import Subcategory from "../Components/Subcategory";

function Home() {
  return (
    <Box paddingTop={75}>
      <Subcategory />
      <ImageCarousel slider={SliderData} />
      <SampleProducts />
    </Box>
  );
}

export default Home;
