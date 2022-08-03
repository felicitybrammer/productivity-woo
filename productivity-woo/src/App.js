import todos from '/mock-todos.json';
import './App.css';
import Title from './Title';
import React, { useState } from 'react';

function App() {
  
  const [toDo, setToDo] = useState(todos);
  
  return (
    <div className="App">
      <Title />
    </div>
  );
}

export default App;
