import React, { useState } from 'react'

// capture user's input
// on submit add todo

function TodoForm({addTodo}) {
  const [todo, setTodo] = useState("");
  // console.log(todo);
  
  const handleForm = (e) =>{
    e.preventDefault();

    if(todo) {
      //logicto add todo
      addTodo(todo);
      // clear form after submission
      setTodo("");
    }
  }
  
  return (
    <form className='todo-form' onSubmit={handleForm}>
      <input className='todo-input' placeholder='What is the task today?' type='text' value={todo} onChange={(e) => setTodo(e.target.value)}/>
      <button type='submit' className='todo-btn'>Add Task</button>
    </form>
  )
}

export default TodoForm
