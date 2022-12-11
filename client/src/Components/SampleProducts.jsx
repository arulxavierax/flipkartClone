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
    getSampleProducts(
      "https://flipkartbackend-production.up.railway.app/products/category?filter=smartphones"
    ).then((res) => {
      setSmartphones(res.data);
    });
    getSampleProducts(
      "https://flipkartbackend-production.up.railway.app/products/category?filter=laptops"
    ).then((res) => {
      setLaptops(res.data);
    });
    getSampleProducts(
      "https://flipkartbackend-production.up.railway.app/products/category?filter=fragrances"
    ).then((res) => {
      setFragrances(res.data);
    });
    getSampleProducts(
      "https://flipkartbackend-production.up.railway.app/products/category?filter=skincare"
    ).then((res) => {
      setSkincare(res.data);
    });
    getSampleProducts(
      "https://flipkartbackend-production.up.railway.app/products/category?filter=groceries"
    ).then((res) => {
      setGroceries(res.data);
    });
    getSampleProducts(
      "https://flipkartbackend-production.up.railway.app/products/category?filter=home-decoration"
    ).then((res) => {
      setHomedecore(res.data);
    });
    getSampleProducts(
      "https://flipkartbackend-production.up.railway.app/products/category?filter=furniture"
    ).then((res) => {
      setFurniture(res.data);
    });
    getSampleProducts(
      "https://flipkartbackend-production.up.railway.app/products/category?filter=tops"
    ).then((res) => {
      setTop(res.data);
    });
    getSampleProducts(
      "https://flipkartbackend-production.up.railway.app/products/category?filter=womens-dresses"
    ).then((res) => {
      setWomenDress(res.data);
    });
    getSampleProducts(
      "https://flipkartbackend-production.up.railway.app/products/category?filter=mens-shirts"
    ).then((res) => {
      setMenShirts(res.data);
    });
    getSampleProducts(
      "https://flipkartbackend-production.up.railway.app/products/category?filter=mens-shoes"
    ).then((res) => {
      setMenShoes(res.data);
    });
    getSampleProducts(
      "https://flipkartbackend-production.up.railway.app/products/category?filter=mens-watches"
    ).then((res) => {
      setMenWatches(res.data);
    });
    getSampleProducts(
      "https://flipkartbackend-production.up.railway.app/products/category?filter=womens-watches"
    ).then((res) => {
      setWomenWatches(res.data);
    });
    getSampleProducts(
      "https://flipkartbackend-production.up.railway.app/products/category?filter=womens-bags"
    ).then((res) => {
      setWomenBags(res.data);
    });
    getSampleProducts(
      "https://flipkartbackend-production.up.railway.app/products/category?filter=womens-jewellery"
    ).then((res) => {
      setWomenJewellery(res.data);
    });
    getSampleProducts(
      "https://flipkartbackend-production.up.railway.app/products/category?filter=sunglasses"
    ).then((res) => {
      setSunglasses(res.data);
    });
    getSampleProducts(
      "https://flipkartbackend-production.up.railway.app/products/category?filter=automotive"
    ).then((res) => {
      setAutomotive(res.data);
    });
    getSampleProducts(
      "https://flipkartbackend-production.up.railway.app/products/category?filter=motorcycle"
    ).then((res) => {
      setMotor(res.data);
    });
    getSampleProducts(
      "https://flipkartbackend-production.up.railway.app/products/category?filter=lighting"
    ).then((res) => {
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
