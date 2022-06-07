import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleCheck, faCircle, faCircleXmark} from "@fortawesome/free-solid-svg-icons"
import "./ToDoItem.css"

function ToDoItem(props) {
  return (
    <li className='ToDoItem'>
        <span className={`Icon Icon-check`} onClick={props.onComplete}>
          {props.completed ? 
            <FontAwesomeIcon icon={faCircleCheck} color="rgb(50,215,75)"/> : 
            <FontAwesomeIcon icon={faCircle} color="rgb(255,159,10)"/>}
        </span>
        <p className={`ToDoItem-p ${props.completed && 'ToDoItem-p--complete'}`}>
          {props.text}
        </p>
        <span className="Icon Icon-delete" onClick={props.onDelete}>
          <FontAwesomeIcon icon={faCircleXmark} color="rgb(255,69,58)"/>
        </span>
    </li>
  )
}

export {ToDoItem}