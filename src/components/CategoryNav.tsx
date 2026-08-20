import { Link } from "react-router-dom";

function CategoryNav() {
  return (
    <nav className="category-nav">
      <div className="category-item">
        <span className="category-icon">🎁</span>
        <span>For you</span>
      </div>

      <div className="category-item">
        <span className="category-icon">👕</span>
        <span>Fashion</span>
        <div className="dropdown-menu">
          <p>Men's Clothing</p>
          <p>Women's Clothing</p>
          <p>Shoes</p>
          <p>Accessories</p>
        </div>
      </div>
      <div className="category-item">
        <span className="category-icon">💻</span>
        <span>Electronics</span>
        <div className="dropdown-menu">
          <Link to="/mobile-phones">Mobiles</Link>
          <Link to="/laptop">Laptops</Link>
        </div>
      </div>
      <div className="category-item">
        <span className="category-icon">🏠</span>
        <span>Home</span>
      </div>
      <div className="category-item">
        <span className="category-icon"> 💄</span>
        <span>Beauty</span>
      </div>
      <div className="category-item">
        <span className="category-icon">📱</span>
        <span>Mobiles</span>
      </div>
      <div className="category-item">
        <span className="category-icon">✈️</span>
        <span>Travel</span>
      </div>
      <div className="category-item">
        <span className="category-icon">📺</span>
        <span>Appliances</span>
      </div>
    </nav>
  );
}
export default CategoryNav;
