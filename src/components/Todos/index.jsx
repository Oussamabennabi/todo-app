import React from 'react';
import TodoHeader from '../TodoHeader'
import Todo from "../Todo/index";


import TodosContainer from './Todos.styles.js'


export default function Todos({darkMode,toggleTheme }) {

    const [todos, setTodos] = React.useState([])

  function addTodo(value) {
    if (value) {
      setTodos(prevTodos => {
        return [...prevTodos,
          {
            id: Math.random() * 200,
            value: value,
            checked: false
          }
        ]
      })
    }
  }
  function removeTodo(id) {
    let newTodos = todos.filter((todo) => {
        return todo.id !== id;
    })
    setTodos([...newTodos])
  }

  function checkTodo(id) {
    let newTodo = todos.filter((todo) => {
        return todo.id === id;
      })
      newTodo[0].checked= !newTodo[0].checked 
    setTodos(prevTodos => {
      return [...prevTodos]
    })

  }
  const TodoEls = todos ? todos.map(todo => (
    <Todo
      key={todo.id}
      TodoId={todo.id}
      value={todo.value}
      darkMode={darkMode}
      removeTodo={removeTodo}
      checkTodo={checkTodo}
      isChecked= {todo.checked}
    /> 
  )) : undefined;


  return (
    <TodosContainer>    

      <TodoHeader
        toggleTheme={toggleTheme}
        darkMode={darkMode}
        addTodo={addTodo}
      />
      <div className="todos-container">

      {TodoEls}
      </div>
    </TodosContainer>
  );
}