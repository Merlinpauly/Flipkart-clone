import  { createContext , useState } from "react";

import type { Dispatch , ReactNode , SetStateAction } from "react";
import type { Product } from "../types/Product";

interface CartContextType {
  cart : Product[]; 
  setCart : Dispatch<SetStateAction<Product[]>>;

}
const CartContext = createContext<CartContextType | null>(null);

function CartProvider( { children } : { children : ReactNode}){

  const [ cart , setCart ] = useState<Product[]>([]);

  return(
    <CartContext.Provider value={{ cart , setCart}}>
      {children}
      

    </CartContext.Provider>
  );

}

export { CartContext, createContext, CartProvider };