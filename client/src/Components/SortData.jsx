import { Box, Select } from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSortedData } from "../Store/products/products.action";

function SortData() {
  const dispatch = useDispatch();
  const { filteredData } = useSelector((store) => store.products);
  const handleChange = (e) => {
    const value = e.target.value;
    if (value === "asc") {
      filteredData.sort((a, b) => {
        return a.price - b.price;
      });
    } else if (value === "desc") {
      filteredData.sort((a, b) => {
        return b.price - a.price;
      });
    } else if (value === "rating") {
      filteredData.sort((a, b) => {
        if (a.rating > b.rating) {
          return -1;
        } else if (a.rating < b.rating) {
          return 1;
        }
        return 0;
      });
    }
    let sortedArray = [...filteredData];
    dispatch(getSortedData(sortedArray));
  };

  return (
    <Box>
      <Select
        variant={"flushed"}
        size={"lg"}
        fontWeight={"bold"}
        onChange={handleChange}
        placeholder="Sorting"
      >
        <option value="asc">Price High to Low</option>
        <option value="desc">Price Low to High</option>
        <option value="rating">Sort by Rating</option>
      </Select>
    </Box>
  );
}

export default SortData;
