import TodoItem from '../../components/TodoItem'
import { useAppDispatch} from 'redux-hook'
import { useSelector } from 'react-redux';
import { Todo } from 'types/todo';
import { selectAsyncTodos } from './AsyncTodoSelector';
import { useEffect } from 'react';
import { removeTodo, fetchAllTodos, toggleTodo} from './todoAsyncAction';
import 


const AsyncTodoList = () => {
    const {list} = useSelector(selectAsyncTodos);
    const dispatch = useAppDispatch();

    const handleRemoveTodo = (id: Todo['id']) => {
       dispatch(removeTodo(id));
    }

    const handleToggleTodo = (id: Todo['id']) => {
        dispatch(toggleTodo(id));
    };


    useEffect(() => {
        dispatch(fetchAllTodos());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <ul>
            {list.map((todo) => (
        <TodoItem key={todo.id} {...todo} removeTodo={handleRemoveTodo} toggleTodo={handleToggleTodo}/>
            ))}
        </ul>
    )
}
export default AsyncTodoList;