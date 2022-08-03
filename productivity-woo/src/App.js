import todos from '/mock-todos.json';
import './App.css';
import Title from './Title';
import React, { useState } from 'react';
import ToDoList from './ToDoList';

function App() {
  
  const [toDoList, setToDo] = useState(todos);
  
  return (
    <div className="App">
      <Title />
      <ToDoList toDoList={todos} />
    </div>
  );
}

export default App;
