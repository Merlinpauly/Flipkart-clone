import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MobilePhones from "./pages/MobilePhones";
import Laptop from "./pages/Laptop";
import MenCloths from "./pages/MenCloths";
import MenShoes from "./pages/MenShoes";
import MenWatches from "./pages/MenWatches";


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
          <Route path="/men Clothing" element={<MenCloths/>}/>
          <Route path="/men shoes" element={<MenShoes/>}/>
          <Route path="/men watches" element={<MenWatches/>}/>
        </Routes>
      </BrowserRouter> 
    </>  
  );
}

export default App;
