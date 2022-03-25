import React from "react";
// styles
import { Wrapper, Header, Input } from './TodoHeader.styles';
// icons :
import SUN_ICON from '../../images/icon-sun.svg';
import MOON_ICON from '../../images/icon-moon.svg';


let value;
function TodoHeader({darkMode,toggleTheme,addTodo,alert}) {

  function onChangeHandler(e) {
    value = e.target.value;
  }
  function handleSubmit(e) {
    e.preventDefault();
    
  }
  return (
    <Wrapper>
      <Header>
        <h1>T O D O</h1>
        <img onClick={toggleTheme}src={darkMode ? SUN_ICON : MOON_ICON} alt="icon"/>
      </Header>
      {alert && <div className="alert">You Dont Have any completed todos yet</div>}
      <label htmlFor="input"></label>
       <Input
        darkMode={darkMode}
      >
        <form onSubmit={handleSubmit}>
          <button type="submit" className="circle" onClick={()=>addTodo(value)}>
            
          </button>
        <input
          id="input"
          onChange={onChangeHandler}
        />
        </form>
      </Input>
    </Wrapper>
  );
  
}

export default TodoHeader;
