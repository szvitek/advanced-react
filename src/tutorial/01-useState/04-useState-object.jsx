import { useState } from 'react';

const UseStateObject = () => {
  // noob example
  // const [name, setName] = useState('Tony');
  // const [age, setAge] = useState(40);
  // const [hobby, setHobby] = useState('welding');
  const [person, setPerson] = useState({
    name: 'Tony',
    age: '40',
    hobby: 'welding',
  });

  const displayPerson = () => {
    // noob example
    // setName('bruce');
    // setAge('35');
    // setHobby('hanging out');
    setPerson({
      name: 'Thor',
      age: '3000',
      hobby: 'hammering',
    });
  };

  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h4>Enjoys To: {person.hobby}</h4>
      <button className="btn" onClick={displayPerson}>
        show thor
      </button>
    </>
  );
};

export default UseStateObject;
