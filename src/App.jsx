import React from "react";
import { Route, Routes } from "react-router-dom";
import Products from "./components/Products";
import Nav from "./components/Nav";
import Cart from "./components/Cart";

const App = () => {
  return (
    <div>
      <Nav/>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
    </div>
  );
};

export default App;
