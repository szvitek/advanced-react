import { useState } from 'react';

const UseStateGotcha = () => {
  const [value, setValue] = useState(0);

  const handleClick = () => {
    // update via callback if need to maipulate the current value!!
    setValue((currentState) => currentState + 1);
  };

  return (
    <>
      <h2>{value}</h2>
      <button className="btn" onClick={handleClick}>
        increment
      </button>
    </>
  );
};

export default UseStateGotcha;
