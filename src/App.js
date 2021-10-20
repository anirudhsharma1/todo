import React, { useState, useRef } from 'react';
import TodoList from './Components/TodoList'


function App() {

  const [todos,setTodo] = useState([]);
  const todoNameRef = useRef()

  function handleAddTodo(e){
      const name = todoNameRef.current.value
      console.log(name)
  }

  return (
    <>
      <TodoList todos={todos} />
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodo}>Add Todo</button>
      <button>Clear Complete</button>

      <div>0 left to do</div>
    </>
  );
}

export default App;
