import { useState, Fragment } from 'react';
import React from 'react';
import AddUser from './components/User/AddUser';
import UserList from './components/User/UserList';

function App() {
  const [usersList, setUsersList] = useState([]);
  const addUserHandler = (user) => {
    setUsersList(prevUsersList => [...prevUsersList, user]);
  };

  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler} />
      {usersList.length > 0 && <UserList users={usersList} />}
    </Fragment>
  );
}

export default App;
