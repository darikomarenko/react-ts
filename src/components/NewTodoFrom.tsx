import { useRef } from "react"

interface NewTodoFromProps {
    handleClick: (text:string) => void,


}

export const NewTodoForm = ({handleClick}: NewTodoFromProps) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const onClick = () => {
        if (inputRef.current) {
            handleClick(inputRef.current.value)
            inputRef.current.value = ''
        }

    }
        return (
        <>
        <input type="text" placeholder="new todo" ref={inputRef}/>
        <button onClick={onClick}>Add todo</button>
        </>
    )
}