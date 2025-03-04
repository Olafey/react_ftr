import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import LandingPage from "./components/LandingPage";
import NavBar from "./components/NavBar";
import Button from "./Button";

function App() {
  return (
    <>
      <div>
        <NavBar />
        <LandingPage />
      </div>
    </>
  );
}

export default App;
