import GlobalStyle from "./style/GlobalStyle.js";
import TodoTemplate from "./components/TodoTemplate.jsx";
import TodoInsert from "./components/TodoInsert.jsx";
import TodoList from "./components/TodoList.jsx";
import {useCallback, useRef, useState} from "react";

function createBulkTodos(){
    const array = [];
    for(let i=1;i<2500;i++){
        array.push({
            id : i,
            task : `할 일${i}`,
            checked:false,
        });
    }
    return array;
}


function App() {
    const [todos, setTodos] = useState(() => createBulkTodos());
    const todoId = useRef(2501);

    const onInsert = (task) => {
        const todo = {
            id: todoId.current,
            task: task,
            checked:false,
        }
        todoId.current += 1;
        setTodos((prev) => [...prev, todo]);
    };

    const onRemove = useCallback((id) => {
        setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
    }, []);

    const onCheck = useCallback((id) => {
        setTodos((prev) =>
            prev.map(todo =>
                todo.id === id ? { ...todo, checked: !todo.checked } : todo
            )
        );
    }, []);

    return (
        <>
            <GlobalStyle />
            <TodoTemplate>
                <TodoInsert onInsert={onInsert}/>
                <TodoList todos={todos} onRemove={onRemove} onCheck={onCheck}/>
            </TodoTemplate>
        </>
    )
}

export default App
