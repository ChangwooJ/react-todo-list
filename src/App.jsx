import "./App.css";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
import { useState } from "react";

function App() {
  const [todoList, setTodoList] = useState([]);

  const handleAddTodoItem = (item) => {
    setTodoList((prev) => {
      const nextId = prev.length > 0 ? prev[prev.length - 1].id + 1 : 1;
      return [
        ...prev,
        {
          id: nextId,
          text: item,
          checked: false,
        },
      ];
    });
  };

  const handleToggle = (id) => {
    setTodoList((prevList) =>
      prevList.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  const handleDeleteTodo = (id) => {
    setTodoList((prev) => prev.filter((todo) => todo.id !== id));
  };

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

export default App
