export default function Todo({ todo, toggleTodo, deleteTodo }) {
  return (
    <li className={todo.completed ? 'completed' : ''}>
      <span>{todo.text}</span>

      <div className="icons">
        <button onClick={() => toggleTodo(todo.id)}>✔</button>
        <button onClick={() => deleteTodo(todo.id)}>🗑</button>
      </div>
    </li>
  );
}
