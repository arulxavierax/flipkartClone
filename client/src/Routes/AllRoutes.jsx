import React from "react";
import { Route, Routes } from "react-router-dom";
import Favourite from "./Favourite";
import Home from "./Home";
import Products from "./Products";
import SingleProduct from "./SingleProduct";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<SingleProduct />} />
      <Route path="/favourite" element={<Favourite />} />
    </Routes>
  );
}

export default AllRoutes;
