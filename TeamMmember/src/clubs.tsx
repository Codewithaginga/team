import { useState } from "react";

const Clubs = () => {
  const [num, numNums] = useState(0);

  return (
    <button onClick={() => numNums(num + 1)}>
      Clubs in Premier League: {num}{" "}
    </button>
  );
};

export default Clubs;
