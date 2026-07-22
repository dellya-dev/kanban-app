import './Board.css'
import Column from './Column'

function Board({ tasks, dispatch, handleOpenModal }) {

  return (
    <>
      <div>
        <h3>Todo</h3>
        <Column
          tasks={tasks}
          status="todo"
          dispatch={dispatch}
          handleOpenModal={handleOpenModal}
        />
      </div>

      <div>
        <h3>Doing</h3>
        <Column
        tasks={tasks}
        status="doing"
        dispatch={dispatch}
        handleOpenModal={handleOpenModal}
      />
      </div>
      
      <div>
        <h3>Done</h3>
        <Column
        tasks={tasks}
        status="done"
        dispatch={dispatch}
        handleOpenModal={handleOpenModal}
      />
      </div>
      
    </>
  )
}

export default Board