import { Box, Center, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";
import ProductsSample from "./ProductsSample";
import { getLaptops, getSampleProducts } from "./api";

function SampleProducts() {
  const [smartphones, setSmartphones] = useState([]);
  const [laptops, setLaptops] = useState([]);
  const [fragrances, setFragrances] = useState([]);
  const [skincare, setSkincare] = useState([]);
  const [groceries, setGroceries] = useState([]);
  const [homedecore, setHomedecore] = useState([]);
  const [furniture, setFurniture] = useState([]);
  const [top, setTop] = useState([]);
  const [womenDress, setWomenDress] = useState([]);
  const [menShirts, setMenShirts] = useState([]);
  const [menShoes, setMenShoes] = useState([]);
  const [menWatches, setMenWatches] = useState([]);
  const [womenWatches, setWomenWatches] = useState([]);
  const [womenBags, setWomenBags] = useState([]);
  const [womenJewellery, setWomenJewellery] = useState([]);
  const [sunglasses, setSunglasses] = useState([]);
  const [automotive, setAutomotive] = useState([]);
  const [motor, setMotor] = useState([]);
  const [light, setLight] = useState([]);

  useEffect(() => {
    getSampleProducts("smartphones").then((res) => {
      setSmartphones(res.data);
    });
    getSampleProducts("laptops").then((res) => {
      setLaptops(res.data);
    });
    getSampleProducts("fragrances").then((res) => {
      setFragrances(res.data);
    });
    getSampleProducts("skincare").then((res) => {
      setSkincare(res.data);
    });
    getSampleProducts("groceries").then((res) => {
      setGroceries(res.data);
    });
    getSampleProducts("home-decoration").then((res) => {
      setHomedecore(res.data);
    });
    getSampleProducts("furniture").then((res) => {
      setFurniture(res.data);
    });
    getSampleProducts("tops").then((res) => {
      setTop(res.data);
    });
    getSampleProducts("womens-dresses").then((res) => {
      setWomenDress(res.data);
    });
    getSampleProducts("mens-shirts").then((res) => {
      setMenShirts(res.data);
    });
    getSampleProducts("mens-shoes").then((res) => {
      setMenShoes(res.data);
    });
    getSampleProducts("mens-watches").then((res) => {
      setMenWatches(res.data);
    });
    getSampleProducts("womens-watches").then((res) => {
      setWomenWatches(res.data);
    });
    getSampleProducts("womens-bags").then((res) => {
      setWomenBags(res.data);
    });
    getSampleProducts("womens-jewellery").then((res) => {
      setWomenJewellery(res.data);
    });
    getSampleProducts("sunglasses").then((res) => {
      setSunglasses(res.data);
    });
    getSampleProducts("automotive").then((res) => {
      setAutomotive(res.data);
    });
    getSampleProducts("motorcycle").then((res) => {
      setMotor(res.data);
    });
    getSampleProducts("lighting").then((res) => {
      setLight(res.data);
    });
  }, []);
  return (
    <Box marginTop={10}>
      <ProductsSample catergory={"Smartphones"} data={smartphones} />
      <ProductsSample catergory={"Laptops"} data={laptops} />
      <ProductsSample catergory={"Fragrances"} data={fragrances} />
      <ProductsSample catergory={"Skincare"} data={skincare} />
      <ProductsSample catergory={"Groceries"} data={groceries} />
      <ProductsSample catergory={"Home Decoration"} data={homedecore} />
      <ProductsSample catergory={"Furniture"} data={furniture} />
      <ProductsSample catergory={"Tops"} data={top} />
      <ProductsSample catergory={"Womens Dresses"} data={womenDress} />
      <ProductsSample catergory={"Mens Shirts"} data={menShirts} />
      <ProductsSample catergory={"Mens Shoes"} data={menShoes} />
      <ProductsSample catergory={"Mens Watches"} data={menWatches} />
      <ProductsSample catergory={"Womens Watches"} data={womenWatches} />
      <ProductsSample catergory={"Womens Bags"} data={womenBags} />
      <ProductsSample catergory={"Womens Jewellery"} data={womenJewellery} />
      <ProductsSample catergory={"Sunglasses"} data={sunglasses} />
      <ProductsSample catergory={"Automotives"} data={automotive} />
      <ProductsSample catergory={"Motorcycle"} data={motor} />
      <ProductsSample catergory={"Lighting"} data={light} />
    </Box>
  );
}

export default SampleProducts;
