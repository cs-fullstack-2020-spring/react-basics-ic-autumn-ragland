import React from 'react';
import './App.css';

function StudentComponent(prop) {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Hello {prop.student.name}</h1>
                <h1>Your grade is {prop.student.grade}</h1>
            </header>
        </div>
    );
}

export default StudentComponent;