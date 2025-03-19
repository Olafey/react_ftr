import React from "react";
import { useState } from "react";

const Signup = () => {
  const baseUrl = "http://localhost:5000/api";
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // console.log(formData);
  };

  const handleSubmit = async (e) => {
    console.log("signing up ......");
    e.preventDefault();
    try {
      const res = await fetch(`${baseUrl}/auth/sign-up`, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      console.log(error);
    } finally {
      console.log("DONE!!!");
    }
  };
  return (
    <div style={{ padding: "4rem 2rem" }}>
      <div className="signup-container">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email</label>
            <input
              onChange={handleInput}
              type="email"
              name="email"
              id="email"
              placeholder="exam@email.com"
              required
            />
          </div>

          <div>
            <label htmlFor="name">Name</label>
            <input
              onChange={handleInput}
              type="name"
              name="name"
              id="name"
              placeholder="Ola Fey"
              required
            />
          </div>

          <div>
            <label htmlFor="password">Passord</label>
            <input
              onChange={handleInput}
              type="email"
              name="email"
              id="email"
              placeholder="exam@email.com"
              required
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
