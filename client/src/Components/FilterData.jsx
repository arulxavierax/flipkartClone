import { Box, Select } from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getDefaultFilteredData,
  getFilteredData,
} from "../Store/products/products.action";

function FilterData() {
  const dispatch = useDispatch();
  const { loading, error, data, filteredData } = useSelector(
    (store) => store.products
  );
  const handleChange = (e) => {
    const value = e.target.value;
    if (value === "default") {
      dispatch(getDefaultFilteredData(data));
    } else {
      dispatch(getFilteredData(data, value));
    }
  };

  return (
    <Box>
      <Select
        variant={"flushed"}
        fontWeight={"bold"}
        size={"lg"}
        onChange={handleChange}
      >
        <option value="default">Search by Category</option>
        <option value="smartphones">Smartphones</option>
        <option value="laptops">Laptops</option>
        <option value="fragrances">Fragrances</option>
        <option value="skincare">Skincare</option>
        <option value="groceries">Groceries</option>
        <option value="home-decoration">Home Decoration</option>
        <option value="furniture">Furniture</option>
        <option value="tops">Tops</option>
        <option value="womens-dresses">Womens Dresses</option>
        <option value="mens-shirts">Mens Shirts</option>
        <option value="mens-shoes">Mens Shoes</option>
        <option value="mens-watches">Mens Watches</option>
        <option value="womens-watches">Womens Watches</option>
        <option value="womens-jewellery">Womens Jewellery</option>
        <option value="sunglasses">Sunglasses</option>
        <option value="automotive">Automotives</option>
        <option value="motorcycle">Motorcycle</option>
        <option value="lighting">Lighting</option>
      </Select>
    </Box>
  );
}

export default FilterData;
