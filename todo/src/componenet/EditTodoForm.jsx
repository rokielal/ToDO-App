import React, { useState } from 'react'

function EditTodoForm({ task, editTask }) {

    const [editTodo, setEditTodo] = useState(task.task)

    const handleSubmit =(e) =>{
        e.preventDefault();
        // edit the task
        editTask(editTodo, task.id);
    }
  return (
    <form className='todo-form' onSubmit={handleSubmit}>
        <input type='text' value={editTodo} onChange={(e)=>setEditTodo(e.target.value)} className='todo-input' placeholder='edit task'/>
        <button type='submit' className='todo-btn'>Save</button>
    </form>
  )
}

export default EditTodoForm
