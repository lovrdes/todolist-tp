const KEY = 'todos';

export const loadTodos = () => {
    const data = localStorage.getItem(KEY);
    return data ? JSON.parse(data) : [];
};

export const saveTodos = (todos) => {
    localStorage.setItem(KEY, JSON.stringify(todos));
};
