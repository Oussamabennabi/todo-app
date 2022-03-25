import React from 'react';
import TodoHeader from '../TodoHeader'
import Todo from "../Todo/index";
import { DragDropContext,Droppable,Draggable } from 'react-beautiful-dnd';


import TodosContainer from './Todos.styles.js'
import Tools from '../Tools';

export default function Todos({darkMode,toggleTheme }) {

  const [todos, setTodos] = React.useState([])
  const [all,setAll] = React.useState(true)
  const [completed,setCompleted] = React.useState(false)
  const [active, setActive] = React.useState(false)
  const [alert ,setAlert] = React.useState(false)
    // LOCAL STORAGE :
  React.useEffect(() => {
      
    localStorage.setItem('TODOS', JSON.stringify(todos));
  }, [todos])
  const localTodos = JSON.parse(localStorage.getItem('TODOS'))
  React.useEffect(function () {
    setTodos(localTodos?localTodos:[])
    },[])

  function addTodo(value) {
    if (value) {
      // when entering a new todo i want it to show all instead of showing what the prev filtering was 
      setAll(true)
      setCompleted(false)
      setActive(false)
      //------------------
      
      setTodos(prevTodos => {
        return [...prevTodos,
          {
            id: Math.random() * 200,
            value: value,
            checked: false
          }
        ]
      })
      localStorage.setItem('TODOS', JSON.stringify(todos));
    }
  }
  function removeTodo(id) {
    setAll(true)
      setCompleted(false)
      setActive(false)
    let newTodos = todos.filter((todo) => {
        return todo.id !== id;
    })
    setTodos([...newTodos])
    localStorage.setItem('TODOS', JSON.stringify(todos));

  }
  function checkTodo(id) {
      setAll(true)
      setCompleted(false)
      setActive(false)
    let newTodo = todos.filter((todo) => {
        return todo.id === id;
      })
      newTodo[0].checked= !newTodo[0].checked 
      setTodos(prevTodos => {
        return [...prevTodos]
      })
      localStorage.setItem('TODOS', JSON.stringify(todos));
  }

  // filtering
  const filteredTodos = todos.filter(todo => {
    if (all) return todo 
    if (completed) return todo.checked       
    if (active) return !todo.checked
    return todo
  })
  const TodoEls = filteredTodos ? filteredTodos.map((todo,i) => (
    // <Draggable key={todo.id} draggableId={`draggable-${todo.id}`} index={i}>  
    //   {(provided, snapshot) => (
        <Todo 
          //  innerRef={provided.innerRef}
          // {...provided.draggableProps}
          // {...provided.dragHandleProps}
          key={todo.id}
          TodoId={todo.id}
          value={todo.value}
          darkMode={darkMode}
          removeTodo={removeTodo}
          checkTodo={checkTodo}
          isChecked={todo.checked}
      ></Todo>
      // )}
      // </Draggable>
  )) :undefined
  
  function showActive() {
    if (!active) {
      setActive(prevState=> !prevState)
      setAll(false)
      setCompleted(false)
    }
  }
  function showAll() {
    if (!all) {
      setAll(prevState => !prevState)
      setActive(false)
      setCompleted(false)
    }
  }
  function showCompleted() {
    if (todos.filter(todo => todo.checked) < 1) {
      setAlert(prevState=> !prevState)
      setTimeout(() => setAlert(false), 1500);
      return
    }
    if (!completed) {
      setCompleted(prevState => !prevState)
      setActive(false)
      setAll(false)
    }
  }
  function clearCompleted() {

    setAll(true)
    setCompleted(false)
    setActive(false)
    if (todos.filter(todo => todo.checked) < 1) {
      setAlert(prevState=> !prevState)
      setTimeout(() => setAlert(false), 1500);
      return
    }
    const newTodos = todos.filter(todo => {
      return !todo.checked
    })
    setTodos(newTodos)
  }
  let items = todos.filter(todo => {
    return !todo.checked
  }).length

  
  return (
    <TodosContainer>    

      <TodoHeader
        toggleTheme={toggleTheme}
        darkMode={darkMode}
        addTodo={addTodo}
        alert={alert}
      />
      {/* <DragDropContext onDragEnd={(...props)=>{console.log(props)}}>
        <Droppable  droppableId="droppable-1"> 
        {(provided, snapshot) => {  */}
            <div
            //  innerRef={provided.innerRef}
              className="todos-container"
              // style={{ backgroundColor: snapshot.isDraggingOver ? 'blue' : 'grey' }}
              // {...provided.droppableProps}
            >
            {TodoEls}
          </div>

        {/* }} */}
          
        {/* </Droppable>   */}
        {/* </DragDropContext>  */}
      {todos.length > 0 &&
        <Tools
        darkMode={darkMode}
        items={items}
        all={showAll}
        completed={showCompleted}
        active={showActive}
        clearCompleted={clearCompleted}
        />
      }
    </TodosContainer>
  );
}
