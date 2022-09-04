import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Wallpaper from "../Assets/Wallpaper2.webp";

const Section = styled.div`
    width: 100vw;
  min-height: 100vh;
  /* background-color: #f0f2f5; */
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${Wallpaper});
  background-size: 100vw;
`;

const Right = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
  box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);


  .loginBox {
    height: 300px;
    /* height: auto; */
    padding: 20px;
    background-color: rgba(256, 256, 256, 0.4);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .loginInput {
    height: 50px;
    border-radius: 10px;
    border: 1px solid gray;
    font-size: 18px;
    padding-left: 20px;
  }

  .loginInput:focus {
    outline: none;
  }

  .loginButton {
    height: 50px;
    border-radius: 10px;
    border: none;
    background-color: #1775ee;
    color: white;
    font-size: 20px;
    font-weight: 500;
    cursor: pointer;
  }

  .loginForgot {
    text-align: center;
    color: #1775ee;
    padding-bottom: 0.8rem;
    cursor: pointer;
  }

  .loginRegisterButton {
    width: 60%;
    align-self: center;
    height: 50px;
    border-radius: 10px;
    border: none;
    background-color: #42b72a;
    cursor: pointer;
    font-size: 20px;
    font-weight: 500;
    cursor: pointer;
    padding: 0.7rem 0;
    /* margin-top: 0.3rem; */

    a {
      color: white;
      text-decoration: none;
      font-size: 20px;
      font-weight: 500;
    }
  }
`;

const Login = () => {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };


  // useEffect(() => {
  //   if(localStorage.getItem('ecogather-user')) {
  //     navigate('/');
  //   }
  // }, []);

  const handleValidation = () => {
    const { password, username } = user;
    if (password === "") {
        toast.error("Enter your password", toastOptions);
        return false;
    } else if (username === "") {
        toast.error("Username can't be blank!!", toastOptions);
        return false;
    } 
    return true;
}

const handleChange = (e) => {
  setUser({ ...user, [e.target.name]: e.target.value })
};


const handleSubmit = async (e) => {
  e.preventDefault();
  if(handleValidation()){
      const { password, username} = user;
      const { data } = await axios.post("http://localhost:5000/api/auth/login", {
          username,password
      });
      if (data.status === false) {
          toast.error(data.msg, toastOptions);
      }
      if (data.status === true) {
          localStorage.setItem("ecogather-user", JSON.stringify(data.user));
          navigate("/");
      }
  }
};

  return (
    <>
    <Section>
        <Right>
          <div className="loginBox">
            <form className="loginBox" onSubmit={(e) => handleSubmit(e)}>
              <input placeholder="Username" className="loginInput" type="text" name="username" onChange={(e) => handleChange(e)}/>
              <input placeholder="Password" className="loginInput" type="password" name="password" onChange={(e) => handleChange(e)}/>
              <button className="loginButton" type="submit">Log In</button>
            </form>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
              <Link to="/register">Create a New Account</Link>
            </button>
          </div>
        </Right>
      </Section>
      <ToastContainer/>
    </>
  );
};

export default Login;
