import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleCheck, faCircle, faCircleXmark} from "@fortawesome/free-solid-svg-icons"
import "./ToDoItem.css"

function ToDoItem(props) {
  return (
    <li className='ToDoItem'>
        <span className={`Icon Icon-check`} onClick={props.onComplete}>
          {props.completed ? 
            <FontAwesomeIcon icon={faCircleCheck} color="green"/> : 
            <FontAwesomeIcon icon={faCircle} color="orange"/>}
        </span>
        <p className={`ToDoItem-p ${props.completed && 'ToDoItem-p--complete'}`}>
          {props.text}
        </p>
        <span className="Icon Icon-delete" onClick={props.onDelete}>
          <FontAwesomeIcon icon={faCircleXmark} color="red"/>
        </span>
    </li>
  )
}

export {ToDoItem}