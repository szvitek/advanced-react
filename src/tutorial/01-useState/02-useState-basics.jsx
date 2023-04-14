import { useState } from 'react';

const UseStateBasics = () => {
  const [count, setCount] = useState(0);

  const handleClick = (e) => {
    setCount((v) => {
      return v + 1;
    });
  };

  return (
    <div>
      <h2>{count}</h2>
      <button className="btn" onClick={handleClick}>
        increment
      </button>
    </div>
  );
};

export default UseStateBasics;
