import TodoItem from '../../components/TodoItem'
import { useAppDispatch} from 'redux-hook'
import { useSelector } from 'react-redux';
import { Todo } from 'types/todo';
import { removeTodo, toggleTodo } from './todoSlice';
import { selectAllTodos } from './todoSelectors';


const TodoList = () => {
    const list = useSelector(selectAllTodos);
    const dispatch = useAppDispatch();
    const handleRemoveTodo = (id: Todo['id']) => {
        dispatch(removeTodo(id));
    };

    const handleToggleTodo = (id: Todo['id']) => {
        dispatch(toggleTodo(id));
    };

    return (
        <ul>
            {list.map((todo) => (
        <TodoItem key={todo.id} {...todo} removeTodo={handleRemoveTodo} toggleTodo={handleToggleTodo}/>
            ))}
        </ul>
    )
}
export default TodoList;