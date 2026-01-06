import { useState } from 'react';

export default function Form({ setTodos }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text.trim()) return;

    setTodos(prev => [
      ...prev,
      {
        id: crypto.randomUUID(),
        text: text.trim(),
        completed: false
      }
    ]);

    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Nueva tarea"
      />
      <button type="submit">Agregar</button>
    </form>
  );
}
