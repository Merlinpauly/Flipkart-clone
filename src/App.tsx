import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MobilePhones from "./pages/MobilePhones";
import Laptop from "./pages/Laptop";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/mobile-phones" element={<MobilePhones />} />
          <Route path="/laptop" element={<Laptop />} />
        </Routes>
      </BrowserRouter> 
    </>  
  );
}

export default App;
