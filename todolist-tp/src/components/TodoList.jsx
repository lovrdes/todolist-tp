import Todo from './Todo';

export default function TodoList({ todos, toggleTodo, deleteTodo }) {
  if (!todos.length) return <p>No hay tareas</p>;

  return (
    <ul>
      {todos.map(todo => (
        <Todo
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
}
