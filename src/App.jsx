import React from 'react';
import Profile from './components/Profile';
import UserList from './components/UserList';
import UserState from './context/User/UserState';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <UserState>
      <h1>React Context</h1>
      <UserList />
      <Profile />
    </UserState>
  );
}

export default App;