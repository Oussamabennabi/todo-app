import styled from 'styled-components';

import circleImg from '../../images/icon-check.svg'


const TodoEl = styled.div`
  ${(props) => {
  return props.darkMode ?
    `background-color: var(--VeryDarkDesaturatedBlue);`
    :`background-color: var(--lightGrayishBlue-lt);`
}}
h4 {
  text-align: center;
  font-size: .9rem;
  ${(props => props.darkMode ? 'color:var(--veryLightGrayishBlue-lt);' : 'color:black;')}
  ${props => {
  return props.isChecked ?
    `color:grey;
    opacity:.7;
    text-decoration: line-through;
    text-decoration-thickness: 2px;
    `
    :''
  }}
}
.circle {
  
${props => {
  return props.isChecked ?
    `
      background-image:url(${circleImg}),var(--checkBackground);
    `
    : 'color:blue;'
  }}
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  transition: all.15s ease-in-out;
}

display: flex;
align-items: center;
justify-content: flex-start;
height: 60px;
padding:0 1rem;
  border-bottom: 1px solid var(--VeryDarkGrayishBlue-bg);
span.delete {
  margin: 0;
  padding:0;
  margin-left: auto;
  opacity: 0;
  font-size: 1.6rem;
  text-align: center;
  cursor: pointer;
}
&:hover span.delete {
  opacity: .8;
}

  animation: fade-in .1s;
  @keyframes fade-in {
    0% {
      transform: translateY(-50%);
    }
    100% {
      transform: translateY(0);
    }
  }
  transition:all 0.15s ease-in-out;

`;

export default TodoEl