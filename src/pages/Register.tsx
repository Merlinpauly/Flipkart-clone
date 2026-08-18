import { useState } from "react";
import Header from "../components/Header";
import CategoryNav from "../components/CategoryNav";
import Footer from "../components/Footer";


function Register() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  function handleSubmit(event:any){
    event.preventDefault();
    console.log("account created");

  }
  return (
    <>
        <Header/>
        <CategoryNav/>
        <div className="register-page">
      <form className= "register-form" onSubmit={handleSubmit} >

        <h1>Create Account</h1>

        <label>Name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value )} placeholder="Name"/>
        <label>Mobile Number</label>
        <input type="text" value={mobile} onChange={(e)=> setMobile(e.target.value)} placeholder="Mobile Number"/>
        <label>Password</label>
        <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} placeholder="Password"/>
        <button type="submit">Create Account</button>
      </form>
      
      </div>
      <Footer/>
    </>
  );
}

export default Register;
