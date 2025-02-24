import styled from "styled-components";
import TodoListItem from "./TodoListItem.jsx";
import {List} from "react-virtualized";

const TodoListContainer = styled.div`
    background: #fff;
    padding: 1rem;
    box-sizing: border-box;
    border-radius: 4px;
`;

const TodoList = ({ todos, onRemove, onCheck }) => {
    // ✅ 개별 항목을 렌더링하는 함수
    const rowRenderer = ({ index, key, style }) => {
        const todo = todos[index]; // 현재 렌더링할 todo 항목
        return (
            <div key={key} style={style}>
                <TodoListItem todo={todo} onRemove={onRemove} onCheck={onCheck} />
            </div>
        );
    };

    return (
        <TodoListContainer>
            <List
                width={472}             // 리스트의 가로 크기
                height={465}            // 리스트의 높이 (보이는 영역)
                rowCount={todos.length} // 리스트 항목 개수
                rowHeight={56}          // 개별 항목 높이 (TodoListItem 높이)
                rowRenderer={rowRenderer} // 항목을 렌더링하는 함수
                overscanRowCount={0}    // 추가로 렌더링할 항목 개수 (스크롤 성능 최적화)
            />
        </TodoListContainer>
    );
};

export default TodoList;
