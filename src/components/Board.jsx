import './Board.css'
import  Column from './Column'

function Board({ tasks, dispatch, handleOpenModal }) {

  return(
    <>
      <Column 
        tasks={tasks} 
        status= "todo"
        dispatch={dispatch}
        handleOpenModal={handleOpenModal}
      />
      <Column 
        tasks={tasks} 
        status= "doing"
        dispatch={dispatch}
        handleOpenModal={handleOpenModal}
      />
      <Column 
        tasks={tasks} 
        status= "done"
        dispatch={dispatch}
        handleOpenModal={handleOpenModal}
      />
    </>
  )
}

export default Board