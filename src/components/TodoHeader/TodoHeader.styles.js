import styled from 'styled-components';

export const Wrapper = styled.div`
  
  max-width:400px;
  width:100%;
  margin-top: 7rem;
`;


export const Header = styled.div`
h1{
  font-size:2.4rem;
  font-weight:bold;
}
display: flex;
  justify-content: space-between;
  align-items: center;
    color: #fff;
    margin-bottom: 2rem;
    img {
      cursor: pointer;
      transition: .2s ease-in-out;
      &:hover {
        transform: rotate(360deg);
      }
    }
`;
export const Input = styled.div`
${(props) => {
  return props.darkMode ?
    `background-color: var(--VeryDarkDesaturatedBlue);`
    :`background-color: var(--lightGrayishBlue-lt);`
}}
display: flex;
align-items: center;
justify-content: space-between;
height: 60px;
border-radius: var(--borderradius);
padding:0 1rem;
margin-bottom:1.5rem;
  input {
    outline: none;
    border: none;
    width:90%;
    height:100%;
    font-weight: 100;
    font-size: 1.1rem;
    background: transparent;
    font-family: inherit;
  ${(props => props.darkMode ? 'color:white;':'color:black;')}
  }
  form {
    display: flex;
    justify-content: center;
    align-items: center;
    width:90%;
    height:100%;
    button {
      border: none;
      background: transparent;

    }
  }
`;




