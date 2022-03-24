import Wrapper from './Tools.styles';

export default function Tools({items,darkMode,all,active,completed,clearCompleted}) {
  


  return (
    <Wrapper darkMode={darkMode}>
      <div>
        <h5>{items}{items>1?` items`:" item"} left</h5>
      </div>
      <div className="filtering">
        <h4 onClick={all}>All</h4>
        <h4 onClick={active}>Active</h4>
        <h4 onClick={completed}>Completed</h4>
      </div>
      <div>
        <h4 className="clear-completed" onClick={clearCompleted}>Clear Completed</h4>
      </div>

    </Wrapper>

  );

}
