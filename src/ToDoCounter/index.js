import React from 'react'
import { TodoContext } from '../TodoContext'
import "./ToDoCounter.css"

function ToDoCounter() {
const {total, completedToDo} = React.useContext(TodoContext)

  return (
    <h2 className='ToDoCounter'>Haz completado {completedToDo} de {total} toDo</h2>
  )
}

export {ToDoCounter}