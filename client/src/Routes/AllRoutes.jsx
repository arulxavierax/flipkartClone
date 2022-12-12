import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Products from "./Products";
import SingleProduct from "./SingleProduct";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<SingleProduct />} />
    </Routes>
  );
}

export default AllRoutes;
