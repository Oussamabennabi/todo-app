import React from 'react';

import './styles/global.css'
// components
import Wrapper from './components/Wrapper/Wrapper';
// import TodoHeader from './components/TodoHeader'
import Todos from './components/Todos'

export default function Home() {
  const [inDarkMode, setInDarkMode] = React.useState(true);
//   const [todos, setTodos] = React.useState([{
//     id: Math.random() * 200,
//     value: undefined,
//     checked: false
//   }])
  
//   function addTodo(value) {
//     if (value) {
//       setTodos(prevTodos => {
//         return [...prevTodos,
//           {
//             id: Math.random() * 200,
//             value: value,
//             checked: false
//           }
//         ]
//       })
//     }
//   }
//   function removeTodo(id) {
//     // setTodo();
//     console.log(id)
//   }
//   function checked(id) {
//     // setTodo();
//     console.log(id)
//   }
  function toggleTheme() {
    setInDarkMode(prevMode => !prevMode)
  }

  return (
    <main>

    <Wrapper
      darkMode={inDarkMode}
    >
      <Todos
        darkMode={inDarkMode}
        // Todos={todos}
        toggleTheme={toggleTheme}
        // remove={removeTodo}
        // checked={checked}
      /> 
      </Wrapper>
    </main>
      
  );

}



