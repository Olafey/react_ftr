//useState()
//useEffect()
//useRef()

import React, { use } from "react";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(9);
  const [user, setUser] = useState({ name: "Olamide", email: "ola@gmail.com" });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const change = () => {
    setCount(200);
  };

  const login = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      <button onClick={change}>{count}</button>

      <div>
        <h1>{user.name}</h1>
        <p>{user.email}</p>
      </div>
      {/* Conditional Rendering */}
      {isLoggedIn ? (
        <p>Welcome, {user.name}</p>
      ) : (
        <button onClick={login}>Log In</button>
      )}
    </div>
  );
};

export default Counter;
