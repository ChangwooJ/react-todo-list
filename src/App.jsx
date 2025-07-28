import "./App.css";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
import { useCallback, useRef, useState } from "react";

function createBulkTodos() {
  const array = [];
  for (let i = 1; i < 7500; i++) {
    array.push({
      id: i,
      text: `할 일${i}`,
      checked: false,
    });
  }
  return array;
}

function App() {
  const [todoList, setTodoList] = useState(() => createBulkTodos());
  const nextId = useRef(1);

  const handleAddTodoItem = useCallback((item) => {
    const todo = { id: nextId.current, text: item, checked: false };
    setTodos(todos => todos.concat(todo));
    nextId.current += 1;
  }, []);

  const handleToggle = useCallback((id) => {
    setTodoList((prevList) =>
      prevList.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  }, []);

  const handleDeleteTodo = useCallback((id) => {
    setTodoList((prev) => prev.filter((todo) => todo.id !== id));
  }, []);

  return (
    <TodoTemplate>
      <TodoInsert onAddTodoItem={handleAddTodoItem} />
      <TodoList
        todoList={todoList}
        onToggle={handleToggle}
        onDeleteTodo={handleDeleteTodo}
      />
    </TodoTemplate>
  );
}

export default App;
