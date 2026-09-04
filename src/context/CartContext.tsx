import { createContext, useState } from "react";
import type { Product } from "../types/Product";

const CartContext = createContext(null);

function CartProvider() {
  const [cart, setCart] = useState<Product[]>([]);

  return(
    <></>
    // <CartContext.Provider value={{ cart, setCart }}>
        
    //     </CartContext.Provider>
  )
}

export { CartContext, CartProvider }; 