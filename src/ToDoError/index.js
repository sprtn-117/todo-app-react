import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBugSlash, faBugs } from "@fortawesome/free-solid-svg-icons"
import "./ToDoError.css"



function ToDoError(error) {
  return (
    <div className='containerError'>
        <p className='textError'>Error</p>
        <div className='imgError'>
            <FontAwesomeIcon icon={faBugs} color="#F65656" size='2x'/>
            <FontAwesomeIcon icon={faBugSlash} color="#F65656" size='7x'/>
            <FontAwesomeIcon icon={faBugs} color="#F65656" size='4x'/>
        </div>
    </div>
  )
}

export {ToDoError}