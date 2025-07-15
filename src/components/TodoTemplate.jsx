// 화면을 가운데에 정렬시켜주며, 앱 타이틀(일정관리)를 보여줌. children으로 내부 JSX를 Props로 받아와 렌더링합니다.

import { useState } from "react";
import styled from "styled-components";
import TodoInsert from "./TodoInsert";
import TodoList from "./TodoList";
import Header from "./Header";

const TodoListTemplateContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #b8b8b8;
`;

const TodoListTemplateWrapper = styled.div`
  width: 40%;
  height: 60%;
  border: 1px solid black;
`;

const TodoTemplate = () => {
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
      }
    ]})
  }

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
    <TodoListTemplateContainer>
      <TodoListTemplateWrapper>
        <Header />
        <TodoInsert onAddTodoItem={handleAddTodoItem} />
        <TodoList todoList={todoList} onToggle={handleToggle} onDeleteTodo={handleDeleteTodo} />
      </TodoListTemplateWrapper>
    </TodoListTemplateContainer>
  );
}

export default TodoTemplate;