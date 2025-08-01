// 화면을 가운데에 정렬시켜주며, 앱 타이틀(일정관리)를 보여줌. children으로 내부 JSX를 Props로 받아와 렌더링합니다.

import styled from "styled-components";
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
  overflow: hidden;
`;

const TodoTemplate = ({ children }) => {
  return (
    <TodoListTemplateContainer>
      <TodoListTemplateWrapper>
        <Header />
        {children}
      </TodoListTemplateWrapper>
    </TodoListTemplateContainer>
  );
};

export default TodoTemplate;