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
        <profileCard />
      </div>
    </>
  );
}

export default App;
