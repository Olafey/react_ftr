import React from "react";
import Button from "./Button";
import Hero from "./Hero";
import "./navbar.css";

const NavBar = () => {
  const signUp = () => {
    alert("Signing Up.....");
  };
  return (
    <div className="navbar">
      <h1>Logo</h1>
      <a href="/">Home</a>
      <a href="#">About</a>
      <a href="/products">Contact</a>
      <Button go="Get Started Now" submit={signUp} />
    </div>
  );
};

export default NavBar;
