import React from "react";
import { useEffect } from "react";
import { useLocalStorage } from './useLocalStorage';
import { AppUI } from './AppUi';

// const defaultTodos = [
//   {text: 'Desayunar', completed: true},
//   {text: 'Ir al Gym', completed: false},
//   {text: 'Trabajar', completed: true},
//   {text: 'Estudiar', completed: false},
//   {text: 'Almorzar', completed: true},
//   {text: 'Dormir', completed: false},
// ];
// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
// localStorage.removeItem('TODOS_V1');

function App() {
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;
  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    }
  );

  useEffect(() => {
    console.log(searchValue);
  }, [searchValue]);

  

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex =newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex =newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  return(
    <AppUI
    completedTodos={completedTodos}
    totalTodos={totalTodos}
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    searchedTodos={searchedTodos}
    completeTodo={completeTodo}
    deleteTodo={deleteTodo}
    />
  );
}

export default App;