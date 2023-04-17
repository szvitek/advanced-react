import { useState } from 'react';
import { useEffect } from 'react';

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);
  console.log('render');

  return (
    <div>
      <button className="btn" onClick={() => setToggle(!toggle)}>
        toggle component
      </button>
      {toggle && (
        <>
          <RandomComponent />
          <RandomComponent2 />
        </>
      )}
    </div>
  );
};

const RandomComponent = () => {
  useEffect(() => {
    console.log('hmm, this is interesting');
    const int = setInterval(() => {
      console.log('hello from interval');
    }, 1000);

    return () => {
      clearInterval(int);
      console.log('cleanup');
    };
  }, []);

  return <h1>hello there</h1>;
};

const RandomComponent2 = () => {
  useEffect(() => {
    const someFunc = () => {
      // some logic
    };
    window.addEventListener('scroll', someFunc);

    return () => window.removeEventListener('scroll', someFunc);
  }, []);

  return <h1>hello there</h1>;
};

export default CleanupFunction;
