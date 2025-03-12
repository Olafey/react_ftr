import "./App.css";
import LandingPage from "./pages/LandingPage";
import NavBar from "./components/NavBar";
import Button from "./components/Button";
import ProfileCard from "./components/profileCard";
import Products from "./components/products";

import NotFound from "./pages/NotFound";

import Counter from "./components/Counter";

// function App() {
//   const signup = () => {
//     alert("signup");
//   };
//   return (
//     <>
//       <div>
//         {
//           // <NavBar />
//           /*   <LandingPage />
//         <ProfileCard
//           image="https://images.pexels.com/photos/16171084/pexels-photo-16171084/free-photo-of-otter-lying-on-rocks.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
//           name="Olamide"
//           email="olafey@gmail.com"
//           age="90"
//         /> */
//         }
//         {/*
//         <Counter /> */}

//         {/* <Products /> */}
//       </div>
//     </>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/profilecards" element={<ProfileCard />} />
          <Route path="/counter/show" element={<Counter />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
