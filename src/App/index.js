import React from 'react';
import { TodoProvider } from '../TodoContext';
import { AppUI } from './AppUI';



/*
const defaultToDos = [
  {text: "Curso Definitivo de HTML y CSS", completed: true},
  {text: "Introducción a react", completed: true},
  {text: "Ingeniería de datos con Python", completed: false},
  {text: "Ingeniería de datos con pyspark", completed: false},
]
*/

function App() {

  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  )
};

export default App;
