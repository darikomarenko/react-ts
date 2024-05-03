import './App.css';
import NewTodo from 'features/Todo/NewTodo';
import TodoList from './features/Todo/TodoList';
import AsyncTodoList from 'features/AsyncTodo/AsyncTodoList';
import NewAsyncTodo from 'features/AsyncTodo/NewAsyncTodo';

function App() {
  return (
    <div className="App">
      <h1>React + TS + Redux Async Todo List</h1>
      <h2>Тут я использую обычный Redux:</h2>
      <NewTodo/>
      <TodoList/>
      <hr/>
      <h2>Тут я использую асинхронный Redux:</h2>
      <NewAsyncTodo/>
      <AsyncTodoList/>
    </div>
  );
}

export default App; 
