import { useState } from "react";
const Change = () => {
  const [text, setText] = useState(true);

  return (
    <>
      <button
        onClick={() => {
          setText(!text);
        }}
      >
        BUTTON
      </button>
      {text && <h1>Some me</h1>}
    </>
  );
};

export default Change;
