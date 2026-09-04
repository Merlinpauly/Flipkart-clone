import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="logo">Flipkart</div>
      <div className="search-container">
        <input type="text" placeholder="Search for products, brands and more" />
      </div>
      <button
        className="login-button"
        onClick={() => (window.location.href = "/login")}
      >
        Login
      </button>
      <div className="cart">
        <Link to="/cart">🛒 Cart</Link>
      </div>
    </header>
  );
}
export default Header;
