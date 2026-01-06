import { useState } from 'react';
import { validateTodo } from '../utils/validations';

export default function Form({ setTodos }) {
  const [text, setText] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationError = validateTodo(text);

    if (validationError) {
      setError(validationError);
      return;
    }

    setTodos(prev => [
      ...prev,
      {
        id: crypto.randomUUID(),
        text: text.trim(),
        completed: false
      }
    ]);

    setText('');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="input-icon">
        <span>➕</span>

        <input
          type="text"
          placeholder="Nueva tarea"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
            if (error) setError('');
          }}
          aria-label="Agregar nueva tarea"
        />

        <button type="submit">Agregar</button>
      </div>

      {error && <p className="error">{error}</p>}
    </form>
  );
}
