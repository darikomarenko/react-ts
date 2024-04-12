import './App.css';
import { useState} from 'react'
import { NewTodoForm } from './components/NewTodoFrom';
import TodoList from './components/TodoList';
import { Todo } from './types/todo';


function App() {
  const [todos, setTodos] = useState<Todo[]>([]);



  const addTodo = (text: string) => {
    const newTodo = {
      id: new Date().toString(),
      title: text,
      completed: false,

    }
    setTodos([newTodo, ...todos]);
  }

  const toggleTodo = (id: Todo['id']) => {
    setTodos(todos.map(todo => {
      if(todo.id !== id) return todo;
      return {
        ...todo,
        completed: !todo.completed,
      }
    }))
  }

  const remobeTodo =(id: Todo['id']) =>{
    setTodos(todos.filter(todo => todo.id !== id))
  }


  return (
    <div className="App">
      <NewTodoForm handleClick={addTodo}/>
      <TodoList list={todos} removeTodo={remobeTodo} toggleTodo={toggleTodo}/>
    </div>
  );
}

export default App;
