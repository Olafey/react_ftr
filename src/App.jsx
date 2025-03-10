import "./App.css";
import LandingPage from "./pages/LandingPage";
import NavBar from "./components/NavBar";
import Button from "./components/Button";
import ProfileCard from "./components/profileCard";
import Products from "./components/products";

import Counter from "./components/Counter";

function App() {
  const signup = () => {
    alert("signup");
  };
  return (
    <>
      <div>
        {
          <NavBar />
          /*   <LandingPage />
        <ProfileCard
          image="https://images.pexels.com/photos/16171084/pexels-photo-16171084/free-photo-of-otter-lying-on-rocks.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
          name="Olamide"
          email="olafey@gmail.com"
          age="90"
        /> */
        }
        {/* 
        <Counter /> */}

        <Products />
      </div>
    </>
  );
}

export default App;
