import {Todo} from '../types/todo'

interface TodoItemProps extends Todo{
    style?: React.CSSProperties,
    toggleTodo: (id: Todo['id']) => void;
    removeTodo: (id: Todo['id']) => void;

}

const TodoItem = ({id, title, completed, style ={}, toggleTodo, removeTodo}: TodoItemProps) => {
    return (
        <li style={{color: 'black', backgroundColor: 'white', ...style}}>
            <input type="checkbox" checked={completed} onChange={() => toggleTodo(id)}/>
            <span>{title}</span>
            <span onClick={() => removeTodo(id)}>&times;</span>
        </li>
    )
}

TodoItem.defaultProps = {}

export default TodoItem;