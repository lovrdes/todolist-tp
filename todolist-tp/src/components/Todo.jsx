import { useState } from 'react';
import { validateTodo } from '../utils/validations';

export default function Todo({ todo, setTodos, onDelete }) {
    const [editing, setEditing] = useState(false);
    const [text, setText] = useState(todo.text);
    const [error, setError] = useState('');

    const toggleComplete = () => {
        setTodos(prev =>
            prev.map(t =>
                t.id === todo.id
                    ? { ...t, completed: !t.completed }
                    : t
            )
        );
    };

    const handleEdit = () => {
        const validationError = validateTodo(text);
        if (validationError) {
            setError(validationError);
            return;
        }

        setTodos(prev =>
            prev.map(t =>
                t.id === todo.id ? { ...t, text } : t
            )
        );

        setEditing(false);
        setError('');
    };

    return (
        <li className={todo.completed ? 'completed' : ''}>
            {editing ? (
                <>
                    <input
                        value={text}
                        onChange={(e) => {
                            setText(e.target.value);
                            if (error) setError('');
                        }}
                    />
                    <button onClick={handleEdit}>Guardar</button>
                    {error && <p className="error">{error}</p>}
                </>
            ) : (
                <>
                    <span>{todo.text}</span>
                    <div className="icons">
                        <button onClick={toggleComplete}>✔️</button>
                        <button onClick={() => setEditing(true)}>✏️</button>
                        <button onClick={() => onDelete(todo)}>🗑</button>
                    </div>
                </>
            )}
        </li>
    );
}
