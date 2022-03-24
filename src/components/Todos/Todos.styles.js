import styled from 'styled-components';


const TodosContainer = styled.div`
  max-width:400px;
  width:100%;
  border-top-left-radius: 20px;
  overflow: hidden;
  transition:all 0.15s ease-in-out;

  .todos-container {
  border-radius: var(--borderradius);
  overflow: hidden;
  }
`;

export default TodosContainer