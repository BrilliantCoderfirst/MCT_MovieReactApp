import React, { useState } from "react";
import Input from "../components/input";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit() {
    if (name == "" && age == "" && userName == "" && password == "") {
      alert("Please Enter All Details--!");
    } else {
      localStorage.setItem("name", name);
      localStorage.setItem("age", age);
      localStorage.setItem("userName", userName);
      localStorage.setItem("password", password);
      navigate("/home");
    }
  }

  return (
    <>
      <div className="loginContainer">
        <div className="card">
          <div className="leftPart">
            <img
              src="https://m.media-amazon.com/images/M/MV5BMTUwNjUxMTM4NV5BMl5BanBnXkFtZTgwODExMDQzMTI@._V1_.jpg"
              alt=""
            />
          </div>
          <div className="rightPart">
            <div className="inner_rightPart">
              <h1>Welcome Back,</h1>
              <p>Log in to your account</p>
              <label htmlFor="">Name</label>
              <Input
                type="text"
                placeHolder="Enter Your Name"
                value={name}
                onChange={setName}
              />
              <label htmlFor="">Age</label>
              <Input
                type="number"
                placeHolder="Enter Your Number"
                value={age}
                onChange={setAge}
              />
              <label htmlFor="">UserName</label>
              <Input
                type="text"
                placeHolder="Enter Your Username"
                value={userName}
                onChange={setUserName}
              />
              <label htmlFor="">Password</label>
              <Input
                type="number"
                placeHolder="Enter Your Password"
                value={password}
                onChange={setPassword}
              />
              <Button text="LogIn" onClick={handleSubmit} />
              <p className="lastPara">
                Don't have an account <span>Sign Up</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
