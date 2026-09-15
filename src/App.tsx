import { useState } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MobilePhones from "./pages/MobilePhones";
import Laptop from "./pages/Laptop";
import MenCloths from "./pages/MenCloths";
import MenShoes from "./pages/MenShoes";
import MenWatches from "./pages/MenWatches";
import WomenClothing from "./pages/WomenClothing";
import WomenShoes from "./pages/WomenShoes";
import WomenWatches from "./pages/WomenWatches";
import WomenBags from "./pages/WomenBags";
import Makeup from "./pages/Makeup";
import Skincare from "./pages/Skincare";
import Perfumes from "./pages/Perfumes";
import Furniture from "./pages/Furniture";
import HomeDecor from "./pages/HomeDecor";
import KitchenAccessories from "./pages/KitchenAccessories";
import SportsAccessories from "./pages/SportsAccessories";
import TwoWheelers from "./pages/TwoWheelers";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";

function App() {
  const [search, setSearch] = useState("");
  return (
    <>
      <BrowserRouter>
        <Header search={search} setSearch={setSearch} />
        <Routes>
          <Route path="/" element={<Home search={search} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/mobile-phones" element={<MobilePhones />} />
          <Route path="/laptop" element={<Laptop />} />
          <Route path="/men-clothing" element={<MenCloths />} />
          <Route path="/men-shoes" element={<MenShoes />} />
          <Route path="/men-watches" element={<MenWatches />} />
          <Route path="/women-clothing" element={<WomenClothing />} />
          <Route path="/women-shoes" element={<WomenShoes />} />
          <Route path="/women-watches" element={<WomenWatches />} />
          <Route path="/women-bags" element={<WomenBags />} />
          <Route path="/makeup" element={<Makeup />} />
          <Route path="/skincare" element={<Skincare />} />
          <Route path="/perfumes" element={<Perfumes />} />
          <Route path="/furniture" element={<Furniture />} />
          <Route path="/home-decor" element={<HomeDecor />} />
          <Route path="/kitchen-accessories" element={<KitchenAccessories />} />
          <Route path="/sports-accessories" element={<SportsAccessories />} />
          <Route path="/two-wheelers" element={<TwoWheelers />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
