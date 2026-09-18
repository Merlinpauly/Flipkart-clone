import type { Dispatch, SetStateAction } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
}

function Header({ search, setSearch }: HeaderProps) {
  const navigate = useNavigate();

  function handleHome() {
    navigate("/");
  }

  // function handleProfileChange(event: React.ChangeEvent<HTMLSelectElement>) {
  //   const selectedValue = event.target.value;

  //   if (selectedValue === "login") {
  //     navigate("/login");
  //   }
  //   if (selectedValue === "profile") {
  //     navigate("/profile");
  //   }

  //   if (selectedValue === "settings") {
  //     navigate("/settings");
  //   }

  //   if (selectedValue === "logout") {
  //     console.log("Logout clicked");
  //   }
  // }

  return (
    <header className="header">
      <div className="logo" onClick={handleHome}>
        <img
          src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fk-mp-c815b6.svg"
          alt="logo"
        />
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

      {/* <button
        className="login-button"
        onClick={() => (window.location.href = "/login")}
      >
        Login
      </button> */}
      <div className="profile">
        <div className="profile-trigger">
          <span className="profile-icon">
            <img
              src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/profile-6bae67.svg"
              alt="profile"
            />
          </span>

          <span className="profile-text">Login</span>

          <span className="profile-arrow">▼</span>
        </div>

        <div className="profile-dropdown">
          <button onClick={() => navigate("/login")}>Login</button>

          <button onClick={() => navigate("/profile")}>My Profile</button>

          <button onClick={() => navigate("/settings")}>Settings</button>

          <button onClick={() => console.log("Logout clicked")}>Log out</button>
        </div>
      </div>

      <div className="cart">
        <span className="toggle-circle">1</span>
        <Link to="/cart">🛒 Cart</Link>
      </div>
    </header>
  );
}

export default Header;
