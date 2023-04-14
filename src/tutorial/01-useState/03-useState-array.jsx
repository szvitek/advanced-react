import { useState } from 'react';
import { data } from '../../data';

const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  const removeFromList = (id) => {
    const newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  const clear = () => {
    setPeople([]);
  };

  return (
    <div>
      <ul>
        {people.map((person) => (
          <li key={person.id}>
            {person.name}{' '}
            <button className="btn" onClick={() => removeFromList(person.id)}>
              remove
            </button>
          </li>
        ))}
      </ul>
      <button className="btn" onClick={clear}>
        clear
      </button>
    </div>
  );
};

export default UseStateArray;
