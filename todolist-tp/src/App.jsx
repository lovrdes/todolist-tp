import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
return (
<div className= "app">
<h1>tp</h1>
<Form />

<select>
<option>Todas</option>
<option>Completadas</option>
<option>Pendientes</option>
</select>

<TodoList />
</div>
);
}

export default App
