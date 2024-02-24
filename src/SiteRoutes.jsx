import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Record from "./pages/Record";
import Contact from "./pages/Contact";
import Faci from "./pages/Faci";
import Login from "./pages/Login";
import PagesNotFound from "./pages/PagesNotFound";
import { ProductLayout, Product } from "./products";

function SiteRoutes({ handleLogin, user }) {
  return (
    <Routes>
      <Route path="/" element={<Home user={user} />} />
      <Route path="/about" element={<About />} />
      <Route path="/record" element={<Record />} />{" "}
      <Route path="/contact" element={<Contact />} />
      <Route path="/faci" element={<Faci />} />
      <Route path="/products" element={<ProductLayout />}>
        <Route path="product/:productId" element={<Product />} />
      </Route>
      <Route path="/login" element={<Login handleLogin={handleLogin} />} />
      <Route path="/fav" />
      <Route path="*" element={<PagesNotFound />} />
    </Routes>
  );
}

export default SiteRoutes;
