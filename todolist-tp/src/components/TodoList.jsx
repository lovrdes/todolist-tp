import Todo from './Todo';

export default function TodoList({ todos, setTodos, onDelete }) {
  if (!todos.length) return <p>No hay tareas</p>;

  return (
    <ul>
      {todos.map(todo => (
        <Todo
          key={todo.id}
          todo={todo}
          setTodos={setTodos}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}
