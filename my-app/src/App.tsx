import React from 'react';
import './App.css';
import Profile from './Components/Profile';

function App() {
  const User = [{Id:1,Name:"Santosh Dash",Class:"B.Tech",Age:21,State:"Odisha"},
                {Id:2,Name:"Dinesh Mohanty",Class:"B.Tech",Age:21,State:"Odisha"},
                {Id:3,Name:"Alok Behera",Class:"B.Tech",Age:21,State:"Odisha"},]
  return (
    <div className="App">
      <header className="App-header">
        <Profile person={User} />
      </header>
    </div>
  );
}


export default App;
