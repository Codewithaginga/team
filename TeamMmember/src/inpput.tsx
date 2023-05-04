import { useState } from "react";

const Inpput = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <input
        type="text"
        onChange={(event) => setInputValue(event.target.value)}
      />
      {inputValue}
    </div>
  );
};

export default Inpput;
