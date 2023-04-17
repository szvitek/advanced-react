import { useState } from 'react';
import { data } from '../../data';

const UserChallenge = () => {
  const [name, setName] = useState('');
  const [users, setUsers] = useState(data);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim()) {
      setUsers([...users, { id: Date.now(), name: name.trim() }]);
      setName('');
    }
  };

  const removeUser = (id) => {
    const updatedUsers = users.filter((u) => u.id !== id);
    setUsers(updatedUsers);
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      {/* render users below */}
      {users.map((user) => (
        <div key={user.id}>
          <h4>{user.name}</h4>
          <button
            className="btn"
            style={{ background: 'red' }}
            onClick={() => removeUser(user.id)}
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
};
export default UserChallenge;
