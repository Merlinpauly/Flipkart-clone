import { useState } from "react";
// import Header from "../components/Header";
import CategoryNav from "../components/CategoryNav";
import Footer from "../components/Footer";
import users from "../data/users.json";


function Register() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  function handleSubmit(event:any){
    event.preventDefault();

    const newUser ={
      id: Date.now(),
      name: name,
      mobile:mobile,
      password:password,
    };
    const storedUsers = localStorage.getItem("users");
    // console.log(storedUsers);
    const users = storedUsers ? JSON.parse(storedUsers):[];
    users.push(newUser);
     localStorage.setItem("users", JSON.stringify(users));
    console.log(users);
    // localStorage.setItem("users" , JSON.stringify(newUser));
    
    // const userObject = JSON.parse(storedUsers!);
    // console.log(userObject);
    // console.log(typeof userObject)
    
    // console.log(typeof storedUser);
    // console.log(localStorage.getItem("user"));
    // console.log(newUser);
    // console.log("account created");

  }
  return (
    <>
        {/* <Header/> */}
        <CategoryNav />
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
      <Footer />
    </>
  );
}

export default Register;
