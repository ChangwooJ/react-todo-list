// todo배열을 props로 받아 온 후, 여러개의 TodoListItem 컴포넌트로 변환한 후 보여줍니다.

import styled from "styled-components";
import TodoListItem from "./TodoListItem";
import React from "react";
import { AutoSizer, List } from "react-virtualized";

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
  const rowRenderer = ({ index, key, style }) => {
    const todo = todoList[index];
    return (
      <div key={key} style={style}>
        <TodoListItem
          todo={todo}
          onToggle={onToggle}
          onDeleteTodo={onDeleteTodo}
        />
      </div>
    );
  };
  
  return (
    <TodoListContainer>
      <AutoSizer>
        {({ width, height }) => (
          <List
            width={width}
            height={height}
            rowCount={todoList.length}
            rowHeight={40}
            rowRenderer={rowRenderer}
            overscanRowCount={5}
          />
        )}
      </AutoSizer>
    </TodoListContainer>
  );
}

export default React.memo(TodoList);