import React, { useContext } from "react";
import Button from "./Button";
import Hero from "./Hero";
import "./navbar.css";
import { Link } from "react-router-dom";
import { authContext } from "../contexts/AuthContext";

const NavBar = () => {
  const { login } = useContext(authContext);
  const signUp = () => {
    alert("sign");
  };

  return (
    <div className="navbar">
      <h1>Logo</h1>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/products">Products</Link>

      <button onClick={login}>LogIt</button>
      <Button go="Get Started Now" submit={signUp} />
    </div>
  );
};

export default NavBar;
