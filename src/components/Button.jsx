import React from "react";

const Button = (props) => {
  return (
    <div>
      <button
        onClick={props.click}
        style={{
          background: "red",
          color: "white",
          border: "none",
          padding: "10px 20px",
          borderRadius: "5px",
        }}
      >
        {props.go}
      </button>
    </div>
  );
};

export default Button;
