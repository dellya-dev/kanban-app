import useTask from '../context/useTask'
import { ACTIONS } from '../reducers/actions'
import './Board.css'
import Column from './Column'
import { DndContext } from '@dnd-kit/core'

function Board({ handleOpenModal, search, filter }) {
  const {dispatch} = useTask()

  function handleDragEnd(event) {

    const {active, over} = event

    dispatch({
      type: ACTIONS.MOVE_TASK,
      payload: {
        id: active.id,
        status: over.id
      }
    })
  }

  return (
    <>
      <DndContext onDragEnd={handleDragEnd}>
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
      </DndContext>
    </>
  )
}

export default Board