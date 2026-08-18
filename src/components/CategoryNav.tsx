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
                    <p>Mobiles</p>
                    <p>Laptops</p>
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