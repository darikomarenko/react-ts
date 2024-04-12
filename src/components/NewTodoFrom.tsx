interface NewTodoFromProps {
    value: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    handleClick: () => void,


}

export const NewTodoForm = ({value, onChange, handleClick}: NewTodoFromProps) => {
    return (
        <>
        <input type="text" placeholder="new todo" value={value}
        onChange={onChange}/>
        <button onClick={handleClick}>Add todo</button>
        </>
    )
}