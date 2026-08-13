function Header(){
    return (
        <header className="header">
            <div className="logo">
                Flipkart
            </div>
            <div className="search-container">
                <input type="text" placeholder="Search for products, brands and more"/>
            </div>
            <button className="login-button">
                Login
            </button>
            <div className="cart">
                Cart
            </div>
        </header>
    );
} 
export default Header;