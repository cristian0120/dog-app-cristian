import React from "react";

export const Button = ({ onNew }) => {

  return (
    <nav>
      <button onClick={onNew}> Traer Perro Random</button>
    </nav>
  );
};

export default Button;
