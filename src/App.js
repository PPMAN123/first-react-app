import './App.css';
import TodoInputComponent from './components/TodoInputComponent'
import TodoListComponent from './components/TodoListComponent'
import { useState, useEffect, useRef } from 'react';
import _ from 'lodash';

function App() {
  const [todos, setTodos] = useState([]);
  const prevTodosRef = useRef();

  const addToTodos = value =>{
    setTodos(currentTodos =>{
      const newCurrentTodos = Object.assign([], currentTodos)
      newCurrentTodos.push({ id:_.uniqueId(), value: value, doneState: false })
      return newCurrentTodos;
    })
  }

  const removeTodo = id =>{
    setTodos(currentTodos =>{
      const newCurrentTodos = Object.assign([], currentTodos);
      return newCurrentTodos.filter(todo => todo.id !== id);
    })
  }

  const toggleTodoDoneState = id =>{
    setTodos(currentTodos =>{
      const newCurrentTodos = Object.assign([], currentTodos);
      return newCurrentTodos.map(todo =>{
        if(todo.id === id){
          const newTodo = Object.assign({}, todo);
          newTodo.doneState = !newTodo.doneState;
          return newTodo;
        }
        return todo;
      })
    })
  }

  useEffect(() =>{
    prevTodosRef.current = todos;
  })

  const prevTodos = prevTodosRef.current;

  useEffect(() => {
      if(prevTodos){
        prevTodos.forEach(prevTodo =>{
          const {id,doneState} = prevTodo;
          const [todo] = todos.filter(td => td.id === id)
          if(todo && todo.doneState && !doneState){
            //congrats message
          }
      })
    }
  }, [todos])

  return (
    [
      <TodoListComponent 
      todos={todos} 
      removeTodo={removeTodo} 
      title="Active Todo Items" 
      doneState={false} 
      toggleTodo={toggleTodoDoneState}
      />,
      <TodoInputComponent addToTodos={addToTodos}/>,
      <TodoListComponent 
      todos={todos} 
      removeTodo={removeTodo} 
      title="Completed Todo Items" 
      doneState={true} 
      toggleTodo={toggleTodoDoneState}
      />
    ]
  );
}

export default App;