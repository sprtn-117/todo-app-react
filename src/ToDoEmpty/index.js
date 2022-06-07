import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInbox } from "@fortawesome/free-solid-svg-icons"
import "./ToDoEmpty.css"



function ToDoEmpty() {
  return (
    <div>
        <div className='container'>
            <p className='text'>Crea tu primer to do</p>
            <FontAwesomeIcon icon={faInbox} color="rgb(10,132,255)" size='3x'/>
        </div>
        <div>
            <p className='isLoading'></p>
        </div>
    </div>
  )
}

export {ToDoEmpty}