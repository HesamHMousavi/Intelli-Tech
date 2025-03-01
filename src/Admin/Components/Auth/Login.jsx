import React from "react";
import Img from "../../../Images/login-image.jpg";
import LoginForm from "./LoginForm";
import "./Login.css";

const Login = () => {
  return (
    <div className="login">
      <img src={Img} alt="" />
      <div className="from-con">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
