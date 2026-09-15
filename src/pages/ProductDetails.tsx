import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { Product } from "../types/Product";
// import Header from "../components/Header";
import Footer from "../components/Footer";

function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState<Product | null>(null);
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    async function getProduct() {
      const response = await fetch(`https://dummyjson.com/products/${id}`);

      const data = await response.json();

      setProduct(data);
    }

    getProduct();
  }, [id]);

  console.log(product);
  const addToCart = () => {
    if (product) {
      setCart([...cart, product]);
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
              <button className="add-to-cart" onClick={addToCart}>
                🛒 Add to Cart
              </button>
            </div>
          </>
        )}
      </div>

      <Footer />
    </>
  );
}

export default ProductDetails;
