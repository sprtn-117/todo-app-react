import React from 'react'
import { TodoContext } from '../TodoContext';
import { ToDoCounter } from '../ToDoCounter';
import { ToDoSearch } from '../ToDoSearch';
import {ToDoList} from '../ToDoList'
import { ToDoItem } from '../ToDoItem';
import { CreateToDoButton } from '../CreateToDoButton';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';
import { ToDoLoading } from '../ToDoLoading';
import { ToDoEmpty } from '../ToDoEmpty';
import { ToDoError } from '../ToDoError';


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
            {error && <ToDoError error={error}/>}
            {loading && <ToDoLoading/>}
            {(!loading && !searchedToDo.length) && <ToDoEmpty/>}
            
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