import { useState } from "react";

const Color = () => {
  const [color, setColor] = useState("red");

  return (
    <>
      <h1>my favour color is {color}</h1>
      <button onClick={() => setColor("blue")}>Blue</button>
      <button onClick={() => setColor("maroon")}>marron</button>
      <button onClick={() => setColor("purple")}>purple</button>
      <button onClick={() => setColor("grey")}>grey</button>
    </>
  );
};

export default Color;
