import { useState, useCallback, useMemo } from 'react';
import { data } from '../../../data';
import List from './List';
import slowFunction from './slowFunction';
const LowerState = () => {
  const [people, setPeople] = useState(data);
  const [count, setCount] = useState(0);

  // this takes ages
  // const value = slowFunction();

  // so we use useMemo, wich remembers the function's returned value
  // in the dependency array we can pass variables which if them canging
  // only then reruns the slow function
  const value = useMemo(() => slowFunction(), []);
  console.log(value);

  // on component re-render this function gets created every singel time
  // and even we use memo() in list component react detects prop changing
  // and list and all of its children gets re-rendered again
  // to avoid that behavior use useCallback hook
  const removePerson = useCallback(
    (id) => {
      // console.log(people); // if we don't pass people as a dependency
      // it will always have the initial array
      const newPeople = people.filter((person) => person.id !== id);
      setPeople(newPeople);
    },
    [people]
  );

  return (
    <section>
      <button
        className="btn"
        onClick={() => setCount(count + 1)}
        style={{ marginBottom: '1rem' }}
      >
        count {count}
      </button>
      <List people={people} removePerson={removePerson} />
    </section>
  );
};
export default LowerState;
