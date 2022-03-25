import styled from 'styled-components';


const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width:400px;
  height: 60px;
padding:0 1rem;
  width:100%;
  height: 50px;
  border-bottom-left-radius:var(--borderradius);
  border-bottom-right-radius:var(--borderradius);
  // dark Mode
  ${(props => props.darkMode ? 'color:var(--veryLightGrayishBlue-lt);' : 'color:black;')}
  ${(props) => {
  return props.darkMode ?
    `background-color: var(--VeryDarkDesaturatedBlue);`
    :`background-color: var(--lightGrayishBlue-lt);`
}}
  h4,h5 {
      font-size: .7rem;
      color: grey;
    }
  h4:hover{
    ${(props => props.darkMode ? 'color:var(--veryLightGrayishBlue-lt);' : 'color:black;')}
  }
.filtering {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  h4 {
    cursor: pointer;
  }
  h4:first-child:hover{
    color: var(--BrightBlue);
  }
  
}
.clear-completed {
  cursor: pointer;
}
`;
export default Wrapper
