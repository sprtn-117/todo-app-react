import React from 'react'
import { TodoContext } from '../TodoContext';
import { ToDoCounter } from '../ToDoCounter';
import { ToDoSearch } from '../ToDoSearch';
import {ToDoList} from '../ToDoList'
import { ToDoItem } from '../ToDoItem';
import { CreateToDoButton } from '../CreateToDoButton';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';


function AppUI() {
    const {
        error, loading, searchedToDo, 
        completeToDo, deleteToDo, openModal, setOpenModal
    } = React.useContext(TodoContext)

    return (
        <React.Fragment>

        <ToDoCounter/> 
        
        <ToDoSearch/>
        
        <ToDoList>
            {error && <p>Hubo un error</p>}
            {loading && <p>Cargando</p>}
            {(!loading && !searchedToDo.length) && <p>Crea tu 1er To Do</p>}
            
            {
            searchedToDo.map( todo => 
            (<ToDoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeToDo(todo.text)}
            onDelete={() => deleteToDo(todo.text)}
            />) )
            }  
        </ToDoList>

        {openModal && (
            <Modal>
                <TodoForm/>
            </Modal>
        )}

        <CreateToDoButton setOpenModal={setOpenModal}/>
        
        </React.Fragment>
    )
}

export {AppUI};