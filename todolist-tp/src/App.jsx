import { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';
import ConfirmModal from './components/ConfirmModal';
import { loadTodos, saveTodos } from './utils/localStorage';

function App() {
  const [todos, setTodos] = useState(() => loadTodos());
  const [filter, setFilter] = useState('all');
  const [todoToDelete, setTodoToDelete] = useState(null);

  useEffect(() => {
    saveTodos(todos);
  }, [todos]);

  const requestDeleteTodo = (todo) => {
    setTodoToDelete(todo);
  };

  const confirmDeleteTodo = () => {
    setTodos(prev => prev.filter(t => t.id !== todoToDelete.id));
    setTodoToDelete(null);
  };

  const cancelDeleteTodo = () => {
    setTodoToDelete(null);
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'completed') return todo.completed;
    if (filter === 'pending') return !todo.completed;
    return true;
  });

  return (
    <div className="app">
      <h1>Gestión de Tareas</h1>

      <Form setTodos={setTodos} />

      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="all">Todas</option>
        <option value="completed">Completadas</option>
        <option value="pending">Pendientes</option>
      </select>

      <TodoList
        todos={filteredTodos}
        setTodos={setTodos}
        onDelete={requestDeleteTodo}
      />

      {todoToDelete && (
        <ConfirmModal
          message="¿Seguro que querés eliminar esta tarea?"
          onConfirm={confirmDeleteTodo}
          onCancel={cancelDeleteTodo}
        />
      )}
    </div>
  );
}

export default App;
