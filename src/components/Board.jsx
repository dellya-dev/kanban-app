import './Board.css'
import  Column from './Column'

function Board({ tasks, dispatch }) {

  return(
    <>
      <Column 
        tasks={tasks} 
        status= "todo"
        dispatch={dispatch}
      />
      <Column 
        tasks={tasks} 
        status= "doing"
        dispatch={dispatch}
      />
      <Column 
        tasks={tasks} 
        status= "done"
        dispatch={dispatch}
      />
    </>
  )
}

export default Board