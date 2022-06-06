import React from 'react'
import { TodoContext } from '../TodoContext'
import "./TodoForm.css"


function TodoForm() {
  
    const [newToDoValue, setNewToDoValue] = React.useState("")

    const onChangeTextArea = (event) => {
        setNewToDoValue(event.target.value)
    }

    const {addToDo, setOpenModal} = React.useContext(TodoContext)

  const onCancel = () => {
      console.log("onCancel")
      setOpenModal(false)
  }

  const onAdd = (event) => {
      console.log("onAdd")
      event.preventDefault()
      addToDo(newToDoValue)
      setOpenModal(false)
  }

  return (
    <form onSubmit={onAdd}>
        <label>Escribe un nuevo To Do</label>
        <textarea placeholder='Descripción...'
            value={newToDoValue} onChange={onChangeTextArea}>
        </textarea>
        <div className='TodoForm-buttonContainer'>
            <button className='TodoForm-button TodoForm-button--cancel'
                type="button" onClick={onCancel}>Cancelar</button>
            <button className="TodoForm-button TodoForm-button--add"
                type="submit">Agregar</button>
        </div>
    </form>
  )
}

export {TodoForm}