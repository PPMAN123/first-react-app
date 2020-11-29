import './App.css';
import TodoInputComponent from './components/TodoInputComponent';
import TodoItems from './components/TodoItems';
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);

  const addToTodos = value =>{
    setTodos(currentTodos =>{
      const newCurrentTodos = Object.assign([], currentTodos)
      newCurrentTodos.push(value)
      return newCurrentTodos;
    })
  }

  return (
    [
      <TodoInputComponent addToTodos={addToTodos}/>,
      <TodoItems todos={addToTodos}/>
    ]
  );
}

export default App;