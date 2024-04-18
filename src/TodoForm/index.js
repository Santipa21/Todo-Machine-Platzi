import React from "react";
import { TodoContext } from "../TodoContext";

function TodoForm() {
    const {
        setOpenModal,
        addTodo,
    } = React.useContext(TodoContext);
    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
      };
      const onCancel = () => {
        setOpenModal(false);
      };

      const onChange = (event) => {
        setNewTodoValue(event.target.value);
      };
      
    return(
        <div className="flex flex-col items-center justify-center h-screen dark">
        <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-200 mb-4">Write your new TODO</h2>
          <form onSubmit={onSubmit} className="flex flex-col">
            <textarea
            value={newTodoValue}
            onChange={onChange}
            placeholder="TODO..." className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="email"/>
            <div>
            <button
            onClick={onCancel}
            className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150" type="button">Cancel</button>
            <button className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150" type="submit">Add</button>
            </div>
          </form>
        </div>
      </div>
      
  
    );
}

export { TodoForm };