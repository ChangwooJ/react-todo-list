// 각 할 일 항목에 대한 정보를 보여주는 컴포넌트. Todo 객체를 props로 받아와 상태에 따라 다른 스타일의 UI를 보여줍니다.

import styled from "styled-components";
import { AiFillMinusCircle } from "react-icons/ai";

const TodoListItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const CustomCheckbox = styled.input`
  transform: scale(2);
  margin-right: 8px;
`;

const TodoText = styled.label`
  flex: 1;
  font-size: 1.5rem;
  ${(props) => props.checked && "text-decoration: line-through; color: lightgray;"}
`;

const StyledDeleteIcon = styled(AiFillMinusCircle)`
  width: 30px;
  height: 30px;
  padding: 0 10px;
  color: #fe8888;
  cursor: pointer;
`;

const TodoListItem = ({ todo, onToggle, onDeleteTodo }) => {
  return (
    <TodoListItemContainer>
      <CustomCheckbox
        type="checkbox" 
        id={`todo-checkbox-${todo.id}`} 
        checked={todo.checked} 
        onChange={() => onToggle(todo.id)} 
      />
      <TodoText checked={todo.checked} htmlFor={`todo-checkbox-${todo.id}`}>{todo.text}</TodoText>
      <StyledDeleteIcon onClick={() => onDeleteTodo(todo.id)} />
    </TodoListItemContainer>
  );
};

export default TodoListItem;
