import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    return null;
  }

  const { cart } = cartContext;

  return (
    <div className="cart-page">
      <h1 className="cart-title">Your Cart</h1>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <h2>Your cart is empty</h2>
          <p>Add some products to your cart.</p>
        </div>
      ) : (
        <div className="cart-container">
          <div className="cart-products">
            {cart.map((product) => (
              <div className="cart-product" key={product.id}>
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="cart-product-image"
                />

                <div className="cart-product-details">
                  <h2>{product.title}</h2>

                  <p className="cart-product-price">${product.price}</p>

                  <span>⭐ {product.rating}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h2>Price Details</h2>
            <p>Total Products: {cart.length}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
