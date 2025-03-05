import React from "react";
import Button from "./Button";

const ProfileCard = (props) => {
  return (
    <div className="card">
      <img src={props.image} alt="" width={100} />
      <p>Name: {props.name}</p>
      <p>Email: {props.email}</p>
      <p>Age: {props.age}</p>
      <a
        href={props.link}
        style={{ background: "red", color: "white", padding: ".5rem 1rem" }}
      >
        Website
      </a>
    </div>
  );
};

export default ProfileCard;
