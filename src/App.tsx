import './App.css';
import {useState} from 'react'
import { NewTodoForm } from './components/NewTodoFrom';
import TodoItem from './components/TodoItem';

type ITodo = {
  id: string,
  title: string,
  completed: boolean
}

function App() {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState<string[]>([]);

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  }

  const addTodo = () => {
    setTodos([text, ...todos]);
    setText('');

  }


  return (
    <div className="App">
      <NewTodoForm value={text} onChange={handleInput} handleClick={addTodo}/>
      <TodoItem id='hhh' completed={false} title='hhh'/>
    </div>
  );
}

export default App;
