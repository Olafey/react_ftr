import React from "react";
import Button from "./Button";
import Hero from "./Hero";
import "./navbar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  const signUp = () => {
    alert("Signing Up.....");
  };
  return (
    <div className="navbar">
      <h1>Logo</h1>
      <Link to="/">Home</Link>
      <Link to="#">About</Link>
      <Link to="/products">Contact</Link>
      <Button go="Get Started Now" submit={signUp} />
    </div>
  );
};

export default NavBar;
