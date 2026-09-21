import { useState } from "react";
import "../styles/index.css";
// import Header from "../components/Header";
import CategoryNav from "../components/CategoryNav";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
function Login() {
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  function handleSubmit(event: any) {
    event.preventDefault();
    const storedUsers = localStorage.getItem("users");
    // console.log(storedUsers);
    const users = JSON.parse(storedUsers!);
    const foundUser = users.find((user: any) => user.mobile === mobile  && user.password === password);
    // console.log(foundUser);

    if(foundUser){
      console.log("Login Sucessfully"); 
    }else{
      console.log("Invalid mobile and password");
    }
  }
  return (
    <>
      {/* <Header /> */}
      <CategoryNav />
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
          <p className="create-account">
            New to Flipkart? <Link to="/register">Create an account</Link>
          </p>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Login;
