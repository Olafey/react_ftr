import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h1>Error 404</h1>
      <p>This Page doesn't exist</p>
      <Link to="http://localhost:5173/">Go To Homepage</Link>
    </div>
  );
};

export default NotFound;
