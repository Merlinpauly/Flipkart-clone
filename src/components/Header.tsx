import type { Dispatch, SetStateAction } from "react";
import { Link } from "react-router-dom";

interface HeaderProps {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
}

function Header({ search, setSearch }: HeaderProps) {
  return (
    <header className="header">
      <div className="logo">Flipkart</div>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search for Products , Brands and More"
          value={search}
          onChange={(e) => setSearch(e.target.value)}

        />
        {/* <p>{search}</p> */}
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