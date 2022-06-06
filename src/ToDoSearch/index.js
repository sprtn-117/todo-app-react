import React from 'react'
import { TodoContext } from '../TodoContext'
import "./ToDoSearch.css"


function ToDoSearch() {
  const {searchValue, setSearchValue} = React.useContext(TodoContext)
  
  const searchValueChange = (event) => {
    console.log(event.target.value)
    setSearchValue(event.target.value)
  }

  return (
    <input className='ToDoSearch' placeholder='to Do'
      value={searchValue}
      onChange={searchValueChange}/>
  )
}

export {ToDoSearch}