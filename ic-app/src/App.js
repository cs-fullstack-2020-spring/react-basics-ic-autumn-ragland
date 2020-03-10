import React from 'react';
import logo from './logo.svg';
import './App.css';
import StudentComponent from './StudentComponent';

function App() {
  let myStudent = {
    name : "Autumn",
    grade : 90,
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <StudentComponent student = {myStudent}></StudentComponent>
      </header>
    </div>
  );
}

export default App;
