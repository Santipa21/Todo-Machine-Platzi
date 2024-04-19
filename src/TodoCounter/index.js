import React from "react";
import { TodoContext } from "../TodoContext";

function TodoCounter() {
  const {
    completedTodos,
    totalTodos,
  } = React.useContext(TodoContext);
    return (
     <h1 className='text-2xl text-center m-0 p-12 '>
      You have completed <span className='font-bold'>{completedTodos}</span> of <span className='font-bold	'>{totalTodos}</span> TODOS
     </h1>
    );
  }

  export { TodoCounter };