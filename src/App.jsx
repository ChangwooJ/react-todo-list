import "./App.css";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
import { useCallback, useState } from "react";

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

  const handleAddTodoItem = useCallback((item) => {
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
