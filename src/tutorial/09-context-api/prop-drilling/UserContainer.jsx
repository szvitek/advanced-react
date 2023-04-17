const UserContainer = ({ user, logout }) => {
  return (
    <div className="user-container">
      {user ? (
        user && (
          <>
            <p>Hello there, {user.name}</p>
            <button className="btn" onClick={logout}>
              Logout
            </button>
          </>
        )
      ) : (
        <p>please login</p>
      )}
    </div>
  );
};
export default UserContainer;
