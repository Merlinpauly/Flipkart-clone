import type { Product } from "../types/Product";
import "../styles/index.css";
import { Link } from "react-router-dom";
import { CartContext  } from "../context/CartContext";
import {  useContext } from "react";
import { useNavigate } from "react-router-dom";

interface ProductCardProps {
  product: Product;
}
// this interface means , the productcard receives props called product , that product follow the Product rules means type check
function ProductCard({ product }: ProductCardProps) {
  const cartContext = useContext(CartContext);
  const navigate = useNavigate();

  // console.log(cartContext);

  if(!cartContext){
    return null;
  }
  

  const { cart , setCart } = cartContext;

  function handleAddToCart(){
    setCart([...cart, product]);
    navigate("/cart")
    // console.log("Added to cart:", product.title);
  }

  return (
    <div className="product-card">
    <Link to={`/product/${product.id}`} className="product-card-link">
      
        <img src={product.thumbnail} alt={product.title} />
        <h3>{product.title}</h3>
        <p>${product.price}</p>
        {/* <span>⭐ {product.rating}</span> */}
        <br />
        <small>{product.discountPercentage}% off</small>
        </Link>
        {/* <button className="add-cart-btn" onClick={handleAddToCart} >Add to Cart</button> */}
      </div>
    
  );
}
export default ProductCard;
