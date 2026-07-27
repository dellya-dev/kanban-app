import './Board.css'
import Column from './Column'

function Board({ handleOpenModal, search, filter }) {

  return (
    <>
      <div>
        <h3>Todo</h3>
        <Column
          status="todo"
          handleOpenModal={handleOpenModal}
          search={search}
          filter={filter}
        />
      </div>

      <div>
        <h3>Doing</h3>
        <Column
        status="doing"
        handleOpenModal={handleOpenModal}
        search={search}
        filter={filter}
      />
      </div>
      
      <div>
        <h3>Done</h3>
        <Column
        status="done"
        handleOpenModal={handleOpenModal}
        search={search}
        filter={filter}
      />
      </div>
      
    </>
  )
}

export default Board