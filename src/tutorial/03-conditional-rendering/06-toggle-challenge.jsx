import { useState } from 'react';

const ToggleChallenge = () => {
  const [showAlert, setShowAlert] = useState(false);
  return (
    <>
      <button className="btn" onClick={() => setShowAlert(!showAlert)}>
        toggle
      </button>
      {showAlert && <Alert />}
    </>
  );
};

const Alert = () => {
  return <div className="alert alert-danger">ALARM!!!!1!!!!111!</div>;
};

export default ToggleChallenge;
