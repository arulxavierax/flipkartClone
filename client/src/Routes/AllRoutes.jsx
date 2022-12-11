import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<h1>Products</h1>} />
      <Route path="/products/:id" element={<h1>Single Products</h1>} />
    </Routes>
  );
}

export default AllRoutes;
