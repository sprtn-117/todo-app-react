import React from "react";
import { useLocalStorage } from "./useLocalStorage";


const TodoContext = React.createContext()

function TodoProvider(props){
    const {
        item: todos, 
        saveItem: saveToDo,
        loading,
        error,
    } = useLocalStorage("ToDo_V1", [])

    const [searchValue, setSearchValue] = React.useState("")
    const completedToDo = todos.filter( task => task.completed).length
    const total = todos.length
    const [openModal, setOpenModal] = React.useState(false)

    let searchedToDo = []
    
    if(searchValue.length === 0){
        searchedToDo = todos
    }
    else{
        searchedToDo = todos.filter( task => {
        return task.text.toLowerCase().includes(searchValue.toLowerCase())
        })
    }

    const addToDo = (text) => {
        console.log("Agregaste el ToDo " + text)
        todos.push({
            text: text,
            completed: false
        })
        const newToDo = [...todos]
        saveToDo(newToDo)
    }

    const completeToDo = (text) => {
        const index = todos.findIndex( task => task.text === text)
        todos[index].completed = true
        console.log("Ya completaste el ToDo " + todos[index].text)
        const newToDo = [...todos]
        saveToDo(newToDo)
    }

    const deleteToDo = (text) => {
        const index = todos.findIndex( task => task.text === text)
        todos.splice(index, 1)
        console.log("Eliminaste el ToDo " + text)
        const newToDo = [...todos]
        saveToDo(newToDo)
    }

    return (
        <TodoContext.Provider value={{
            loading,
            error,
            completedToDo,
            total,
            searchValue,
            setSearchValue,
            addToDo,
            searchedToDo,
            completeToDo,
            deleteToDo,
            openModal,
            setOpenModal,
        }}>
            {props.children}
        </TodoContext.Provider>
    )
}

export {TodoContext, TodoProvider}