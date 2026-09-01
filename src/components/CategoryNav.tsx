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
        <span>Men</span>
        <div className="dropdown-menu">
          <Link to="/men-clothing">Men's Clothing</Link>
          <Link to="/men-shoes">Men's Shoes</Link>
          <Link to="/men-watches">Men's Watches</Link>
        </div>
      </div>
      <div className="category-item">
        <span className="category-icon">👗</span>
        <span>Women</span>
        <div className="dropdown-menu">
          <Link to="/women-clothing">Women's Clothing</Link>
          <Link to="/women-shoes">Women's Shoes</Link>
          <Link to="/women-watches">Women's Watches</Link>
          <Link to="/women-bags">Women's Bags</Link>
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
        <div className="dropdown-menu">
          <Link to="/furniture">Furniture</Link>
          <Link to="/home-decor">Home Decor</Link>
          <Link to="/kitchen-accessories">Kitchen Accessories</Link>
        </div>
      </div>
      <div className="category-item">
        <span className="category-icon"> 💄</span>
        <span>Beauty</span>
        <div className="dropdown-menu">
          <Link to="/makeup">Makeup</Link>
          <Link to="/skincare">Skincare</Link>
          <Link to="/perfumes">Perfumes</Link>
        </div>
      </div>

      <div className="category-item">
        <span className="category-icon">🏏</span>
        <span>Sports</span>
        <div className="dropdown-menu">
          <Link to="/sports-accessories">Sports Accessories</Link>
        </div>
      </div>
      <div className="category-item">
        <span className="category-icon">🏍️</span>
        <span>2 wheelers</span>
        <div className="dropdown-menu">
          <Link to="/two-wheelers">Two Wheelers</Link>
        </div>
      </div>
    </nav>
  );
}
export default CategoryNav;
