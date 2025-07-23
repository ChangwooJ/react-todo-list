// todo배열을 props로 받아 온 후, 여러개의 TodoListItem 컴포넌트로 변환한 후 보여줍니다.

import styled from "styled-components";
import TodoListItem from "./TodoListItem";

const TodoListContainer = styled.div`
  width: 100%;
  height: 70%;
  background-color: #00805e;
  color: white;
  font-size: 1.5rem;
  padding: 3%;
  box-sizing: border-box;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const TodoList = ({ todoList, onToggle, onDeleteTodo }) => {
  return (
    <TodoListContainer>
      {todoList.map((todo) => (
        <TodoListItem key={todo.id} todo={todo} onToggle={onToggle} onDeleteTodo={onDeleteTodo} />
      ))}
    </TodoListContainer>
  );
}

export default TodoList;