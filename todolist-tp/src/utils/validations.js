export const validateTodo = (text) => {
    if (!text.trim()) {
        return 'La tarea no puede estar vacía';
    }

    if (text.trim().length < 3) {
        return 'La tarea debe tener al menos 3 caracteres';
    }

    return '';
};
