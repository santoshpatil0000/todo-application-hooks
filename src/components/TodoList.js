import React from 'react'
import TodoItem from './TodoItem'

function TodoList() {
    return (
        <div>
         <h2 className='todo-list'>todo list</h2>
         <button className='clear-btn' type='button'>clear items</button>
         <TodoItem/>   
        </div>
    )
}

export default TodoList
