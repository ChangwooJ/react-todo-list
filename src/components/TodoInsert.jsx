// 새로운 항목을 입력하고 추가할 수 있는 컴포넌트. state를 통해서 인풋의 상태를 관리합니다.
import styled from "styled-components";
import { CgAdd } from "react-icons/cg";
import React, { useState } from "react";

const TodoInsertContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 12%;
  background-color: #00916a;
`;

const TodoInput = styled.input`
  flex: 1;
  height: 100%;
  font-size: 1.5rem;
  text-indent: 1rem;
  background-color: #00916a;
  color: white;
  border: none;
  box-sizing: border-box;

  &::placeholder {
    color: #e7e7e7;
  }
`;

const StyledAddIcon = styled(CgAdd)`
  width: 30px;
  height: 30px;
  padding: 0 10px;
  color: white;
  cursor: pointer;
`;

const TodoInsert = ({ onAddTodoItem }) => {
  const [input, setInput] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAddTodo(e);
    }
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    onAddTodoItem(input);
    setInput("");
  };

  return (
    <TodoInsertContainer>
      <TodoInput 
        placeholder="할 일을 입력해주세요." 
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <StyledAddIcon onClick={handleAddTodo} />
    </TodoInsertContainer>
  );
}

export default React.memo(TodoInsert);
