import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
    console.log("increase가 클릭됨");
  };

  const decreaseCount = () => {
    setCount(count - 1);
    console.log("decrease가 클릭됨");
  };

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={increaseCount}>+1</button>
      <button onClick={decreaseCount}>-1</button>
    </div>
  );
}

export default Counter;