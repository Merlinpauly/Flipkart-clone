import type { Dispatch, SetStateAction } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
}

function Header({ search, setSearch }: HeaderProps) {
  const navigate = useNavigate();

  function handleHome(){
    navigate("/")

  }
  return (
    <header className="header">
      <div className="logo"  onClick={handleHome}>
        <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fk-mp-c815b6.svg" alt="logo" />
      </div>

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
        <span className="toggle-circle">1</span>
        <Link to="/cart">🛒 Cart</Link>
      </div>
    </header>
  );
}

export default Header;