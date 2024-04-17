import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoItem } from './TodoItem';
import React from "react";
import { useEffect } from "react";



const defaultTodos = [
  {text: 'Desayunar', completed: true},
  {text: 'Ir al Gym', completed: false},
  {text: 'Trabajar', completed: true},
  {text: 'Estudiar', completed: false},
  {text: 'Almorzar', completed: true},
  {text: 'Dormir', completed: false},
];

function App() {
  const [todos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  useEffect(() => {
    console.log(searchValue);
  }, [searchValue])
  return (
    <>
      <TodoCounter 
      completed={completedTodos} 
      total={totalTodos} />
      <TodoSearch
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      />

      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem
          key={todo.text}
          text={todo.text}
          completed={todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton/>

    </>
  );
}

export default App;