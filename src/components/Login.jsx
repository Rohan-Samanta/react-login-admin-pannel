import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import "../styles/login.css";

const Login = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [login, setLogin] = useState("");

  const navigate = useNavigate();

  const emailValidation = (userEmail) => {
    const regexEmail =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (!userEmail) {
      setEmailError("*Email is required");
    } else if (regexEmail.test(userEmail) === false) {
      setEmailError("*Please enter a valid email id");
    } else {
      return true;
    }
  };

  const passwordValidation = (userPassword) => {
    const regexPassword =
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if (!userPassword) {
      setPasswordError("*Password is required");
    } else if (userPassword.length < 8 || userPassword.length > 16) {
      setPasswordError("*between 8 to 16 char");
    } else if (regexPassword.test(userPassword) === false) {
      setPasswordError("*one number and special character req");
    } else {
      return true;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLogin("");

    if (emailValidation(userEmail) && passwordValidation(userPassword)) {
      setLogin("Login is successful");
      console.log("success");
      setPasswordError("");
      setEmailError("");
      setUserEmail("");
      setUserPassword("");
      navigate("/dashboard");
    } else if (emailValidation(userEmail)) {
      setEmailError("");
    } else if (passwordValidation(userPassword)) {
      setPasswordError("");
    }
  };

  return (
    <div className="bg-info d-flex justify-content-center align-items-center vh-100">
      <div className="card m-5 p-5 bg-dark ">
        <h2 className="text-center text-light ">Login Here</h2>
        <br />
        <form onSubmit={handleSubmit}>
          <div className="main-container ">
            <input
              type="email"
              placeholder="Enter Your Email Id"
              className="input-group my-4  px-4 py-2  form-control text-center"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
            />
            <p className="text-danger">{emailError}</p>

            <input
              type="password"
              placeholder="Enter Your Password"
              className="input-group my-4 px-4 py-2  form-control text-center"
              value={userPassword}
              onChange={(e) => setUserPassword(e.target.value)}
            />
            <p className="text-danger">{passwordError}</p>

            <button
              className="btn btn-light py-2 px-4 rounded-pill"
              type="submit"
            >
              LogIn
            </button>

            {login}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
