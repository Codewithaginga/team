import { useState } from "react";

const Increment = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrease
      </button>
      <button
        onClick={() => {
          setCount(count * 0);
        }}
      >
        Start Over
      </button>
      {count}
    </>
  );
};

export default Increment;
