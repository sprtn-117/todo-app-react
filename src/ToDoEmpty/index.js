import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInbox } from "@fortawesome/free-solid-svg-icons"
import "./ToDoEmpty.css"



function ToDoEmpty() {
  return (
    <div className='containerEmpty'>
      <div className='boxEmpty'>
        <p className='textEmpty'>Bandeja vacia</p>
        <FontAwesomeIcon icon={faInbox} color="rgb(10,132,255)" size='3x'/>
      </div>
      <p className='isLoading'></p>
    </div>
  )
}

export {ToDoEmpty}