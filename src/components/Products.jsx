import React from "react";
import { useState } from "react";

const Products = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState("");
  const baseUrl = "https://fakestoreapi.com";

  //useEffect
  return (
    <div>
      {isLoading ? (
        <p>Loading....</p>
      ) : (
        <div>
          <h1>Product title</h1>
        </div>
      )}
      <button>Get Products</button>
    </div>
  );
};

export default Products;
