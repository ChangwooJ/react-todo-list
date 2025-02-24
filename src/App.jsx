import { useState, useMemo, useCallback } from 'react';
import TodoTemplate from './app/todo/TodoTemplate';
import styled from 'styled-components';
import Header from './components/Header/Header';
import TodoInsert from './components/Content/TodoInsert/TodoInsert';
import TodoList from './components/Content/TodoList/TodoList';

export const MainLayout = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #bdbfc1;
`;

function createBulkTodos() {
  const array = [];
  for (let i = 1; i < 2500; i++) {
    array.push({
      id: i,
      text: `할 일${i}`,
      checked: false,
    });
  }
  return array;
}

const App = () => {
  const [todoList, setTodoList] = useState(() => createBulkTodos());

  const handleAddTodo = useCallback((text) => {
    setTodoList((prev) => [
      ...prev,
      {
        id: prev.length > 0 ? Math.max(...prev.map((todo) => todo.id)) + 1 : 1,
        text: text,
        checked: false,
      },
    ]);
  }, []);

  const handleDeleteTodo = useCallback((id) => {
    setTodoList((prev) => prev.filter((todo) => todo.id !== id));
  }, []);

  const toggleTodoChecked = useCallback((id) => {
    setTodoList((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  }, []);

  return (
    <MainLayout>
      <TodoTemplate>
        <Header />
        <TodoInsert onAddTodo={handleAddTodo} />
        <TodoList
          todoList={todoList}
          onCheckTodo={toggleTodoChecked}
          onDeleteTodo={handleDeleteTodo}
        />
      </TodoTemplate>
    </MainLayout>
  );
};

export default App;
