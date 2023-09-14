import { useState } from 'react';
import React from 'react';
import AddUser from './components/User/AddUser';
import UserList from './components/User/UserList';

function App() {
  const [usersList, setUsersList] = useState([]);
  const addUserHandler = (user) => {
    setUsersList(prevUsersList =>  [...prevUsersList,user]);
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      {usersList.length > 0 && <UserList users={usersList} />}

    </div>
  );
}

export default App;
