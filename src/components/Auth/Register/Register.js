import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";
const Register = () => {
  const createAccount=()=>{
    console.log('created')
  }
  return (
    <div className="form-body">
       <div className="form-cont">
       <form id="#form">
       <div className="f-con">
                <input type="text" name="username"  placeholder="Username" required/>
            </div>
            <div className="f-con">
                <input type="email" name="email"  placeholder="Email" required/>
            </div>
            <div className="f-con">
                <input type="password" name="name" placeholder="Password" required/>
            </div>
            <div className="f-con">
                <input type="password" name="confirmPass" placeholder="Password" required/>
            </div>
            <button onClick={createAccount} class="form-button">Submit</button>
       </form>
       <Link to="/login">Already have an account</Link>
       </div>
    </div>
  );
};
export default Register;
