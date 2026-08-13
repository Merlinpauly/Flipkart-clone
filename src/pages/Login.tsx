import { useState } from "react";
import "../styles/index.css";
import Header from "../components/Header";
import CategoryNav from "../components/CategoryNav";
function Login() {
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  function handleSubmit(event: any) {
    event.preventDefault();
    console.log("submitted");
  }
  return (
    <>
      <Header />
      <CategoryNav/>
    <div className="login-page">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <label>Mobile Number</label>
        <input
          type="text"
          placeholder="Enter your mobile number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>
      </form>
    </div>
    </>
  );
}

export default Login;
