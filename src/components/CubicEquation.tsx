import React from "react";

const Counter: React.FC = () => {
  const [n, setN] = React.useState<number>(0);
  return (
    <div>
      <p>Count: {n}</p>
      <button onClick={() => setN(n + 1)}>Increment</button>
    </div>
  );
};

export default Counter;