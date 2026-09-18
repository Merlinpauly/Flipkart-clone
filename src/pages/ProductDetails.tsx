import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import type { Product } from "../types/Product";
// import Header from "../components/Header";
import Footer from "../components/Footer";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const cartContext = useContext(CartContext);

  const [product, setProduct] = useState<Product | null>(null);
  // const [cart, setCart] = useState<Product[]>([]);

  if (!cartContext) {
    return null;
  }

  const { cart, setCart } = cartContext;

  useEffect(() => {
    async function getProduct() {
      const response = await fetch(`https://dummyjson.com/products/${id}`);

      const data = await response.json();

      setProduct(data);
    }

    getProduct();
  }, [id]);

  const addToCart = () => {
    if (product) {
      setCart([...cart, product]);

      navigate("/cart");
    }
  };

  return (
    <>
      {/* <Header /> */}
      <div className="product-details">
        {product && (
          <>
            <div className="product-image">
              <img src={product.thumbnail} alt={product.title} />
            </div>

            <div className="product-info">
              <h1>{product.title}</h1>

              <p>{product.description}</p>

              <p>⭐ {product.rating}</p>

              <h2>₹{product.price}</h2>

              <p>Stock: {product.stock}</p>

              <p>Brand: {product.brand}</p>

              <p>Reviews: {product.reviews.length}</p>
              <div className="cart-buy-btn">
                <button className="add-to-cart" onClick={addToCart}>
                  🛒 Add to Cart
                </button>
                <button className="buy-now">Buy Now</button>
              </div>
            </div>
          </>
        )}
      </div>

      <Footer />
    </>
  );
}

export default ProductDetails;
