import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "../Components/Footer";
import Cart from "./Cart";
import Favourite from "./Favourite";
import Home from "./Home";
import Orders from "./Orders";
import Products from "./Products";
import SingleProduct from "./SingleProduct";

function AllRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Home />
            <Footer />
          </>
        }
      />
      <Route
        path="/products"
        element={
          <>
            <Products />
            <Footer />
          </>
        }
      />
      <Route
        path="/products/:id"
        element={
          <>
            <SingleProduct />
            <Footer />
          </>
        }
      />
      <Route
        path="/favourite"
        element={
          <>
            <Favourite />
            <Footer />
          </>
        }
      />
      <Route path="/cart" element={<Cart />} />
      <Route path="/orders" element={<Orders />} />
    </Routes>
  );
}

export default AllRoutes;
