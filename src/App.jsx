import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import NavBar from "./components/NavBar";
import Button from "./components/Button";
import profileCard from "./components/profileCard";

function App() {
  const signup = () => {
    alert("signup");
  };
  return (
    <>
      <div>
        <NavBar />
        <LandingPage />
        <Button text="Hello World" click={signup} />
      </div>
    </>
  );
}

export default App;
