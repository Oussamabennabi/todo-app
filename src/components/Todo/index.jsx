import TodoEl  from "./TodoStyles.styles";

import crossIcon from '../../images/icon-cross.svg'




export default function Todo({darkMode,value,removeTodo,TodoId,checkTodo,isChecked}) {


  return (
    <TodoEl
      id={TodoId}
      darkMode={darkMode}
      // checked={checked}
      isChecked={isChecked}
    >
      <span
        className="circle"
        onClick={()=>checkTodo(TodoId)}
      ></span>
      <h4>{value}</h4>
      <span
        className="delete"
        onClick={()=>removeTodo(TodoId)}
      ><img src={crossIcon} alt="remove" /></span>
      </TodoEl>
  );
}