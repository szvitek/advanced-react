import { useState } from 'react';

const CodeExample = () => {
  const [value, setValue] = useState(0);

  // runs on every render (initial render, re-renders due to state changes)
  const sayHello = () => {
    console.log('hello');
    // it can trigger an infinite loop if updates the value from state
  };

  sayHello();

  return (
    <div>
      <h1>value : {value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        click me
      </button>
    </div>
  );
};
export default CodeExample;
