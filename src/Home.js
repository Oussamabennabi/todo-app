import React from 'react';

import './styles/global.css'
// components
import Wrapper from './components/Wrapper/Wrapper';
import Todos from './components/Todos'

export default function Home() {
  const [inDarkMode, setInDarkMode] = React.useState(true);

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
        toggleTheme={toggleTheme}
      /> 
<div className="attribution">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
      Coded by <a href="#">Oussama Bennabi</a>.
      </div>         
      </Wrapper>
  
    </main>
      
  );

}



