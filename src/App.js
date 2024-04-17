import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoItem } from './TodoItem';

const defaultTodos = [
  {text: 'Desayunar', completed: true},
  {text: 'Ir al Gym', completed: false},
  {text: 'Trabajar', completed: true},
  {text: 'Estudiar', completed: false},
  {text: 'Almorzar', completed: true},
  {text: 'Dormir', completed: false},
];

function App() {
  return (
    <>
      <TodoCounter completed={3} total={500} />
      <TodoSearch />

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